export default async function getDataRuanganUser() {
  const requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  try {
    const response = await fetch("https://28jqlrhg-5000.asse.devtunnels.ms/dataRuanganUser", requestOptions);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const result = await response.json();
    return result; 
  } catch (error) {
    console.error('Failed to fetch:', error);
    throw error; 
  }
}
