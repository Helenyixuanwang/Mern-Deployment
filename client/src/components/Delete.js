import React from 'react';
import axios from 'axios';


const Delete = (props) => {
    const { petId ,afterDelete, petName} = props;
    

    const deleteHandler=()=> {
        console.log("Delete Id is "+petId);
        axios.delete("http://localhost:8000/api/pets/"+ petId)
        .then((res)=>{
            console.log("pet deleted: ");
            console.log(res.data);
            //run the specific code for after the delete is successful. here "petId" is not necessary because after delete, the edit page redirect to homepage and it does not need the special Id to do the redirection.If it keeps in the same page to do the delete, Id is needed. I kept the petId in the exam version, but it does not matter.
            afterDelete(petId);
        } )
        .catch((err)=> console.log(err))

    }

    return(
        <button className="delete-btn" onClick={deleteHandler}>
        Adopt  {petName}
        </button>
    )
}

export default Delete;