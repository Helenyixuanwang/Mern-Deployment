import React,{useState, useEffect} from 'react';
import axios from 'axios';
import { navigate, Link } from '@reach/router';
const Create = (props) => {
    const [ name, setName] = useState("");
    const [ type, setType] = useState("");
    const [ description, setDescription] = useState("");
    const [ skill2, setSkill2] = useState("");
    const [ skill3, setSkill3] = useState("");
    const [ skill1, setSkill1] = useState("");
    const [errors, setErrors] = useState({});
    // const { formSubmittedBoolean, setFormSubmittedBoolean} = props;
    const {id } = props;

    useEffect(()=>{
        axios.get("http://localhost:8000/api/pets/"+ id)
        .then((res) =>{
             console.log(res);
            
            setName(res.data.name);
            setType(res.data.type);
            setDescription(res.data.description);
            setSkill1(res.data.skill1);
            setSkill2(res.data.skill2);
            setSkill3(res.data.skill3);
        })
        .catch((err) => console.log(err))

    },[]);

    const updatePet = {
        name,
        type,
        description,
        skill1,
        skill2,
        skill3,
    }

    const handleSubmit=(e)=> {
        e.preventDefault();
        axios.put("http://localhost:8000/api/pets/"+id, updatePet)
        .then((res)=> {
            console.log(res);
            // navigate("/pets/"+res.data._id);
            navigate("/pets/"+id);
            // setFormSubmittedBoolean(!formSubmittedBoolean);
           
            
            })
            .catch((err)=>{
                console.log(err);
                console.log(err.response);
                //err.response.data is the body you get in Postman
                if(err.response.data.errors) {
                    //save the errors in state so we can display them
                    setErrors(err.response.data.errors)
                }
            })
           
            
           

    }

    


    return ( 
        <div>
            <h2>Edit {name}</h2>
            <h4 style={{textAlign:"center"}}><Link to="/">back to home</Link></h4>
            <form className="form-div" onSubmit={handleSubmit}>
            {
                    errors.name?
                    <p  className="error-txt">{ errors.name.message}</p>
                    :null
                }
            <div>
            
                <label>Name:</label>
                <input type="text"
                    value={name}
                    name="name"
                    onChange={(e)=>{setName(e.target.value)}} />
           </div>
           {
                    errors.type?
                    <p className="error-txt">{ errors.type.message}</p>
                    :null
                }
            <div>
            
                <label>Type:</label>
                <input type="text"
                       value={type}
                       name="type"
                       onChange={(e)=>{setType(e.target.value)}} />
            </div>
            {
                    errors.description?
                    <p className="error-txt">{ errors.description.message}</p>
                    :null
                }
            <div>
            
                <label>Description</label>
                <input type="text"
                       value={description}
                       name="description"
                       onChange={(e)=>{setDescription(e.target.value)}} />
            </div>
            <div>
                <label>skill1</label>
                <input type="text"
                       value={skill1}
                       name="skill1"
                       onChange={(e)=>{setSkill1(e.target.value)}} />
            </div>
            <div>
                <label>skill2</label>
                <input type="text"
                       value={skill2}
                       name="skill2"
                       onChange={(e)=>{setSkill2(e.target.value)}} />
            </div>
            <div>
                <label>skill3</label>
                <input type="text"
                       value={skill3}
                       name="skill3"
                       onChange={(e)=>{setSkill3(e.target.value)}} />
            </div>
            <div>
                <input type="submit" className="submit-btn" value="Edit Pet" />
            </div>
                
            </form>
        </div>
     );
}
 
export default Create;