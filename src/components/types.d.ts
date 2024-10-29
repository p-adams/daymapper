type Selector = string;

interface ComponentConfig {
  selector: Selector;
}

interface WeatherData {
  temperature: number;
  condition: string;
  location: string;
  icon: string;
}
