import React, { useEffect, useRef } from 'react';

const RefForm = () => {
const nameRef = useRef(null)
const emailRef = useRef(null)
const passwordRef = useRef(null)

const handleSubmit = e =>{
    e.preventDefault();
    console.log(e)
    console.log(nameRef.current.value)
    console.log(emailRef.current.value)
    console.log(passwordRef.current.value)

}

useEffect(()=>{
    nameRef.current.focus();
} ,[])


    return (
        <div>
            <form onSubmit={handleSubmit}>

<input ref={nameRef} type="text" name="name" />
<br />
<input defaultValue={'22103412@iubat.edu'} ref={emailRef} type="email" name="email" />
<br />
<input ref={passwordRef} type="text" name="phone" />
<br />
<button>Submit</button>
</form>

        </div>
    );
};

export default RefForm;