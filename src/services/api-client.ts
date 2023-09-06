import axios from "axios";

export default axios.create ({

    baseURL : 'https://api.rawg.io/api',
    params : {
    key :'bb76bee17c7647519e69ea2fc4473b74'
    }
})