export default async function cekJawdwal(tanggal_peminjaman,jam_mulai_peminjaman,id_ruangan){
    
    const myHeaders = new Headers({});
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    const urlencoded = new URLSearchParams();
    urlencoded.append("tanggal_peminjaman", tanggal_peminjaman);
    urlencoded.append("jam_mulai_peminjaman", jam_mulai_peminjaman);
    urlencoded.append("id_ruangan", id_ruangan);

    const requestOptions = {
    method: "GET",
    headers: myHeaders,
    body: urlencoded,
    redirect: "follow"
    };

fetch("https://28jqlrhg-5000.asse.devtunnels.ms//cekJadwal", requestOptions)
  .then((response) => response.json())
  .then((result) =>{ return result})
  .catch((error) => console.error(error));
}