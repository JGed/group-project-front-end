import APIURL from '../helpers/environment';
const userLogin = async (user) => {
            const response = await fetch(`${APIURL}/user/login`, {
                method: 'POST',
                body: JSON.stringify({
                    user: user
                }),
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

export default userLogin;