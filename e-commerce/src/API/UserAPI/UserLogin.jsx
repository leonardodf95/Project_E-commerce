import axios from "axios";


export default class UserLogin{

    static async Login(user){
        try {
            const response = await axios
            .post("https://e-commerce-project-api.herokuapp.com/login", user)
            .then((data) => {return data})
            .catch((error) => {throw error})
            const logedUser = response.data
            return logedUser
        } catch (error) {
            console.log(error)
        }
    }
}