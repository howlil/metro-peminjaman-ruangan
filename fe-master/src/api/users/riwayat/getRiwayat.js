export default async function getRiwayat() {
  const requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  try {
    const apiUrl = `${import.meta.env.VITE_API_BASE_URL}/riwayatPeminjaman`;

    const res = fetch(apiUrl, requestOptions);
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    const data = await res.json();
    console.log("====================================");
    console.log(data);
    console.log("====================================");
    return data;
  } catch (error) {
    console.error("Error during fetch operation: ", error);
    throw error;
  }
}
