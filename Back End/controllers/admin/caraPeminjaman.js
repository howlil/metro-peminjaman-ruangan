const modelFilePengajuan = require('../../models/file_format_pengajuan')
const multer = require('multer')
const path = require('path')

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, path.join(__dirname, '../', '../', 'public', 'doc', 'filePengajuan'))
    },
    filename: function(req,file, cb) {
        cb(null, file.originalname)
    }
})

const fileFilter = function (req,file, cb) {
    const allowedTypes = ['application/pdf']
    if (!allowedTypes.includes(file.mimetype)) {
        const error = new multer.MulterError('Jenis File tidak diizinkan, Hanya PDF yang diizinkan')
        error.message = 'Jenis File tidak diizinkan, Hanya PDF yang diizinkan'
        return cb(error, false)
    }
    cb(null, true)
}

const upload = multer({
    storage: storage,
    fileFilter: fileFilter
})
const uploadd = upload.single('file')

//tambahPeminjaman 
const tambahPeminjaman = async (req,res) => {
    try {
        const file_pengajuan = req.file
        const {link_tutorial} = req.body
        const {id_file} = req.params
        const findFile = await modelFilePengajuan.findByPk(id_file)
        if (!findFile) {
            if (!file_pengajuan || !link_tutorial) {
                return res.status(400).json({success: false, message: 'Silahkan lengkapi inputan anda'})
            }
            await modelFilePengajuan.create({
                file_pengajuan: file_pengajuan.originalname,
                link_tutorial: link_tutorial
            })
            return res.status(200).json({success: true, message: 'Data file cara peminjaman berhasil ditambahkan'})
        } else {
            await modelFilePengajuan.update({
                file_pengajuan: file_pengajuan.originalname || findFile.file_pengajuan,
                link_tutorial: link_tutorial || findFile.link_tutorial
            }, {
                where:{
                    id_file: id_file
                }
            })
            return res.status(200).json({success: true, message: 'Data file cara peminjaman berhasil diperbaharui'})
        }        
    } catch (error) {
        console.log(error)
        return res.status(500).json({success: false, message: 'Kesalahan server'})
    }   
}

//detail cara peminjaman
const detailCaraPinjam = async (req,res) => {
    try {
        const findData = await modelFilePengajuan.findAll({
            attributes: ['id_file', 'file_pengajuan', 'link_tutorial']
        })
        if (findData.length > 0) {
            return res.status(200).json({success: true, message: 'Data file cara peminjaman tersedia', data: findData})
        } else {
            return res.status(400).json({success: false, message: 'Data file cara peminjaman belum tersedia'})
        }        
    } catch (error) {
        console.log(error)
        return res.status(500).json({success: false, message: 'Kesalahan server'})
    }    
}

module.exports = {uploadd, tambahPeminjaman, detailCaraPinjam}