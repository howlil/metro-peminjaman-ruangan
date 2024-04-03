async function getDataRuanganUser() {
  const requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  try {
    
    const apiUrl = `${import.meta.env.VITE_API_BASE_URL}/dataRuanganUser`;
    const response = await fetch(apiUrl, requestOptions);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
  
    return result;
  } catch (error) {
    console.error("Error in try-catch:", error);
    throw error;
  }
}

export default getDataRuanganUser;
