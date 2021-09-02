const userLogin = async (user) => {
            const response = await fetch('http://localhost:3000/user/login', {
                method: 'POST',
                body: JSON.stringify(user),
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