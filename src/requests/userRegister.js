import APIURL from '../helpers/environment';
const userRegister = async (user) => {

            const response = await fetch(`${APIURL}/user/register`, {
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

export default userRegister;