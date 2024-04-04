export const dataRuang =[
    {
      ruang : 1,
      nama : "Ruangan Alpha"
     },
    {
      ruang : 1,
      nama : "Ruangan Beta"
     },
    {
      ruang : 1,
      nama : "Ruangan Delta"
     },
    {
      ruang : 1,
      nama : "Ruangan Omega"
     },
]

export const dataRuangDetail =[
  {
    ruang : 1,
    nama : "Ruangan Alpha",
    jadwal : {
      mulai : "10",
      selesai : "13",
      kegiatan : "Meeting Bisnis"
    }
   },
  {
    ruang : 1,
    nama : "Ruangan Beta",
    jadwal : [{
      mulai : "8",
      selesai : "9",
      kegiatan : "Rapat Bulanan"
    },
    {
      mulai : "14",
      selesai : "16",
      kegiatan : "Birthday Party"
    }
  ]
   },
  {
    ruang : 1,
    nama : "Ruangan Delta",
    jadwal : [{
      mulai : "8",
      selesai : "10",
      kegiatan : "Rapat"
    },
    {
      mulai : "12",
      selesai : "13",
      kegiatan : "Rapat"
    },
    {
      mulai : "13",
      selesai : "15",
      kegiatan : "Rapat"
    }
  ]
   },
  {
    ruang : 1,
    nama : "Ruangan Omega",
    jadwal : {
      mulai : "10",
      selesai : "13",
      kegiatan : "Meeting"
    }
   },
]

export const dataPeminjaman =[
  {
    ruang : "Ruangan Alpha",
    nama : "Syakin",
    jabatan : "Mahasiswa",
    kegiatan : "Rapat",
    kontak : "088",
    tanggal : "12",
    mulai : "12",
    selesai : "13",
    form : "aa",
    status: "Selesai Digunakan",
    waktu : "5 menit yang lalu"
  },
  {
    ruang : "Ruangan Beta",
    nama : "Syhan",
    jabatan : "Mahasiswa",
    kegiatan : "Talkshow",
    kontak : "088",
    tanggal : "3",
    mulai : "8",
    selesai : "10",
    form : "ee",
    status : "Selesai Digunakan"
  }
]

export const pilihanGedung = ['Gedung 1', 'Gedung 2', 'Gedung 3', 'Gedung 4', 'Gedung 5']; 

export const pilihanLantai = ['Lantai 1', 'Lantai 2', 'Lantai 3']; 

export const pilihanFasilitas = [
  {
    id : 1,
    label : "AC"
  },
  {
    id : 2,
    label : "WIFI"
  },
  {
    id : 3,
    label : "Projector"
  },
  {
    id : 4,
    label : "Snack"
  },
  {
    id : 5,
    label : "Meja"
  },
  {
    id : 6,
    label : "Kursi"
  },
  {
    id : 7,
    label : "Dispenser"
  },
  {
    id : 8,
    label : "Kipas"
  },
]; 