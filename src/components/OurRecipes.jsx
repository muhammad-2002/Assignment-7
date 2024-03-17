import { useEffect, useState } from "react";
import DisplayTable from "./DisplayTable";
import OurRecipesCard from "./OurRecipesCard";

const OurRecipes = () => {
  const [Recipes, setRecipes] = useState([]);
  const [wantClick, setWantClick] = useState([]);
  useEffect(() => {
    fetch("dummyData.json")
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  }, []);

  const handleWantToClick = (recipe) => {
    if (wantClick.includes(recipe)) {
      <div className="toast toast-top toast-start">
        <div className="alert alert-info">
          <span>New mail arrived.</span>
        </div>
        <div className="alert alert-success">
          <span>Message sent successfully.</span>
        </div>
      </div>;
    } else {
      let newWantClick = [...wantClick, recipe];
      setWantClick(newWantClick);
    }
  };
  return (
    <div className="mt-12">
      <div className="w-[50%] text-center mx-auto">
        <h1>Our Recipes</h1>
        <p>
          "Our recipes are crafted with precision and passion, marrying flavors
          to create unforgettable dining experiences.
        </p>
      </div>
      <div className="flex gap-7 mt-20">
        <div className="grid grid-cols-2 gap-3 w-[65%]">
          {Recipes.map((recipe) => (
            <OurRecipesCard
              key={Math.random()}
              handleWantToClick={handleWantToClick}
              recipe={recipe}
            ></OurRecipesCard>
          ))}
        </div>
        <div className="w-[45%]">
          {
            <DisplayTable
              wantClick={wantClick}
              setWantClick={setWantClick}
            ></DisplayTable>
          }
        </div>
      </div>
    </div>
  );
};

export default OurRecipes;
