import APIURL from '../helpers/environment';
const deleteMyRecipe = async (recipe, token) => {
    const response = await fetch(`${APIURL}/recipe/${recipe.id}`, {
        method: 'DELETE',
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

export default deleteMyRecipe;