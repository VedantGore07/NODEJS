const axios = require('axios')

const url = 'https://jsonplaceholder.typicode.com/users'

async function fetchUsers(){
    try{
        const response = await axios.get(url)
        const users = response.data;

        console.log('users fetched from api')
        console.log(users)
    }catch(erros){
        console.log('error fetching data', error.message)
    }
}

fetchUsers()