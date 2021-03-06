import { useState } from "react";
import {MdFreeBreakfast} from 'react-icons/md'

//protyping code therefore its dirty code

const RecipeCard = ({
  title,
  cal,
  image,
  ingredients,
  time,
  source,
  servings
}) => {
  const [showResults, setShowResults] = useState(false);
  const toggleTrueFalse = () => setShowResults(!showResults);

  return (
    <div className="text-black">
      <section className="">
        <img className="" src={image} alt={title} />
      </section>
      <div className="">
        <p className="">{title}</p>
        <div className="">
          <div className="">
            <MdFreeBreakfast />
            <p className="">{Math.round(cal)}</p>
            <p className="">kcal</p>
          </div>
          <div className="">
          <MdFreeBreakfast />
            <p className="">{servings ? servings : "4"}</p>
            <p className="">servings</p>
          </div>
          <div className="">
          <MdFreeBreakfast />
            <p className="">{time ? time : "30"}</p>
            <p className="">mins</p>
          </div>
          <div className="">
            <a href={source}>
            <MdFreeBreakfast />
              <p className="">Go</p>
              <p className="">to source</p>
            </a>
          </div>
        </div>
        <div className="">
          <div className="">
            <p className="">Ingredient</p>
            <span onClick={toggleTrueFalse}>
            <MdFreeBreakfast />
            </span>
          </div>
          {showResults ? (
            <ol className="">
              {ingredients.map((ingredient) => (
                <p>{ingredient.text}</p>
              ))}
            </ol>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
