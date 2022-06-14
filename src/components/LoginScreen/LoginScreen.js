import { useState } from "react"


const LoginScreen = ()=>{
    
    const [value, setValues] = useState({
        email: '',
        password: ''
    })

    const handleInputChange = (e) => {
        setValues({
            ...value,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        
    }
    return(
        <div className="login-screen">
            <div className="login-container">
                <form className="login">
                    <input className="form-control">

                    </input>
                </form>
            </div>
        </div>
    )
}

export default LoginScreen