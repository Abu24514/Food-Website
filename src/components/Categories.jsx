import { CiBowlNoodles } from "react-icons/ci";
import { FaBowlFood } from "react-icons/fa6";
import { GiFullPizza, GiHamburger } from "react-icons/gi";
import { LuSoup } from "react-icons/lu";
import { MdFoodBank } from "react-icons/md";
import { VscCoffee } from "react-icons/vsc";

const Categories = [
  {
    id: 1,
    name :"All" ,
    icon :<FaBowlFood className="md:size-8 size-5" />
  },
    {
    id: 2,
    name :"Breakfast" ,
    icon :<VscCoffee  className="md:size-8 size-5"/>
  },
    {
    id: 3,
    name :"Soups" ,
    icon :<LuSoup className="md:size-8 size-5" />
  },
    {
    id: 4,
    name :"Pasta" ,
    icon :<CiBowlNoodles className="md:size-8 size-5" />
  },
    {
    id: 5,
    name :"Main course" ,
    icon :<MdFoodBank className="md:size-8 size-5" />
  },
    {
    id: 6,
    name :"Pizza" ,
    icon :<GiFullPizza className="md:size-8 size-5" />
  },

    {
    id: 7,
    name :"Burger" ,
    icon :<GiHamburger className="md:size-8 size-5" />
  },
]


export default Categories;