import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { registerLicense } from "@syncfusion/ej2-base";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

registerLicense(
  "Ngo9BigBOggjHTQxAR8/V1NBaF5cXmZCekx0Qnxbf1x0ZFZMYlpbR35PMyBoS35RckVgW3dec3ZTRWlbUkR/"
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
