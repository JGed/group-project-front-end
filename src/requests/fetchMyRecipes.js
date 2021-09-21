import APIURL from '../helpers/environment';
const fetchMyRecipes = async (token) => {
    const response = await fetch(`${APIURL}/recipe/mine`, {
        method: 'GET',
        headers: new Headers({
            'Content-Type': 'application/json',
            'Authorization': token,
        }),
    });
    const json = await response.json();
    return {
        status: response.status,
        json: json
    }
};

export default fetchMyRecipes;
