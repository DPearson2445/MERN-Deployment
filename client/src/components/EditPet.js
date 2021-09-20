import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useParams } from 'react-router';
import { useHistory } from 'react-router-dom';


const EditPet = () => {

    const history = useHistory();

    const {_id} = useParams();

    let [petInfo, setPetInfo] = useState({})

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

    const [validationErrors, setValidationErrors] = useState({});

    const changeHandler = (e)=> {
        console.log("Input is changing!", e.target.value);
        setPetInfo({
            ...petInfo,
            [e.target.name]:e.target.value
        })
    }

    const submitHandler = (e)=>{
        e.preventDefault();
        console.log("submitting the form with this info, ", petInfo);
        axios.put(`http://localhost:8000/api/pets/${_id}`, petInfo)
            .then(res=>{
                console.log(res);
                if(res.data.err) {  //if validation errors
                    setValidationErrors(res.data.err.errors);
                } else {
                    history.push("/");

                }
                
            })
            .catch(err=>{
                console.log("Errors are ", err);
            })
    }




    return (
        <>
        <div>
        <h1>Edit {petInfo.name}</h1>
        <form onSubmit={submitHandler} className="border border-dark">
            <div class="form-group row">
                <label class="col-sm-2 col-form-label">Name</label>
                <div class="col-sm-10">
                <input onChange={changeHandler} type="text" class="form-control" name="name" value={petInfo.name}/>
                <span className="text-danger">{validationErrors.name && validationErrors.name.message}</span>
                </div>
            </div>
            <div class="form-group row">
                <label class="col-sm-2 col-form-label">Pet Type</label>
                <div class="col-sm-10">
                <input onChange={changeHandler} type="text" class="form-control" name="petType" value={petInfo.petType}/>
                <span className="text-danger">{validationErrors.petType && validationErrors.petType.message}</span>
                </div>
            </div>
            <div class="form-group row">
                <label class="col-sm-2 col-form-label">Description</label>
                <div class="col-sm-10">
                <input onChange={changeHandler} type="text" class="form-control" name="description" value={petInfo.description}/>
                <span className="text-danger">{validationErrors.description && validationErrors.description.message}</span>
                </div>
            </div>
            <h2>Skills (optional):</h2>
            <div class="form-group row">
                <label class="col-sm-2 col-form-label">Skill 1:</label>
                <div class="col-sm-10">
                <input onChange={changeHandler} type="text" class="form-control" name="skill1" value={petInfo.skill1}/>
                </div>
            </div>
            <div class="form-group row">
                <label class="col-sm-2 col-form-label">Skill 2:</label>
                <div class="col-sm-10">
                <input onChange={changeHandler} type="text" class="form-control" name="skill2" value={petInfo.skill2}/>
                </div>
            </div>
            <div class="form-group row">
                <label class="col-sm-2 col-form-label">Skill 3:</label>
                <div class="col-sm-10">
                <input onChange={changeHandler} type="text" class="form-control" name="skill3" value={petInfo.skill3}/>
                </div>
            </div>

            <input type="submit" className="btn btn-primary" value="Edit Pet"/>

            </form>
        
        </div>
        </>
    );
};



export default EditPet;