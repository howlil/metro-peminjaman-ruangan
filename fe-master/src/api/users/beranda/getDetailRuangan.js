export default async function getDetailRuangan(id_ruangan) {
  const requestOptions = {
    method: "GET",
    redirect: "follow",
  };
  const apiUrl = `${import.meta.env.VITE_API_BASE_URL}/detailRuanganUser/${id_ruangan}`;

  try {
    const data = await fetch(apiUrl,  requestOptions);

    const response = await data.json();
    return response;
  } catch (error) {
    console.log(error);
  }
}
