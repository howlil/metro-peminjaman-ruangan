const modelPeminjaman = require('../../models/peminjaman')
const modelRuangan = require('../../models/ruangan')
const {Op} = require('sequelize')
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
        const {id_peminjaman} = req.params       
    } catch (error) {
        console.log(error)
        return res.status(500).json({success: false, message:'Kesalahan server'})
    }
}
//tambah peminjaman
module.exports = {tampilDataJadwal, tampilDetailJadwal}