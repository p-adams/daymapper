import styles from "./weather-card.module.css";

interface WeatherCardConfig extends ComponentConfig {}

export function setupWeatherCard(config: WeatherCardConfig) {
  const element = document.querySelector<HTMLDivElement>(config.selector)!;
  const weatherData: WeatherData | null = null;

  const attachEventListeners = () => {
    const searchBtn = element.querySelector<HTMLButtonElement>("#searchBtn");
    searchBtn?.addEventListener("click", () => {
      console.log("search");
    });
  };

  const render = () => {
    element.innerHTML = `<div class=${styles.weatherCard}>
      <div class=${styles.searchBar}>
        <input placeholder="enter city name"/>    
        <button id="searchBtn">search</button>
      </div>
    </div>`;
    attachEventListeners();
  };

  render();
}
