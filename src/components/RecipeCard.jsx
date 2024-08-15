import Badge from "./Badge";
import Rating from "./Rating";
import { LuTimer } from "react-icons/lu";

function RecipeCard({ recipe }) {
  const badgeBackgroundColor = {
    Easy: "#15ad33",
    Medium: "#f28416",
    Hard: "#d12017",
  };

  return (
    <div className="bg-primary-bg dark:bg-primary-dark-bg text-primary-text dark:text-primary-dark-text rounded p-4 shadow-md flex flex-col gap-4">
      <div className="relative">
        <div className="absolute top-3 right-3">
          <Badge
            badgeText={recipe.difficulty}
            backgroundColor={badgeBackgroundColor[recipe.difficulty]}
          />
        </div>
        <img
          src={recipe.image}
          alt={recipe.name}
          className="border border-primary-border dark:border-primary-dark-border h-60 w-full rounded"
        />
        <div className="absolute bottom-3 left-3 bg-slate-200 dark:bg-gray-700 shadow bg-opacity-50 backdrop-blur-sm p-1 rounded text-sm font-bold">
          <Rating rating={recipe.rating} />
        </div>
      </div>
      <div className="p-2 flex flex-col gap-2">
        <h2 className="truncate font-bold" title={recipe.name}>
          {recipe.name}
        </h2>
        <div className="flex gap-2 items-center">
          <LuTimer size="1.2rem"/>
          <span>{recipe.cookTimeMinutes + recipe.prepTimeMinutes} minutes</span>
        </div>
      </div>
    </div>
  );
}

export default RecipeCard;
