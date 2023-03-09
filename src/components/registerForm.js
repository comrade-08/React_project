import { useState } from "react"

function RegisterForm() {
    const [inputs, setInputs] = useState({})

    const handleInputs = (event) => {
        let name = event.target.name
        let value = event.target.value
        setInputs(values => (
            { ...values, [name]: value }
        ))
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(inputs);
        // console.log(`name: ${inputs.name}, Email: ${inputs.email}, Address: ${inputs.address}`);
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>Register Page</h2><br />
            <label>Name :</label><br />
            <input type="text" name="name" value={inputs.name} onChange={handleInputs} /><br />
            <label>Email :</label><br />
            <input type="text" name="email" value={inputs.email} onChange={handleInputs} /><br />
            <label>Address :</label><br />
            <textarea name="address" onChange={handleInputs}>
                {inputs.address}
            </textarea><br />
            <select value={inputs.country} name='country' onChange={handleInputs}>
                <option value="" selected></option>
                <option value="India">India</option>
                <option value="Pakistan">Pakistan</option>
                <option value="Korea">Korea</option>
                <option value="China">China</option>
            </select>
            <label>Password :</label><br />
            <input type="text" name="password" value={inputs.password} onChange={handleInputs} /><br />
            <input type="submit" value="submit" /><br />
        </form>
    )
}

export default RegisterForm