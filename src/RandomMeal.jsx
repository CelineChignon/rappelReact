import { useEffect, useState } from "react"



const RandomMeal = () => {
    const [randomMeal, setRandomMeal] = useState(null)

    const appelApi = async () => {
        const reponseApi = await fetch("https://www.themealdb.com/api/json/v1/1/random.php")
        const reponseApiEnJson = await reponseApi.json()
        setRandomMeal(reponseApiEnJson.meals[0]);
    }

    useEffect(() => {
        appelApi()
    }, []);
    return (
        <>
            <h2>
                Recette du jour:
            </h2>
            {randomMeal ? (
                <div >
                    <h3>{randomMeal.strMeal}</h3>
                    <img className="imageRecette" src={randomMeal.strMealThumb} alt="Photo recette" />
                </div>
            ) : (
                <p>En attente...</p>
            )
            }
        </>
    )
}


export default RandomMeal;