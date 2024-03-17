import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DisplayTable from "./DisplayTable";
import OurRecipesCard from "./OurRecipesCard";

const OurRecipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [wantClick, setWantClick] = useState([]);

  useEffect(() => {
    fetch("dummyData.json")
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  }, []);

  const handleWantToClick = (recipe) => {
    if (wantClick.includes(recipe)) {
      if (!toast.isActive("alreadySelectedToast")) {
        toast.info("You already selected this recipe", {
          toastId: "alreadySelectedToast",
        });
      }
      // toast.error("You already selected this recipe");
    } else {
      let newWantClick = [...wantClick, recipe];
      setWantClick(newWantClick);
    }
  };

  return (
    <div className="mt-12 w-full">
      <div className="w-[90%] md:w-[50%] text-center mx-auto">
        <h1>Our Recipes</h1>
        <p>
          "Our recipes are crafted with precision and passion, marrying flavors
          to create unforgettable dining experiences.
        </p>
      </div>
      <div className="flex gap-7 flex-col md:flex-row mt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 w-[97%] md:w-[65%]">
          {recipes.map((recipe) => (
            <OurRecipesCard
              key={recipe.recipe_id}
              handleWantToClick={handleWantToClick}
              recipe={recipe}
            />
          ))}
        </div>
        <div className=" w-full md:w-[45%]">
          <DisplayTable wantClick={wantClick} setWantClick={setWantClick} />
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default OurRecipes;
