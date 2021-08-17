import React, { useEffect, useState } from 'react'
import axios from 'axios';

import Petlist from '../components/Petlist';
import { Link } from '@reach/router';

const Main = () => {
    const [pets, setPets] = useState([]);
    const [loaded, setLoaded] = useState(false);
    // const [formSubmittedBoolean, setFormSubmittedBoolean] = useState(false);
    useEffect(()=>{
        axios.get('http://localhost:8000/api/pets')
            .then(res=>{
                setPets(res.data);
                setLoaded(true);
            })
            .catch((err) => console.log(err));
    },[]);
  
    return (
        <div style={{width:"70%",margin:"auto"}}>
            {/* <h1> Pet Shelter </h1>
           <Create formSubmittedBoolean={formSubmittedBoolean}
                    setFormSubmittedBoolean={setFormSubmittedBoolean}/> */}
           <h4 style={{textAlign:"right"}}><Link to="/pets/new">add a pet to the shelter</Link></h4>
           <h1>These pets are looking for a good home. </h1>
           { loaded && <Petlist pets={pets} 
                                setPets={setPets} 
                                
                                
                                /> }
           
        </div>
    )
}
export default Main;
