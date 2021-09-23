import APIURL from '../helpers/environment';
const fetchRecipesByCategory = async (category, search) => {
    const response = await fetch(`${APIURL}/recipe/category/${category}${search}`, {
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