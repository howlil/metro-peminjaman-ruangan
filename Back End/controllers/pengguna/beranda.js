const modelPeminjaman = require('../../models/peminjaman')
const modelRuangan = require('../../models/ruangan')
const modelDetailGambar = require('../../models/detail_gambar_ruangan')
const modelDetailFasilitas = require('../../models/detail_fasilitas_ruangan')
const modelFilePeminjaman = require('../../models/file_format_pengajuan')

//pengecekan jadwal
const cekJadwal = async (req,res) => {
    try {
        // const {tanggal_peminjaman, jam_mulai_peminjaman, id_ruangan} = req.body
        const { tanggal_peminjaman, jam_mulai_peminjaman, id_ruangan } = req.query;

        if (!tanggal_peminjaman || !jam_mulai_peminjaman || !id_ruangan) {
            return res.status(400).json({success: false, message: 'Silahkan lengkapi inputan data'})
        }
        const findData = await modelPeminjaman.findOne({
            where:{
                tanggal_peminjaman:tanggal_peminjaman,
                jam_mulai_peminjaman: jam_mulai_peminjaman,
                id_ruangan: id_ruangan
            }
        })
        if (!findData) {
            return res.status(200).json({success:true, message: 'Peminjaman Tersedia'})
        }
        return res.status(400).json({success: false, message:'Peminjaman sudah tidak tersedia'})        
    } catch (error) {
        console.log(error)
        return res.status(500).json({success: false, message:'Kesalahan server'})
    }
    
}

//menampilkan data ruangan 
const tampilDataRuangan = async (req,res) => {
    try {
        const findData = await modelRuangan.findAll({
            include:[
                {
                    model: modelDetailGambar,
                    as: 'dataGambar',
                    attributes: ['file_gambar']
                }
            ],
            attributes: ['id_ruangan', 'nama_ruangan', 'deskripsi']
        })
        if (!findData) {
            return res.status(400).json({success: false, message:'Data ruangan belum tersedia'})
        }
        return res.status(200).json({success: true, message: 'Data ruangan tersedia', data: findData})        
    } catch (error) {
        console.log(error)
        return res.status(500).json({success: false, message: 'Kesalahan server'})
    }

}

//detail data ruangan
const detailRuangan = async (req,res) => {
    try {
        const {id_ruangan} = req.params
        const dataDetail = await modelRuangan.findByPk(id_ruangan, {
            include: [
                {
                    model: modelDetailGambar,
                    as: 'dataGambar',
                    attributes: ['file_gambar']
                },
                {
                    model: modelDetailFasilitas,
                    as:'dataFasilitas',
                    attributes:['nama_fasilitas']
                }
    
            ],
            attributes: ['id_ruangan', 'nama_ruangan', 'deskripsi', 'gedung', 'lantai', 'kapasitas', 'penanggung_jawab']
        })
        if (!dataDetail) {
            return res.status(400).json({success: false, message: 'Data ruangan tidak ditemukan'})
        }
        return res.status(200).json({success: true, message: 'Data ruangan ditemukan', data: dataDetail})        
    } catch (error) {
        console.log(error)
        return res.status(500).json({success: false, message: 'Kesalahan server'})
    }
    
}

//data cara peminjaman
const caraPeminjaman = async (req,res) => {
    try {
        const dataFile = await modelFilePeminjaman.findAll({
            attributes: ['file_pengajuan', 'link_tutorial']
        })
        if (dataFile.length <= 0) {
            return res.status(400).json({success: false, message: 'Data file cara peminjaman belum tersedia'})
        }
        return res.status(200).json({success: true, message: 'Data file cara peminjaman tersedia', data: dataFile})        
    } catch (error) {
        console.log(error)
        return res.status(500).json({success: false, message: 'Kesalahan server'})
    }
}


module.exports = {cekJadwal, tampilDataRuangan, detailRuangan, caraPeminjaman}
