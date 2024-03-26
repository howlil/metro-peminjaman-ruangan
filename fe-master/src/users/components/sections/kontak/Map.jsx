import { GoogleMap, LoadScript } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "600px",
};

const center = {
  lat: -0.9542476,
  lng: 100.3702452,
};

const apiKey = "AIzaSyBxCIsnYEehctxqLqPxVQmQfucFc_yn_Ok";

function Map() {
  return (
    <div className=" p-4 shadow-lg rounded-md hover:shadow-2xl transition-all ease-linear duration-300">
      <LoadScript googleMapsApiKey={apiKey}>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={15}
        ></GoogleMap>
      </LoadScript>
    </div>
  );
}

export default Map;
