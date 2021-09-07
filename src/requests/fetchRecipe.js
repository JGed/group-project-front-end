const fetchRecipe = async (recipe, token) => {
    const response = await fetch(`http://locahost:3000/recipe/${recipe.id}`, {
        method: 'GET',
        headers: new Headers({
            'Content-Type': 'application/json',
            'Authorization': token
        })
    })
    const json = await response.json();
    return {
        status: response.status,
        json: json
    }
}

export default fetchRecipe;
