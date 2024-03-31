const editCara = async (id_file, formData) => {
    const myHeaders = new Headers();
    const token = localStorage.getItem("authToken");
    myHeaders.append("Authorization", `Bearer ${token}`);

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: formData,
      redirect: "follow",
    };

    try {
      const response = await fetch(
        `https://6m90cgpg-5000.asse.devtunnels.ms/tambahCaraPinjam/${id_file}`,
        requestOptions
      );
      const result = await response.json();
      console.log(result);
      return result;
    } catch (error) {
      console.error("Error:", error);
      return null;
    }
};
export default editCara;
