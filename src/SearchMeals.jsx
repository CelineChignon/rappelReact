import { useState } from "react"

const SearchMeals = () => {
    const [searchMeal, setSearchMeal] = useState([])


    const handleSubmit = async (event) => {
        event.preventDefault();
        const searchValue = event.target.search.value;
        const reponseApi = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchValue}`)
        const reponseApiEnJson = await reponseApi.json()
        setSearchMeal(reponseApiEnJson.meals);

    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <label name="search">Search</label>
                <input id="search" type="text" />
            </form>

            <div >

                {searchMeal ? (

                    searchMeal.map((meal) => (
                        <h2>{meal.strMeal}</h2>
                    ))


                ) : (
                    <p>Aucune recette porte ce nom</p>
                )}
            </div>
        </>
    )
}

export default SearchMeals