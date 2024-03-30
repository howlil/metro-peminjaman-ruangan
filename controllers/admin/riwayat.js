const modelPeminjaman = require('../../models/peminjaman')
const modelRuangan = require('../../models/ruangan')

//tampil seluruh data peminjaman yang sudah selesai
const tampilDataPinjam = async (req,res) => {
    try {
        const dataPinjam = await modelPeminjaman.findAll({
            where:{
                status: 'Selesai Digunakan'
            },
            include:[
                {
                    model: modelRuangan,
                    as: 'dataRuangan',
                    attributes: ['nama_ruangan']
                }
            ],
            attributes: ['nama_kegiatan', 'tanggal_peminjaman', 'jam_mulai_peminjaman', 'jam_selesai_peminjaman']
        })
        if (dataPinjam.length <= 0) {
            return res.status(400).json({success: false, message: 'Data peminjaman belum tersedia'})
        }
        return res.status(200).json({success: true, message: 'Data peminjaman tersedia', data: dataPinjam})        
    } catch (error) {
        console.log(error)
        return res.status(500).json({success: false, message: 'Kesalahan server'})
    }
    
}

// filter data berdasarkan ruangan
const filterData = async (req,res) => {
    try {
        const {id_ruangan} = req.params
        const dataPinjam = await modelPeminjaman.findOne({
            where:{
                id_ruangan: id_ruangan,
                status: 'Selesai Digunakan'
            },
            include:[
                {
                    model: modelRuangan,
                    as: 'dataRuangan',
                    attributes: ['nama_ruangan']
                }
            ],
            attributes: ['nama_kegiatan', 'tanggal_peminjaman', 'jam_mulai_peminjaman', 'jam_selesai_peminjaman'] 
        })
        if (!dataPinjam) {
            return res.status(400).json({success: false, message: 'Data peminjaman belum tersedia'})
        }
        return res.status(200).json({success: true, message: 'Data peminjaman tersedia', data: dataPinjam})        
    } catch (error) {
        console.log(error)
        return res.status(500).json({success: false, message: 'Kesalahan server'})
    }
    
}

module.exports = {tampilDataPinjam, filterData}