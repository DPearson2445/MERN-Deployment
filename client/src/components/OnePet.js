import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import { useHistory } from 'react-router-dom';


const OnePet = () => {

    const {_id} = useParams();
    
    const history = useHistory();

    const [petInfo, setPetInfo] = useState({});

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/pets/${_id}`)
            .then(res=>{
                console.log("Response when trying to get one pet----->",res);
                setPetInfo(res.data.results)

            })
            .catch(err=>{
                console.log(err);
            })

    }, [_id]);


    const deleteHandler = (e, _id)=>{
        console.log("Trying to delete");
        axios.delete(`http://localhost:8000/api/pets/${_id}`)
            .then(res=>{
                console.log("Successfully deleted an object.", res);
                history.push("/");
            })
            .catch(err=>{
                console.log(err);
            })
    }


    return (
        <>
        <div>
            <h2 className="text-md-start">Details about: {petInfo.name}</h2> 
            <btn onClick={(e)=>deleteHandler(e, petInfo._id)} className="btn btn-danger text-end">Adopt</btn>
        </div>
        <div className="border border-dark">
            <h3 className="text-md-start">Pet Type: {petInfo.petType}</h3>
            <h4 className="text-md-start">Description: {petInfo.description}</h4>
            <h4 className="text-md-start">Skills:</h4>
            <ul>
                <li className="text-md-start">{petInfo.skill1}</li>
                <li className="text-md-start">{petInfo.skill2}</li>
                <li className="text-md-start">{petInfo.skill3}</li>
            </ul>
        </div>

        </>
    );
};



export default OnePet;