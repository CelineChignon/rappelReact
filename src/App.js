import Header from "./Header";
import Footer from "./Footer";
import Contact from "./Contact";
import MealsList from "./MealsList";
import RandomMeal from "./RandomMeal";
import SearchMeals from "./SearchMeals";
import ListCategory from "./ListCategory";

function App() {
  return (
    <div >
      <Header />
      <SearchMeals />
      <ListCategory />
      <RandomMeal />
      <MealsList />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
