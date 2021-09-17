const fetchRecipesByCategory = async (category, order) => {
    const response = await fetch(`http://localhost:3000/recipe/category/${category}${order ? `?order=${order}` : ''}`, {
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