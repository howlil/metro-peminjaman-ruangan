const modelAdmin = require('../../models/admin')
const bcrpyt = require('bcrypt')
const modelToken = require('../../models/token')
const jwt = require('jsonwebtoken')
require('dotenv').config()

//tambah akun admin
const tambahAdmin = async (req,res) => {
    try {
        const {email, password} = req.body
        if (!email || !password) {
            return res.status(400).json({success: false, message: 'Silahkan lengkapi data admin'})
        }
        const findEmail = await modelAdmin.findOne({where: {email: email}})
        if (!findEmail) {
            const salt = bcrpyt.genSaltSync(10)
            const hashedPass = bcrpyt.hashSync(password, salt)
            const addAdmin = await modelAdmin.create({
                email: email,
                password: hashedPass
            })
            if (!addAdmin) {
                return res.status(400).json({success: false, message:'Akun admin tidak berhasil ditambahkan'})
            }
            return res.status(200).json({success: true, message: 'Akun admin berhasil ditambahkan'})
        }
        return res.status(400).json({success: false, message: 'Email sudah pernah terdaftar'})        
    } catch (error) {
        console.log(error)
        return res.status(500).json({success: false, message: 'Kesalahan server'})
    }
    
}

//login akun admin
const loginAdmin = async (req,res) => {
    try {
        const {email, password} = req.body
        if (!email || !password) {
            return res.status(400).json({success: false, message: 'Silahkan lengkapi data akun anda'})
        }
        const findEmail = await modelAdmin.findOne({where: {email: email}})
        if (!findEmail) {
            return res.status(400).json({success: false, message: 'Akun admin tidak ditemukan'})
        }
        bcrpyt.compare(password, findEmail.password, async (err, results) => {
            if (err || !results) {
                return res.status(400).json({success: false, message: 'Password anda salah'})
            }
            const id_admin = findEmail.id_admin
            const token = jwt.sign(
                {
                    email, id_admin
                },
                process.env.ACCESS_TOKEN_SECRET, {
                    expiresIn: '1w'
                }
            )
            await modelToken.create({
                token: token,
                id_admin: id_admin
            })
            return res.status(200).json({success: true, message: 'Login berhasil', token: token})
        })        
    } catch (error) {
        console.log(error)
        return res.status(500).json({success: false, message: 'Kesalahan server'})
    }
}

//logout
const logoutAdmin = async (req,res) => {
    try {
        const authHeader = req.get('Authorization');
        
         if (!authHeader) {
             return res.status(401).json({ succes: false, message: 'Tidak ada token atau sudah logout sebelumnya' });
         }
 
         const token = authHeader.split(' ')[1];
 
         jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, async (err, user) => {
             if (err) {
               return res.status(401).json({ succes: false, message: err });
             }
 
             const adaToken = await modelToken.findOne({where: {token}})
             if (!adaToken) {
                 return res.status(401).json({ succes: false, message: "Tidak ada token atau sudah logout sebelumnya" });
             }
             
             await modelToken.destroy({ where: {token}});
         
             res.status(200).json({ success: true, message: 'Logout berhasil' });
         });
    } catch (error) {
        console.log(error)
        return res.status(500).json({success: false, message: 'Kesahalan server'})
    }
}


module.exports = {tambahAdmin, loginAdmin, logoutAdmin}
