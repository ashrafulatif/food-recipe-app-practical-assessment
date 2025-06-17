import Hero from "../components/Hero/Hero";
import RecipesList from "../components/Recipes/RecipesList";

export default function Home() {
  return (
    <div>
      <Hero />
      <RecipesList />
    </div>
  );
}
export const metadata = {
  title: "Tailus Feedus || Home",
  description: "Welcome to our recipe app, where culinary adventures begin!",
};
