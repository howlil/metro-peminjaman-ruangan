const modelPeminjaman = require('../../models/peminjaman')
const modelRuangan = require('../../models/ruangan')

//tampil seluruh peminjaman
const tampilPeminjaman = async (req,res) => {
    try {
        const findData = await modelPeminjaman.findAll({
            include: [
                {
                    model: modelRuangan,
                    as: 'dataRuangan',
                    attributes: ['nama_ruangan']
    
                }
            ],
            attributes: ['nama_peminjam', 'nama_kegiatan', 'tanggal_peminjaman', 'jam_mulai_peminjaman', 'jam_selesai_peminjaman', 'status']
        })
        if (!findData) {
            return res.status(400).json({success: false, message: 'Data peminjaman belum tersedia'})
        }
        return res.status(200).json({success: true, message: 'Data peminjaman tersedia', data: findData})       
    } catch (error) {
        console.log(error)
        return res.status(500).json({success: false, message: 'Kesalahan server'})
    }
}

module.exports = {tampilPeminjaman}