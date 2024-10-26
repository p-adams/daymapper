import styles from "./weather-card.module.css";
interface WeatherCardConfig {
  selector: Selector;
}

export function setupWeatherCard(config: WeatherCardConfig) {
  const element = document.querySelector<HTMLDivElement>(config.selector!);
  const render = () => {
    if (!element) {
      return null;
    }
    element.innerHTML = `<div class=${styles.weatherCard}>
        test
    </div>`;
  };
  render();
}
