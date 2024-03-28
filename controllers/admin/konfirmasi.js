const modelPeminjaman = require('../../models/peminjaman')
const modelRuangan = require('../../models/ruangan')

//semua data yg akan dikonfirmasi
const allDataKonfir = async (req,res) => {
    try {
        const findData = await modelPeminjaman.findAll({
            where: {
                status: 'Disetujui'
            },
            include: [
                {
                    model: modelRuangan,
                    as: 'dataRuangan',
                    attributes: ['nama_ruangan']
                }
            ],
            attributes: ['id_peminjaman', 'nama_kegiatan', 'tanggal_peminjaman', 'jam_mulai_peminjaman', 'jam_selesai_peminjaman', 'status']
        })  
        if (findData.length <= 0) {
            return res.status(400).json({success: false, message: 'Data peminjaman belum tersedia'})
        }   
        return res.status(200).json({success: true, message: 'Data peminjaman tersedia', data: findData})
    } catch (error) {
        console.log(error)
        return res.status(500).json({success: false, message: 'Kesalahan server'})
    }
}

//mengkonfirmasi
const konfirmasiPinjam = async (req,res) => {
    try {
        const {id_peminjaman} = req.params
        const findPeminjaman = await modelPeminjaman.findByPk(id_peminjaman)
        if (!findPeminjaman) {
            return res.status(400).json({success: false, message: 'Data peminjaman tidak ditemukan'})
        }
        const konfirmasi = await modelPeminjaman.update({
            status: 'Selesai Digunakan'
        }, {
            where: {
                id_peminjaman: id_peminjaman
            }
        })
        if (!konfirmasi) {
            return res.status(400).json({success: false, message: 'Data peminjaman tidak berhasil di konfirmasi'})
        }
        return res.status(200).json({success: true, message: 'Data peminjaman berhasil di konfirmasi'})
    } catch (error) {
        console.log(error)
        return res.status(500).json({success: false, message: 'Kesalahan server'})
    }
}

//filter data yang akan dikonfirmasi
const filterKonfirmasi = async (req, res) => {
    try {
        const {id_ruangan} = req.params
        const findData = await modelPeminjaman.findAll({
            where: {
                status: 'Disetujui',
                id_ruangan: id_ruangan
            },
            include: [
                {
                    model: modelRuangan,
                    as: 'dataRuangan',
                    attributes: ['nama_ruangan']
                }
            ],
            attributes: ['id_peminjaman', 'nama_kegiatan', 'tanggal_peminjaman', 'jam_mulai_peminjaman', 'jam_selesai_peminjaman', 'status']
        })  
        if (findData.length <= 0) {
            return res.status(400).json({success: false, message: 'Data peminjaman belum tersedia'})
        }   
        return res.status(200).json({success: true, message: 'Data peminjaman tersedia', data: findData})
    } catch (error) {
        console.log(error)
        return res.status(500).json({success: false, message: 'Kesalahan server'})
    }
}

module.exports = {allDataKonfir, konfirmasiPinjam, filterKonfirmasi}
