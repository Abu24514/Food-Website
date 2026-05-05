import { GiChickenLeg } from "react-icons/gi";
import { LuLeafyGreen } from "react-icons/lu";

const Card = ({ name, image, id, price, type }) => {
  return (
    <div className="w-full bg-white p-4 flex flex-col gap-4 rounded-xl shadow-md 
    hover:shadow-lg hover:-translate-y-1 transition-all duration-300">

      {/* Image */}
      <div className="w-full h-45 rounded-xl overflow-hidden">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>

      {/* Title */}
      <h2 className="text-center font-semibold text-lg">{name}</h2>

      {/* Price + Type */}
      <div className="flex justify-between px-2 items-center">
        <span className="text-orange-500 font-medium">Rs {price}/-</span>

        <div className="flex items-center gap-2">
          {type === "veg" ? (
            <>
              <LuLeafyGreen className="text-green-500" />
              <p className="text-green-500 text-sm">Veg</p>
            </>
          ) : (
            <>
              <GiChickenLeg className="text-orange-500" />
              <p className="text-orange-500 text-sm">Non-Veg</p>
            </>
          )}
        </div>
      </div>

      {/* Button */}
      <button className="mt-auto bg-amber-600 rounded-xl p-2 text-white capitalize 
      hover:bg-amber-500 hover:scale-95 transition-all">
        Add to dish
      </button>

    </div>
  );
};

export default Card;