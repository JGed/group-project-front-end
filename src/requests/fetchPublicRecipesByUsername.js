import APIURL from '../helpers/environment';
const fetchPublicRecipesByUsername = async (username) => {
    const response = await fetch(`${APIURL}/recipe/owner/${username}`, {
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