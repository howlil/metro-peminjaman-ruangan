const modelRuangan = require('../../models/ruangan')
const modelPeminjaman = require('../../models/peminjaman')

//data ruangan
const dataRuangan = async (req,res) => {
    try {
        const findData = await modelRuangan.findAll({attributes:['id_ruangan', 'nama_ruangan']})
        if (findData.length <= 0) {
            return res.status(400).json({success: false, message: 'Data ruangan belum tersedia'})
        }
        return res.status(200).json({success:true, message: 'Data ruangan tersedia', daata: findData})        
    } catch (error) {
        console.log(error)
        return res.status(500).json({success: false, message: 'Kesalahan server'})
    }

}

//data jadwal per ruangan
const jadwalRuangan = async (req,res) => {
    try {
        const {id_ruangan} = req.params
        const date = new Date()
        const tahun = date.getFullYear()
        const bulan = date.getMonth() + 1
        const hari = date.getDate()
        const tanggal = `${tahun}-${bulan}-${hari}`
        console.log(tanggal)
        const findJadwal = await modelRuangan.findAll({
            include: [
                {
                    model: modelPeminjaman,
                    as: 'dataPeminjaman',
                    where: {
                        tanggal_peminjaman: tanggal,
                        id_ruangan: id_ruangan
                    },
                    attributes: ['nama_kegiatan', 'jam_mulai_peminjaman', 'jam_selesai_peminjaman']
                }
            ],
            attributes: ['nama_ruangan']
        })
        if (findJadwal.length <= 0) {
            return res.status(400).json({success: false, message: 'Data jadwal belum tersedia'})
        }
        return res.status(200).json({success: true, message: 'Data jadwal tersedia', data: findJadwal})
    } catch (error) {
        console.log(error)
        return res.status(500).json({success: false, message: 'Kesalahan server'})
    }
}

module.exports = {dataRuangan, jadwalRuangan}