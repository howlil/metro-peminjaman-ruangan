import { GoogleMap, LoadScript } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: -0.9205468,
  lng: 100.4530141,
};

const apiKey = "AIzaSyBxCIsnYEehctxqLqPxVQmQfucFc_yn_Ok";

function Map() {
  return (
    <LoadScript googleMapsApiKey={apiKey}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
      ></GoogleMap>
    </LoadScript>
  );
}

export default Map;
