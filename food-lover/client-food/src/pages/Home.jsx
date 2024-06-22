import { useEffect, useState } from "react";
import FoodCard from "../components/FoodCard";

const Home = () => {
  const [foods, setFoods] = useState([]);
  useEffect(() => {
    fetch("http://localhost:6002/foods")
      .then((res) => res.json())
      .then((data) => setFoods(data));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-6">
      <h1 className="text-4xl font-bold text-center text-gray-900 dark:text-gray-100 mb-8">
        Food Items: {foods.length}
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {
            foods.map(food => <FoodCard key={food._id} foodItem={food}></FoodCard>)
        }
      </div>
    </div>
  );
};

export default Home;
