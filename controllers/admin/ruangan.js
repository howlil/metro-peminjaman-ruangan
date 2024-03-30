const modelRuangan = require('../../models/ruangan')
const modelFasilitas = require('../../models/detail_fasilitas_ruangan')
const modelGambar = require('../../models/detail_gambar_ruangan')
const multer = require('multer')
const path = require('path')

//tampil ruangan
const tampilRuangan = async (req,res) => {
    try {
        const dataRuangan = await modelRuangan.findAll({
            attributes: ['id_ruangan', 'nama_ruangan']
        })
        if (dataRuangan.length <= 0) {
            return res.status(400).json({success: false, message: 'Data ruangan belum tersedia'})
        }
        return res.status(200).json({success: true, message: 'Data ruangan tersedia', data: dataRuangan})        
    } catch (error) {
        console.log(error)
        return res.status(500).json({success: false, message: 'Kesalahan server'})
    }
}

const storage = multer.diskStorage({
    destination: function(req,file, cb){
        cb(null, path.join(__dirname, '../', '../', 'public', 'images', 'ruangan'))
    },
    filename: function(req,file,cb){
        cb(null, file.originalname)
    }
})

const fileFilter = function(req,file, cb){
    const allowedTypes = ['image/jpeg', 'image/png']
    if (!allowedTypes.includes(file.mimetype)) {
        const error = new multer.MulterError('Jenis File Tidak Di izinkan, Hanya JPEG dan PNG yg Di izinkan');
        error.message = 'Jenis File Tidak Di izinkan, Hanya JPEG dan PNG yg Di izinkan'
        return cb(error, false);
    }
    cb(null,true)
}

const upload = multer({
    storage: storage,
    fileFilter: fileFilter
})

const uploadd = upload.array('file', 20)

//tambah ruangan
const tambahRuangan = async (req,res) => {
    try {
        const {nama_ruangan, deskripsi, kapasitas, penanggung_jawab, gedung, lantai, nama_fasilitas} = req.body
        const file_gambar = req.files
        if (!nama_ruangan || !deskripsi || !kapasitas || !penanggung_jawab || !gedung || !lantai || !file_gambar) {
            return res.status(400).json({success: false, message: 'Silahkan lengkapi data anda'})
        }
        let fasilitas = {}

        if (!Array.isArray(nama_fasilitas)) {
            return res.status(400).json({success: false, message: 'Data fasilitas harus dalam bentuk array'})
        }

        const findNamaRuangan = await modelRuangan.findOne({where: {nama_ruangan: nama_ruangan}})
        if (!findNamaRuangan) {
            const addRuangan = await modelRuangan.create({
                nama_ruangan: nama_ruangan,
                deskripsi: deskripsi,
                gedung: gedung,
                kapasitas: kapasitas,
                penanggung_jawab: penanggung_jawab,
                lantai: lantai
            })
            const id_ruangan = addRuangan.id_ruangan
            for (const item of nama_fasilitas) {
                const{namaFasilitas} = item

                if (!fasilitas) {
                    fasilitas = {
                        namaFasilitas: ''
                    }
                }
                fasilitas.namaFasilitas = namaFasilitas

                await modelFasilitas.create({
                    id_ruangan: id_ruangan,
                    nama_fasilitas: fasilitas.namaFasilitas
                })
            }
            for (const file of file_gambar) {
                await modelGambar.create({
                    id_ruangan: id_ruangan,
                    file_gambar: file.originalname
                })
            }
            return res.status(200).json({success: true, message: 'Data ruangan berhasil ditambahkan'})
        }
        return res.status(400).json({success: false, message: 'Data ruangan dengan nama tersebut sudah tersedia'})
    
    } catch (error) {
        console.log(error)
        return res.status(500).json({success: false, message: 'Kesalahan server'})
    }
}

//edit ruangan
const editRuangan = async (req,res) => {
    try {
        const {id_ruangan} = req.params
        const file_gambar = req.files
        const {nama_ruangan, deskripsi, kapasitas, penanggung_jawab, gedung, lantai, nama_fasilitas} = req.body
        const findDataRuangan = await modelRuangan.findByPk(id_ruangan)
        if (!findDataRuangan) {
            return res.status(400).json({success: false, message: 'Data ruangan tidak ditemukan'})
        }
        await modelRuangan.update({
            nama_ruangan: nama_ruangan || findDataRuangan.nama_ruangan,
            deskripsi: deskripsi || findDataRuangan.deskripsi,
            kapasitas: kapasitas || findDataRuangan.kapasitas,
            penanggung_jawab: penanggung_jawab || findDataRuangan.penanggung_jawab,
            gedung: gedung || findDataRuangan.gedung,
            lanatai: lantai || findDataRuangan.lantai
        }, {
            where: {
                id_ruangan: id_ruangan
            }
        })
        const findDataFasilitas = await modelFasilitas.findAll({where:{id_ruangan:id_ruangan}})
        if (findDataFasilitas.length > 0) {
            await modelFasilitas.destroy({where:{id_ruangan: id_ruangan}})
        }
        const findDataGambar = await modelGambar.findAll({where:{id_ruangan:id_ruangan}})
        if (findDataGambar.length > 0) {
            await modelGambar.destroy({where:{id_ruangan: id_ruangan}})
        }
    
        let fasilitas = {}
    
        if (!Array.isArray(nama_fasilitas)) {
            return res.status(400).json({success: false, message: 'Data fasilitas harus dalam bentuk array'})
        }
    
        for (const item of nama_fasilitas) {
            const{namaFasilitas} = item
    
            if (!fasilitas) {
                fasilitas = {
                    namaFasilitas: ''
                }
            }
            fasilitas.namaFasilitas = namaFasilitas
    
            await modelFasilitas.create({
                id_ruangan: id_ruangan,
                nama_fasilitas: fasilitas.namaFasilitas
            })
        }
    
        for (const file of file_gambar) {
            await modelGambar.create({
                id_ruangan: id_ruangan,
                file_gambar: file.originalname
            })
        }
        
        return res.status(200).json({success: true, message: 'Data ruangan berhasil diperbaharui'})        
    } catch (error) {
        console.log(error)
        return res.status(500).json({success: false, message: 'Kesalahan server'})
    }
   
}

//hapus ruangan
const hapusRuangan = async (req,res) => {
    try {
        const {id_ruangan} = req.params
        const hapus = await modelRuangan.destroy({where:{id_ruangan:id_ruangan}})
        if (!hapus) {
            return res.status(400).json({success: false, message: 'Data ruangan tidak berhasil dihapus'})
        }
        return res.status(200).json({success: true, message: 'Data ruangan berhasil dihapus'})        
    } catch (error) {
        console.log(error)
        return res.status(500).json({success: false, message: 'Kesalahan server'})
    }
    
}

//detai ruangan
const detailRuangan = async (req,res) => {
    try {
        const {id_ruangan} = req.params
        const findRuangan = await modelRuangan.findByPk(id_ruangan, {
            include: [
                {
                    model: modelFasilitas,
                    as: 'dataFasilitas',
                    attributes: ['nama_fasilitas']
                },
                {
                    model: modelGambar,
                    as: 'dataGambar',
                    attributes: ['file_gambar']
                }
            ],
            attributes: ['id_ruangan', 'nama_ruangan', 'deskripsi', 'kapasitas', 'penanggung_jawab', 'gedung', 'lantai']
        })
        if (!findRuangan) {
            return res.status(400).json({success: false, message: 'Data ruangan tidak ditemukan'})
        }
        return res.status(200).json({success: true, message: 'Data ruangan ditemukan', data: findRuangan})        
    } catch (error) {
        console.log(error)
        return res.status(500).json({success: false, message: 'Kesalahan server'})
    }   
}

module.exports = {tampilRuangan, tambahRuangan, uploadd, editRuangan, hapusRuangan, detailRuangan}
