async function cekJadwal(tanggal, waktu, selectedRuang) {
  // Construct the query parameters
  const queryParams = new URLSearchParams({
    tanggal_peminjaman: tanggal,
    jam_mulai_peminjaman: waktu,
    id_ruangan: selectedRuang,
  }).toString();

  // Append the query parameters to the URL
  const apiUrl = `${import.meta.env.VITE_API_BASE_URL}/cekJadwal?${queryParams}`;

  const requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  try {
    const response = await fetch(apiUrl, requestOptions);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error in cekJadwal:", error);
    throw error;
  }
}

export default cekJadwal;
