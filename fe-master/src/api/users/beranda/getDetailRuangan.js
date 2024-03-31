export default async function getDetailRuangan(id_ruangan) {

    const requestOptions = {
        method: "GET",
        redirect: "follow"
      };
      
      fetch(`http://localhost:5000/detailRuanganUser/${id_ruangan}`, requestOptions)
        .then((response) => response.text())
        .then((result) => console.log(result))
        .catch((error) => console.error(error));

}
