const modelPeminjaman = require('../../models/peminjaman')
const modelRuangan = require('../../models/ruangan')

//seluruh data peminjaman
const allDataPeminjaman = async (req,res) => {
    try {
        const findData = await modelPeminjaman.findAll({
            attributes: ['id_peminjaman','nama_peminjam', 'jabatan', 'nama_kegiatan', 'kontak', 'tanggal_peminjaman', 'jam_mulai_peminjaman', 'jam_selesai_peminjaman', 'file_peminjaman', 'updated_at'],
            include: [
                {
                    model: modelRuangan,
                    as: 'dataRuangan',
                    attributes: ['nama_ruangan']
                }
            ],
            where: {
                status: 'Diproses' || 'diproses'
            }
        })
        if (findData.length <= 0) {
            return res.status(400).json({success: false, message:'Data peminjaman belum tersedia'})
        }
        return res.status(200).json({success: true, message: 'Data peminjaman tersedia', data: findData})
    } catch (error) {
        console.log(error)
        return res.status(500).json({success: false, message: 'Kesalahan server'})
    }
    
}

//setuju
const setujuPinjam = async (req,res) => {
    try {
        const {id_peminjaman} = req.params
        const findPeminjaman = await modelPeminjaman.findByPk(id_peminjaman)
        if (!findPeminjaman) {
            return res.status(400).json({success: false, message: 'Data peminjaman tidak ditemukan'})
        }
        const setuju = await modelPeminjaman.update({
            status: 'Menunggu Dikonfirmasi'
        }, {
            where:{
                id_peminjaman: id_peminjaman
            }
        })
        if (!setuju) {
            return res.status(400).json({success: false, message: 'Peminjaman tidak berhasil disetujui'})
        }
        return res.status(200).json({success: true, message: 'Peminjaman berhasil disetujui'})        
    } catch (error) {
        console.log(error)
        return res.status(500).json({success: false, message: 'Kesalahan server'})
    }
    
}

//menolak
const tolakPinjam = async (req,res) => {
    const {id_peminjaman} = req.params
    const findPinjam = await modelPeminjaman.findByPk(id_peminjaman)
    if (!findPinjam) {
        return res.status(400).json({success: false, message: 'Data peminjaman tidak ditemukan'})
    }
    const tolak = await modelPeminjaman.update({
        status: 'Ditolak'
    }, {
        where: {
            id_peminjaman: id_peminjaman
        }
    })
    if (!tolak) {
        return res.status(400).json({success: false, message: 'Peminjaman tidak berhasil ditolak'})
    }
    return res.status(200).json({success: true, message: 'Peminjaman berhasil ditolak'})
}


//filter peminjaman
const filterPeminjaman = async (req,res) => {
    try {
        const {id_ruangan} = req.params
        const findRuangan = await modelRuangan.findByPk(id_ruangan)
        if (!findRuangan) {
            return res.status(400).json({success: false, message: 'Data ruangan tidak ditemukan'})
        }
        const findPeminjaman = await modelPeminjaman.findAll({
            include: [
                {
                    model: modelRuangan,
                    as: 'dataRuangan',
                    where: {
                        id_ruangan: id_ruangan
                    },
                    attributes: ['nama_ruangan']
                }
            ],
            attributes: ['id_peminjaman','nama_peminjam', 'jabatan', 'nama_kegiatan', 'kontak', 'tanggal_peminjaman', 'jam_mulai_peminjaman', 'jam_selesai_peminjaman', 'file_peminjaman'],
            where: {
                status: 'Diproses' || 'diproses'
            }
        })
        if (findPeminjaman.length <= 0) {
            return res.status(400).json({success: false, message: 'Data peminjaman belum tersedia'})
        } 
        return res.status(200).json({success: true, message: 'Data peminjaman tersedia', data: findPeminjaman})        
    } catch (error) {
        console.log(error)
        return res.status(500).json({success: false, message: 'Kesalahan server'})
    }
    
}

module.exports = {allDataPeminjaman, setujuPinjam, tolakPinjam, filterPeminjaman}