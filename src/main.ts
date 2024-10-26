import { setupWeatherCard } from "./components/weather-card";
import "./style.css";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <h1>DayMapper</h1>
    <div id="weather-card"/>
  </div>
`;

const weatherCard = setupWeatherCard({ selector: "#weather-card" });
