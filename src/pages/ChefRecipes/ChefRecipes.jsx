import { useState } from "react";
import { FcLike } from "react-icons/fc";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import LazyLoad from "react-lazy-load";

const ChefRecipes = () => {
  //   const [disabled, setDisabled] = useState(false);
  const chefRecipes = useLoaderData();
  //   console.log(chefRecipes);

  const recipes = chefRecipes.recipes;
  //   console.log(recipes);

  const handleFavorite = (index) => {
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "The recipe is your favorite",
      showConfirmButton: false,
      timer: 1500,
    });

    const updatedRecipes = [...recipes];
    updatedRecipes[index].disabled = true; // Set the disabled state of the specific recipe

    setRecipeList(updatedRecipes);
  };

  const [recipeList, setRecipeList] = useState(recipes);

  return (
    <div className="pt-20">
      <section className="h-[600px] bg-gradient-to-l from-zinc-400 to-cyan-300 rounded-lg  ">
        <div className="flex gap-12">
          <div className="w-1/2">
            <LazyLoad height={762} width={400} threshold={0.1}>
              <img
                className="h-[500px] w-[100%]  rounded-md pt-16 ps-16"
                src={chefRecipes.chefPicture}
                alt=""
              />
            </LazyLoad>
          </div>
          <div className="w-1/2">
            <div className="pt-16 ps-16">
              <h1 className="text-[50px] font-bold bg-gradient-to-r from-orange-500 to-blue-600 text-transparent bg-clip-text">
                {chefRecipes.chefName}
              </h1>
              <p className="text-3xl mt-3 font-bold">
                NumberOfRecipes:{" "}
                <span className="text-sky-600 text-3xl font-bold">
                  {chefRecipes?.numberOfRecipes}
                </span>
              </p>
              <p className="text-3xl mt-3 font-bold">
                YearsOfExperience:{" "}
                <span className="text-orange-400 text-3xl font-bold">
                  {chefRecipes?.yearsOfExperience}
                </span>
              </p>
              <p className="mt-16 pr-6">
                <span className="text-3xl text-white font-bold"> Bio: </span>
                <span className="text-white">{chefRecipes.description}</span>
              </p>

              <p className="mt-8 mb-4 flex items-center gap-2">
                <FcLike></FcLike>
                {chefRecipes?.likes}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-16">
        <h3 className="md:text-3xl lg:text-3xl font-bold italic text-center">
          --- This Chef Recipes ---
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
          {recipeList.map((recipe, index) => (
            <div key={index} className="card w-96 bg-base-100 shadow-xl">
              <figure>
                <img
                  className="h-[300px] w-[100%]"
                  src={recipe?.foodImage}
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  Food Name:{" "}
                  <span className="text-blue-600 font-bold">
                    {recipe.foodName}
                  </span>
                </h2>
                <p className="mt-3 font-bold">
                  Rating:{" "}
                  <span className="font-bold text-orange-500">
                    {recipe?.rating}
                  </span>
                </p>
                <p className="mb-2 ">
                  <span className="font-bold text-orange-500">
                    CookingMethod:
                  </span>{" "}
                  {recipe?.cookingMethod}
                </p>
                <div className="card-actions justify-end">
                  <p className="font-bold">Ingredients:</p>
                  {recipe?.ingredients.map((ingredient, index) => (
                    <>
                      <div key={index} className="badge badge-outline">
                        {ingredient}
                      </div>
                    </>
                  ))}
                </div>
                <button
                  onClick={() => handleFavorite(index)}
                  disabled={recipe.disabled}
                  className="btn btn-sm bg-gradient-to-r from-purple-400 to-indigo-400 text-white font-bold">
                  Favorite
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ChefRecipes;
