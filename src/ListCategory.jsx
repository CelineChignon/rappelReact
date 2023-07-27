import { useState, useEffect } from "react"

const ListCategory = () => {

    const [categories, setcategories] = useState([]);
    const [mealsCategory, setMealsCategory] = useState([]);

    const appelApi = async () => {
        const reponseApi = await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`)
        const reponseApiEnJson = await reponseApi.json();

        //categories est le nom qui est indiqué dans l'api 
        setcategories(reponseApiEnJson.categories)

    }

    //UseEffect est une fonction qui est utilisé pour effecter l'appel de l'API a une seule reprise et eviter les boucles infinies.
    //En premier parametre j'appel la fonction de l'api et en deuxieme parametre je mets un tableau vide (celui-ci peut etre remplacé par un ou plusieurs variables)

    useEffect(() => {
        appelApi();
    },
        []);

    const handleOnClickCategory = async (nameCategory) => {

        const reponseApiMealCategory = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${nameCategory}`)
        const reponseApiMealCategotyJson = await reponseApiMealCategory.json();

        setMealsCategory(reponseApiMealCategotyJson.meals)
    }


    return (
        <>
            <div>
                <h1>Category List</h1>
                <div>
                    <p>Recettes pour la catégorie sélectionnée :</p>
                    {mealsCategory.map((meal) => {
                        return (
                            <div key={meal.idMeal}>
                                <h3>{meal.strMeal}</h3>
                            </div>
                        );
                    })}
                </div>

                <div >
                    {categories.map((category) => (
                        <div key={category.idCategory}>
                            <h2>{category.strCategory}</h2>
                            <img src={category.strCategoryThumb} alt="Picture category" />
                            <button onClick={() => handleOnClickCategory(category.strCategory)}>Voir toutes les recettes:</button>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default ListCategory