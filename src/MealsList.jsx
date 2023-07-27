import { useEffect, useState } from "react"

const MealsList = () => {

    const [meals, setMeals] = useState([]);

    const appelApi = async () => {
        const reponseApi = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=`)
        const reponseApiEnJson = await reponseApi.json()
        setMeals(reponseApiEnJson.meals);
    }
    //on fait une boucle pour eviter la boucle infinie, si meals est vide alors il fait appel a la fonction appelApi, si c'est différent de 0 il ne va plus dans la fonction


    useEffect(() => {
        appelApi();
    },
        []);

    // useEffect permet d'executer du code
    // quand le composant est chargé

    // il permet de préciser si on veut executer le code
    // à chaque fois que le composant est chargé,
    // uniquement une fois au premier chargement du composant (fetch)
    // ou quand certaines variables sont modifiées (comme des filtres qui engendrent besoin de données raffraichies)

    return (
        <div>
            <h1>Meals List</h1>
            <div >
                {meals.map((meal) => (
                    <div key={meal.idMeal}>
                        <h2>{meal.strMeal}</h2>
                        <img className="imageRecette" src={meal.strMealThumb} alt="Photo recette" />
                    </div>
                ))}
            </div>
        </div>
    )

}
export default MealsList