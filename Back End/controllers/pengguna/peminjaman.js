const modelPeminjaman = require('../../models/peminjaman')
const modelRuangan = require('../../models/ruangan')
const {Op} = require('sequelize')
const multer = require('multer')
const path = require('path')
// jadwal yang diajukan
const tampilDataJadwal = async(req,res) => {
    try {
        const findData = await modelPeminjaman.findAll({
            where:{
                status: {
                    [Op.or]: ['Diproses', 'Disetujui']
                }
            },
            attributes: ['id_peminjaman', 'tanggal_peminjaman', 'jam_mulai_peminjaman', 'jam_selesai_peminjaman']
            
        })
        if (findData.length <= 0 ) {
            return res.status(400).json({success: false, message: 'Data peminjaman belum tersedia'})
        }
        return res.status(200).json({success: true, message: 'Data peminjaman tersedia', data: findData})        
    } catch (error) {
        console.log(error)
        return res.status(500).json({success: false, message: 'Kesalahan server'})
    }
}

//detail jadwal
const tampilDetailJadwal = async (req,res) => {
    try {
        const {tanggal_peminjaman} = req.params
        if (!tanggal_peminjaman) {
            return res.status(400).json({success: false, message: 'Tanggal peminjaman tidak ditemukan'})
        }
        const findJadwal = await modelPeminjaman.findAll({
            where: {
                tanggal_peminjaman: tanggal_peminjaman
            },
            include: [
                {
                    model: modelRuangan,
                    as: 'dataRuangan',
                    attributes: ['nama_ruangan']
                }
            ],
            attributes: ['tanggal_peminjaman', 'jam_mulai_peminjaman', 'jam_selesai_peminjaman', 'nama_peminjam', 'nama_kegiatan', 'status']
        })
        if (findJadwal <= 0) {
            return res.status(400).json({success: false, message: 'Data jadwal tidak ditemukan '})
        }
        return res.status(200).json({success: true, message: 'Data jadwal ditemukan', data: findJadwal})

    } catch (error) {
        console.log(error)
        return res.status(500).json({success: false, message:'Kesalahan server'})
    }
}

const storage = multer.diskStorage({
    destination: function(req,file, cb){
        cb(null, path.join(__dirname, '../', '../', 'public', 'doc', 'filePeminjamanUser'))
    },
    filename: function(req,file,cb){
        cb(null, file.originalname)
    }
})

const fileFilter = function(req,file, cb){
    const allowedTypes = ['application/pdf']
    if (!allowedTypes.includes(file.mimetype)) {
        const error = new multer.MulterError('Jenis File Tidak Di izinkan, Hanya PDF yg Di izinkan');
        error.message = 'Jenis File Tidak Di izinkan, Hanya PDF yg Di izinkan'
        return cb(error, false);
    }
    cb(null,true)
}

const upload = multer({
    storage: storage,
    fileFilter: fileFilter
})

const uploadd = upload.single('file') 

//tambah peminjaman
const tambahPeminjaman = async (req,res) => {
    try {
        const {id_ruangan} = req.params
        if (!id_ruangan) {
            return res.status(400).json({success: false, message: 'Data ruangan tidak ditemukan'})
        }
        const {nama_peminjam, jabatan, nama_kegiatan, kontak, tanggal_peminjaman, jam_mulai_peminjaman, jam_selesai_peminjaman} = req.body
        const file_peminjaman = req.file
        if (!nama_peminjam || !jabatan || !nama_kegiatan || !kontak || !tanggal_peminjaman || !jam_mulai_peminjaman || !jam_selesai_peminjaman || !file_peminjaman) {
            return res.status(400).json({success: false, message:'Lengkapi inputan data anda'})
        }

        const date = new Date()
        const jam = date.getHours()
        const menit = date.getMinutes()
        const time = `${jam}:${menit}`
        const day = date.getDay()
        const month = date.getMonth() + 1
        const year = date.getFullYear()
        const formattedMonth = month < 10 ? `0${month}` : month;
        const formattedDay = day < 10 ? `0${day}` : day;
        const tanggal = `${year}-${formattedMonth}-${formattedDay}`;
        if (tanggal_peminjaman < tanggal) {
            return res.status(400).json({success: false, message: 'Tidak bisa melakukan peminjaman di tanggal yang sudah lewat'})
        }
        if (tanggal_peminjaman == tanggal && jam_mulai_peminjaman < time) {
            return res.status(400).json({success: false, message: 'Tidak bisa melakukan peminjamana pada waktu yang telah lewat'})
        }
        const findJadwalSama = await modelPeminjaman.findOne({
            where: {
                id_ruangan: id_ruangan,
                tanggal_peminjaman: tanggal_peminjaman,
                jam_mulai_peminjaman: jam_mulai_peminjaman,
                jam_selesai_peminjaman:jam_selesai_peminjaman
            }
        })
        if (findJadwalSama) {
            return res.status(400).json({success: false, message: 'Tidak bisa melakukan peminjaman, karena tanggal dan waktu sudah digunakan'})
        }
        const findJadwal = await modelPeminjaman.findAll({
            where: {
                id_ruangan: id_ruangan,
                tanggal_peminjaman: tanggal_peminjaman,
            }
        })
        const jadwalSudahAda = findJadwal.some(jadwal => {
            const jadwalMulai = new Date(jadwal.jam_mulai_peminjaman);
            const jadwalSelesai = new Date(jadwal.jam_selesai_peminjaman);
            const inputMulai = new Date(`${tanggal_peminjaman}T${jam_mulai_peminjaman}`);
            const inputSelesai = new Date(`${tanggal_peminjaman}T${jam_selesai_peminjaman}`);
        
            if (
                (inputMulai >= jadwalMulai && inputMulai < jadwalSelesai) || 
                (inputSelesai > jadwalMulai && inputSelesai <= jadwalSelesai) ||
                (inputMulai <= jadwalMulai && inputSelesai >= jadwalSelesai) 
            ) {
                return true;
            }
        });
        
        if (jadwalSudahAda) {
            return res.status(400).json({ success: false, message: 'Waktu yang dimasukkan sudah tidak tersedia untuk peminjaman' });
        }
        const addPeminjaman = await modelPeminjaman.create({
            id_ruangan: id_ruangan,
            nama_peminjam: nama_peminjam,
            jabatan: jabatan, 
            nama_kegiatan: nama_kegiatan,
            kontak: kontak,
            tanggal_peminjaman: tanggal_peminjaman,
            jam_mulai_peminjaman: jam_mulai_peminjaman,
            jam_selesai_peminjaman: jam_selesai_peminjaman,
            file_peminjaman: file_peminjaman.originalname,
            status: 'Diproses'
        })
        if (!addPeminjaman) {
            return res.status(400).json({success: false, message: 'Peminjaman tidak berhasil diajukan'})
        }
        return res.status(200).json({success: true, message: 'Peminjaman berhasil diajukan'})

    } catch (error) {
        console.log(error)
        return res.status(500).json({success: false, message: 'Kesalahan server'})
    }
}
module.exports = {tampilDataJadwal, tampilDetailJadwal, uploadd, tambahPeminjaman}