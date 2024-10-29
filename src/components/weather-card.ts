import styles from "./weather-card.module.css";

interface WeatherCardConfig extends ComponentConfig {}

export function setupWeatherCard(config: WeatherCardConfig) {
  if (!config.selector) {
    return null;
  }
  const element = document.querySelector<HTMLDivElement>(config.selector);

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
