import React from 'react';
import {useState} from 'react';
import {useStateValue} from './StateProvider';
import db from './firebase';
import firebase from 'firebase';

const CreateSwitch = () => {

    const [{user},dispatch] = useStateValue();
    const [name,setName] = useState('');
    const handleSubmit = async(e) =>{
        e.preventDefault();
        db.collection("switches").add({
            switchName: name,
            switchState: true,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            uid:user.uid
        });
        console.log(user);
        setName("");
        
        
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input value={name} placeholder="Enter Switch Name" onChange={(e)=>setName(e.target.value)}/>
                <button type="submit">Create Switch</button>
            </form>
        </div>
    )
}

export default CreateSwitch;
