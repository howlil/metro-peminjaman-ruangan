async function cekJadwal(tanggal, waktu, selectedRuang) {
  // Initialize URLSearchParams to handle query parameters
  const params = new URLSearchParams({
    tanggal_peminjaman: tanggal,
    jam_mulai_peminjaman: waktu,
    id_ruangan: selectedRuang,
  });

  // Construct the API URL with query parameters
  const apiUrl = `${import.meta.env.VITE_API_BASE_URL}/cekJadwal?${params}`;

  try {
    // Note: Removed the 'body' field from requestOptions as it's a GET request
    const requestOptions = {
      method: "GET",
      headers: new Headers({
        // Content-Type header is not needed for GET requests,
        // but if your server requires it for some reason, keep it.
        "Content-Type": "application/x-www-form-urlencoded",
      }),
      redirect: "follow",
    };

    const response = await fetch(apiUrl, requestOptions);

    if (!response.ok) {
      // It's a good practice to return or throw a more informative error from the server if possible
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error in cekJadwal:", error);
    // Correctly re-throw the error to let the caller handle it
    throw error;
  }
}

export default cekJadwal;
