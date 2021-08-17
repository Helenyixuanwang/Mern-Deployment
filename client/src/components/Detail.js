import React , { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';
import Delete from './Delete';


const Detail = (props) => {
    const { id } = props; //this comes from the routes' URL
    const [ pet, setPet ] = useState({});

    useEffect(() => {
        axios.get("http://localhost:8000/api/pets/"+ id)
        .then((res) =>{
             console.log(res);
             setPet(res.data);
        })
        .catch((err) => console.log(err))
        //alrays remember the dependency array--empty is fine
        },[]);

const redirectAfterDelete=()=> {
    navigate("/");
}
    


    return(
        <div style={{width:"60%", margin:"auto"}}>
        <h4 style={{textAlign:"right"}}><Link to ="/">back to home</Link></h4>
        
        <h4 style={{textAlign:"right"}}><Delete petId={id} afterDelete={redirectAfterDelete} petName={pet.name} /> </h4>
        <h3 style={{textAlign:"left"}}>Details about {pet.name} :</h3>
        <div style={{border:"2px solid black", minHeight:"200px", padding:"10px",fontSize:"20px"}}>
       
        <ul >
            <li ><span style={{fontWeight:"bolder"}}>Pet type:</span>   {pet.type}</li>
            <li><span style={{fontWeight:"bolder"}}>Description:</span> {pet.description}</li>
            <li><span style={{fontWeight:"bolder"}}>Skills:</span></li>
                <ul>
                    <li>{pet.skill1}</li>
                    <li>{pet.skill2}</li>
                    <li>{pet.skill3}</li>
                </ul>
        </ul>
        </div>
        
        
        
        </div>
    )
}

export default Detail;