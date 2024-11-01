import { useState } from "react";


const StateFullForm = () => {
    const [name, setName] = useState('Ms')
const [email, setEmail] = useState(null)
const [password, setPassword]= useState(null);
const [ error, setError] = useState('')

    const handleSubmit= e =>{
        e.preventDefault();
        if(password.length<6){
            setError('Password must be 6 characters or longer')
        }
else{
    setError('')
}
    }

    const handleEmailChange = e=>{
console.log(e.target.value)
setEmail(e.target.value)
    }

    const handlePasswordChange= e=>{
        console.log(e.target.value)
        setPassword(e.target.value)
    }

    const handleChangeName= e=>{
        console.log(e.target.value)
        setName(e.target.value)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>

<input value={name}
onChange={handleChangeName} 
type="text" name="name" />
<br />
<input 
onChange={handleEmailChange} 
type="email" name="email" />
<br />
<input
onChange={handlePasswordChange}
type="text" name="password" required />
<br />
<button>Submit</button>
{
    error && <p>{error}</p>
}
</form>
        </div>
    );
};

export default StateFullForm;