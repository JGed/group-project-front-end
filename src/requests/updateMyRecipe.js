const updateMyRecipe = async (recipe, token) => {
    const response = await fetch(`https//localhost:3000/recipe/${recipe.id}`, {
        method: 'PUT',
        body: JSON.stringify({
            recipe: recipe
        }),
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

export default updateMyRecipe;