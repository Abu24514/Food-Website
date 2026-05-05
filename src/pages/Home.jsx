import { useContext, useState } from "react";
import Card from "../components/Card";
import Categories from "../components/Categories";
import Navbar from "../components/Navbar";
import food_items from "../food";
import { dataContext } from "../context/UserContext";

const Home = () => {
  const { cate, setCate, input } = useContext(dataContext);

  const filterFood = (category) => {
    if (category === "All") {
      setCate(food_items);
    }
    else {
      const newList = food_items.filter((f) => f.food_category === category.toLowerCase());
      setCate(newList);
    }
  }


  return (
    <div className="bg-amber-100 min-h-screen">
      <Navbar />

      {!input ? <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4 mt-20 px-3">
        {Categories.map((item) => {
          return (
            <div
              key={item.id}
              className="border rounded-full p-1 sm:p-2 text-black/40 hover:text-[#e1652b]"
            >
              <div
                onClick={() => filterFood(item.name)}
                className="bg-transparent rounded-full flex flex-col justify-center items-center 
              w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 
              text-orange-500 cursor-pointer 
              hover:bg-[#e1652b] hover:text-white 
              transition-all duration-300"
              >
                <span className="text-lg sm:text-xl">{item.icon}</span>
                <span className="text-xs sm:text-sm">{item.name}</span>
              </div>
            </div>
          );
        })}
      </div> : null}

      {/* Food Cards */}
      <div className="mt-8 px-3 sm:px-6 md:px-10 lg:px-16  pb-6 ">
        <div
          className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3  lg:grid-cols-4  xl:grid-cols-5 gap-6" >
          {cate.map((item) => {
            return (
              <Card
                key={item.id}
                name={item.food_name}
                image={item.food_image}
                id={item.id}
                price={item.price}
                type={item.food_type}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
