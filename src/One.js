import React, { useState } from 'react';
import axios from 'axios';

function One() {
    const [un, setUn] = useState("");
    const handleSignup = async(e) =>{
        e.preventDefault();
        try{
            await axios.post("http://localhost:5000/signup",{un})
            alert("User signed successfully")
            setUn("")
        }catch(err){
            console.log(err)
            alert('error')
        }
    }
    return (
        <>
        <div>
            <form onSubmit={handleSignup}>
                <input type="text" value={un} onChange={(e) => setUn(e.target.value)} />
                <button type='submit'>Sign Up</button>
            </form>
        </div>
        </>
    )
}

export default One