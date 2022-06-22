import axios from 'axios'


class UserRegister {

    static async Register(user) {
        let success = false
        await axios.post('https://e-commerce-project-api.herokuapp.com/users', user).then(success=true).catch(success=false)

        return success
    }
}

export default UserRegister
