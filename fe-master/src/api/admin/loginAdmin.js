const loginAdmin = async (email, password) => {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

  const urlencoded = new URLSearchParams();
  urlencoded.append("email", email);
  urlencoded.append("password", password);

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: urlencoded,
    redirect: "follow",
  };

  try {
    const response = await fetch(
      "https://6m90cgpg-5000.asse.devtunnels.ms/loginAdmin",
      requestOptions
    );

    console.log(response);

    const result = await response.json();
    const token = result.token;

    if (token) {
      localStorage.setItem("authToken", token);
    }
    return result;
  } catch (error) {
    console.log("Fetch error:", error);
    throw error;
  }
};

export default loginAdmin;
