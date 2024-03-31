export default async function getDataRuanganUser (){
    const requestOptions = {
        method: "GET",
        redirect: "follow"
      };
      
      fetch("http://localhost:5000/dataRuanganUser", requestOptions)
        .then((response) => response.text())
        .then((result) => console.log(result))
        .catch((error) => console.error(error));
} 