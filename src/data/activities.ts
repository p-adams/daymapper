interface Activity {
  title: string;
  icon: string;
  duration: string;
}
type ActivityKey = "sunny" | "cloudy" | "rainy" | "snowy" | "stormy";

type ActivityMap = {
  [key in ActivityKey]: Activity[];
};

export const mockActivities: ActivityMap = {
  sunny: [
    { title: "Go for a bike ride", icon: "🚲", duration: "1-2 hours" },
    { title: "Have a picnic", icon: "🧺", duration: "2-3 hours" },
    { title: "Visit a beach", icon: "🏖️", duration: "3-4 hours" },
  ],
  cloudy: [
    { title: "Visit a museum", icon: "🏛️", duration: "2-3 hours" },
    { title: "Go shopping", icon: "🛍️", duration: "2-4 hours" },
    { title: "Take a photography walk", icon: "📸", duration: "1-2 hours" },
  ],
  rainy: [
    { title: "Watch a movie", icon: "🎬", duration: "2 hours" },
    { title: "Visit an indoor cafe", icon: "☕", duration: "1-2 hours" },
    { title: "Go to a bookstore", icon: "📚", duration: "1-3 hours" },
  ],
  snowy: [
    { title: "Build a snowman", icon: "⛄", duration: "1 hour" },
    { title: "Go sledding", icon: "🛷", duration: "2-3 hours" },
    { title: "Make hot chocolate", icon: "🍫", duration: "30 minutes" },
  ],
  stormy: [
    { title: "Indoor board games", icon: "🎲", duration: "2-3 hours" },
    { title: "Cook a new recipe", icon: "👩‍🍳", duration: "1-2 hours" },
    { title: "Home movie marathon", icon: "🎥", duration: "3-4 hours" },
  ],
};
