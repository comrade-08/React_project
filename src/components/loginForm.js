import { useState } from 'react'

function LoginForm() {
    const [inputs, setInputs] = useState({})
    // const [username, setUsername] = useState('')
    // const [password, setPassword] = useState('')

    const handleInputs = (event) => {
        let name = event.target.name
        let value = event.target.value
        setInputs(values => (
            { ...values, [name]: value }
        ))
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        // alert(`Name: ${username} Password: ${password}`)
        console.log(`Username: ${inputs.username} Password: ${inputs.password}`)
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>Login Page</h2>
            <label>Username :</label><br />
            <input type="text" name="username" value={inputs.username} onChange={handleInputs} /><br />
            <label>Password :</label><br />
            <input type="text" name="password" value={inputs.password} onChange={handleInputs} /><br />
            <input type="submit" value="submit" />
        </form>
    )
}

export default LoginForm