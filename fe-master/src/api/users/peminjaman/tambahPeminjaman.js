export default async function tambahPeminjaman(
  nama_peminjam,
  jabatan,
  nama_kegiatan,
  kontak,
  tgl_peminjaman,
  jam_mulai_peminjaman,
  jam_selesai_peminjaman,
  file,
  id_ruangan,
) {
  const formdata = new FormData();
  formdata.append("nama_peminjam", nama_peminjam);
  formdata.append("jabatan", jabatan);
  formdata.append("nama_kegiatan", nama_kegiatan);
  formdata.append("kontak", kontak);
  formdata.append("tanggal_peminjaman", tgl_peminjaman);
  formdata.append("jam_mulai_peminjaman", jam_mulai_peminjaman);
  formdata.append("jam_selesai_peminjaman", jam_selesai_peminjaman);
  formdata.append("file", file);

  const requestOptions = {
    method: "POST",
    body: formdata,
    redirect: "follow",
  };

  try {
    const apiUrl = `${
      import.meta.env.VITE_API_BASE_URL
    }/tambahPeminjaman/${id_ruangan}`;

    const response = await fetch(apiUrl, requestOptions);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const res = await response.json();
    return res;
  } catch (error) {
    console.error("Error during fetch operation: ", error);
    throw error;
  }
}
