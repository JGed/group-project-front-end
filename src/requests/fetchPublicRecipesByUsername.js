const fetchPublicRecipesByUsername = async (username) => {
    const response = await fetch(`http://localhost:3000/recipe/owner/${username}`, {
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

export default fetchPublicRecipesByUsername;