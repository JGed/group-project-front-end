const fetchRecipesByCategory = async (category, search) => {
    const response = await fetch(`http://localhost:3000/recipe/category/${category}${search}`, {
        method: 'GET',
        headers: new Headers({
            'Content-Type': 'application/json',
        })
    })
    const json = await response.json();
    return {
        status: response.status,
        json: json
    }
}

export default fetchRecipesByCategory;