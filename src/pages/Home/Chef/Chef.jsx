import { useEffect, useState } from "react";
import { FcLike } from "react-icons/fc";
import { Link } from "react-router-dom";

const Chef = () => {
  const [chefs, setChefs] = useState([]);
  console.log(chefs);

  useEffect(() => {
    fetch("http://localhost:5000/chefs")
      .then((res) => res.json())
      .then((data) => {
        setChefs(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="md:mt-12 lg:mt-16">
      <h3 className="md:text-3xl lg:text-3xl font-bold italic text-center">
        --- Our Chefs ---
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
        {chefs.map((chef) => (
          <div key={chef._id} className="card w-[100%] bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <img
                src={chef?.chefPicture}
                alt="Shoes"
                className="rounded-xl h-[350px] w-[300px]"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">
                Name: <span className="text-blue-600">{chef?.chefName}</span>
              </h2>
              <div className="flex gap-12">
                <p className="font-semibold">
                  Recipes:{" "}
                  <span className="text-orange-400">
                    {chef?.numberOfRecipes}
                  </span>
                </p>
                <p className="font-semibold">
                  Experience:{" "}
                  <span className="text-orange-400">
                    {chef?.yearsOfExperience}
                  </span>
                </p>
              </div>
              <p className="mt-4 mb-4 flex items-center gap-2">
                <FcLike></FcLike>
                {chef?.likes}
              </p>
              <div className="card-actions">
                <Link to="/chefRecipes">
                  <button className="btn bg-gradient-to-r from-purple-400 to-indigo-400 text-white font-bold">
                    View Recipes
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Chef;
