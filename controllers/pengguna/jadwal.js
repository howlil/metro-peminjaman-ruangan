const modelPeminjaman = require('../../models/peminjaman')
const modelRuangan = require('../../models/ruangan')

//tampil data jadwal
const tampilJadwal = async (req,res) => {
    try {
        const allData = await modelPeminjaman.findAll({
            include: [
                {
                    model: modelRuangan,
                    as: 'dataRuangan',
                    attributes: ['nama_ruangan']
                }
            ],
            attributes: ['id_peminjaman','tanggal_peminjaman', 'jam_mulai_peminjaman', 'jam_selesai_peminjaman']
        })
        if (allData.length <= 0) {
            return res.status(400).json({success: false, message: 'Data peminjaman belum tersedia'})
        }
        return res.status(200).json({success: true, message: 'Data peminjaman tersedia', data: allData})        
    } catch (error) {
        console.log(error)
        return res.status(500).json({success: false, message: 'Kesalahan server'})
    }
}

//detail jadwal
const detailJadwal = async (req,res) => {
    try {
        const {id_peminjaman} = req.params        
        const findData = await modelPeminjaman.findByPk(id_peminjaman, {
            include: [
                {
                    model: modelRuangan,
                    as: 'dataRuangan',
                    attributes: ['nama_ruangan']
                }
            ],
            attributes: ['nama_peminjam', 'tanggal_peminjaman', 'jam_mulai_peminjaman', 'jam_selesai_peminjaman', 'nama_kegiatan', 'status']
        })
        if (!findData) {
            return res.status(400).json({success: false, message: 'Data peminjaman tidak ditemukan'})
        }
        return res.status(200).json({success:true, message: 'Data peminjaman ditemukan', data: findData})
    } catch (error) {
        console.log(error)
        return res.status(500).json({success: false, message: 'Kesalahan server'})
    }
}

module.exports = {tampilJadwal, detailJadwal}