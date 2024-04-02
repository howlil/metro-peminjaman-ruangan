export default async function getDetailRuangan(id_ruangan) {
  const requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  try {
    const data = await fetch(
      `http://localhost:5000/detailRuanganUser/${id_ruangan}`,
      requestOptions
    );

    const response = await data.json();
    console.log("================asa====================");
    console.log(response);
    console.log("====================================");
    return response;
  } catch (error) {
    console.log("====================================");
    console.log(error);
    console.log("====================================");
  }
}
