import APIURL from '../helpers/environment';
const fetchPublicRecipes = async () => {
    const response = await fetch(`${APIURL}/recipe/`, {
        method: 'GET',
        headers: new Headers({
            'Content-Type': 'application/json',
        }),
    });
    const json = await response.json();

    return { status: response.status, json: json };
};

export default fetchPublicRecipes;
