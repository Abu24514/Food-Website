import { useContext, useState } from "react";
import Card from "../components/Card";
import Categories from "../components/Categories";
import Navbar from "../components/Navbar";
import food_items from "../food";
import { dataContext } from "../context/UserContext";
import { IoMdClose } from "react-icons/io";
import CardSec from "../components/CardSec";
import { useSelector } from "react-redux";

const Home = () => {
  const { cate, setCate, input, showCart, setShowCart } =
    useContext(dataContext);

  const filterFood = (category) => {
    if (category === "All") {
      setCate(food_items);
    } else {
      const newList = food_items.filter(
        (f) => f.food_category === category.toLowerCase(),
      );
      setCate(newList);
    }
  };
  const items = useSelector((state) => state.cart);
  const subTotal = items.reduce((total, item) => total + item.price, 0);
  let deliveryFee = 20;
  let taxes = (subTotal * 0.5) / 100;
  let total = Math.floor(subTotal + deliveryFee + taxes);

  return (
    <div className="bg-amber-100 min-h-screen">
      <Navbar />

      {!input ? (
        <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4 mt-20 px-3">
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
        </div>
      ) : null}

      {/* Food Cards */}
      <div className="mt-8 px-3 sm:px-6 md:px-10 lg:px-16  pb-6 ">
        <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3  lg:grid-cols-4  xl:grid-cols-5 gap-6">
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

      <div
        className={`md:w-[45vw] w-full h-full fixed top-0 right-0 bg-amber-100 shadow-xl sm:px-8 px-4 py-5 transition-all flex flex-col items-center overflow-auto   ${showCart ? "translate-x-0" : "translate-x-full duration-300"}`}
      >
        <header className="flex w-full justify-between items-center">
          <span className="text-orange-500 sm:text-lg font-semibold text-sm">
            Order items
          </span>
          <span className="bg-black/20 rounded-full flex justify-center items-center p-1 ">
            <IoMdClose
              onClick={() => setShowCart(false)}
              className="hover:text-orange-500 text-lg font-semibold cursor-pointer sm:size-7 size-5 "
            />
          </span>
        </header>
        {/* CardSec */}
        <div className="mt-12 flex w-full flex-col gap-4">
          {items.map((tm) => {
            return (
              <CardSec
                name={tm.name}
                price={tm.price}
                image={tm.image}
                id={tm.id}
                key={tm.id}
                qty={tm.qty}
              />
            );
          })}
        </div>

        <div className="w-full border-t-2 border-b-2 border-gray-700 mt-7 flex flex-col gap-3 p-8">
          <div className="w-full flex justify-between items-center">
            <span className="text-lg text-gray-600 font-semibold ">
              SubTotal
            </span>
            <span className="text-lg text-orange-600 font-semibold ">
              Rs {subTotal}/-
            </span>
          </div>
          <div className="w-full flex justify-between items-center">
            <span className="text-lg text-gray-600 font-semibold ">
              Delivery Fee
            </span>
            <span className="text-lg text-orange-600 font-semibold ">
              Rs {deliveryFee}/-
            </span>
          </div>
          <div className="w-full flex justify-between items-center">
            <span className="text-lg text-gray-600 font-semibold ">Taxes</span>
            <span className="text-lg text-orange-600 font-semibold ">
              Rs {taxes}/-
            </span>
          </div>
        </div>
        <div className="w-full flex justify-between items-center py-2 px-8">
          <span className="text-lg text-gray-600 font-semibold ">
            Total Price
          </span>
          <span className="text-lg text-orange-600 font-semibold ">
            Rs {total}/-
          </span>
        </div>
        <button
          className=" w-[80%] bg-amber-600 mt-2 rounded-xl p-2 text-white capitalize 
      hover:bg-amber-500 hover:scale-95 transition-all cursor-pointer"
        >
          Place Order
        </button>
      </div>
    </div>
  );
};

export default Home;
