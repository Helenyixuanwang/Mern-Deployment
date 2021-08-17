import React from 'react';

import { Link } from '@reach/router';



const Petlist = (props) => {
    
    
    const { pets } = props;

    // const updateAfterDelete=(deletedPetId)=> {
    //     const filteredArray = pets.filter((petObj)=>{
        
    //         return petObj._id !== deletedPetId;
    //     });
        
    //     setPets(filteredArray);
        
    // }
    
    return (
        <div>
            
            <table className="table">
                <thead>
                    <tr>
                    <th> Name      </th>
                    <th> type      </th>
                    <th> Actions</th>
                    </tr>
                </thead>
                <tbody>
                {pets.map((pet, idx)=>(
                <tr key={idx}>
                    <td>{ pet.name} </td>
                    <td>{pet.type}</td>
                    <td style={{textAlign:"center"}}><span className="detail-btn"><Link to={"/pets/"+pet._id}>details</Link></span >|
                                                    <span className="edit-btn"><Link to={"/pets/"+pet._id+"/edit"}>edit</Link></span>
                    </td>

                </tr>
            ))
            }
                </tbody>
            </table>
           
        </div>
    )
}
export default Petlist;

