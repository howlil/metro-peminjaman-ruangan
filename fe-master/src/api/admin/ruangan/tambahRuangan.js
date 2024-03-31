const tambahRuangan = async (namaRuangan, deskripsi, kapasitas, penanggungJawab, gedung, lantai, namaFasilitas, fileGambar) => {
    const myHeaders = new Headers();
    const token = localStorage.getItem("authToken");
  
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
    myHeaders.append("Authorization", `Bearer ${token}`);
  
    const urlencoded = new URLSearchParams();
    urlencoded.append("nama_ruangan", namaRuangan);
    urlencoded.append("deskripsi", deskripsi);
    urlencoded.append("kapasitas", kapasitas);
    urlencoded.append("penganggung_jawab", penanggungJawab);
    urlencoded.append("gedung", gedung);
    urlencoded.append("lantai", lantai);
    urlencoded.append("namaFasilitas", namaFasilitas);
    urlencoded.append("file_gambar", fileGambar);
  
    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: urlencoded,
      redirect: "follow",
    };
  
    let request;
    try {
      const response = await fetch(
        "https://6m90cgpg-5000.asse.devtunnels.ms/tambahRuangan",
        requestOptions
      )
        request = await response.json()
    } catch (error) {
      console.log(error);
    }
    return request
     
  };
  
  export default tambahRuangan;
  