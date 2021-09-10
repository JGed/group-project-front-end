const createMyRecipe = async (recipe, token) => {
    const response = await fetch('http://localhost:3000/recipe/', {
        method: 'POST',
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

export default createMyRecipe;