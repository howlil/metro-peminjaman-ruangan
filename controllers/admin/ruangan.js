const modelRuangan = require('../../models/ruangan')

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
//tambah ruangan
//edit ruangan
//hapus ruangan

module.exports = {tampilRuangan}
