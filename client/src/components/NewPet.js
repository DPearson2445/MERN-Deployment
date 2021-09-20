import React, {useState} from 'react';
import axios from 'axios';
import { useHistory } from 'react-router';

const NewPet = () => {

    const history = useHistory();

    let [formInfo, setFormInfo] = useState({
        name:"",
        petType:"",
        description:"",
        skill1:"",
        skill2:"",
        skill3:""

    })

    const [validationErrors, setValidationErrors] = useState({});

    const changeHandler = (e)=> {
        console.log("Input is changing!");
        setFormInfo({
            ...formInfo,
            [e.target.name]:e.target.value
        })
    }

    const submitHandler = (e)=>{
        e.preventDefault();
        console.log("submitting the form with this info, ", formInfo);
        axios.post("http://localhost:8000/api/pets", formInfo)
            .then(res=>{
                console.log(res);
                if(res.data.err) {  //if validation errors
                    setValidationErrors(res.data.err.errors);
                } else {
                    setFormInfo({
                        name:"",
                        petType:"",
                        description:"",
                        skill1:"",
                        skill2:"",
                        skill3:""
                    })
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
        <h2>Know of a Pet needing a home?</h2>
        <form onSubmit={submitHandler} className="border border-dark">
            <div class="form-group row">
                <label class="col-sm-2 col-form-label">Name</label>
                <div class="col-sm-10">
                <input onChange={changeHandler} type="text" class="form-control" name="name" placeholder="Name Here"/>
                <span className="text-danger">{validationErrors.name && validationErrors.name.message}</span>
                </div>
            </div>
            <div class="form-group row">
                <label class="col-sm-2 col-form-label">Pet Type</label>
                <div class="col-sm-10">
                <input onChange={changeHandler} type="text" class="form-control" name="petType" placeholder="Pet Type Here"/>
                <span className="text-danger">{validationErrors.petType && validationErrors.petType.message}</span>
                </div>
            </div>
            <div class="form-group row">
                <label class="col-sm-2 col-form-label">Description</label>
                <div class="col-sm-10">
                <input onChange={changeHandler} type="text" class="form-control" name="description" placeholder="Description Here"/>
                <span className="text-danger">{validationErrors.description && validationErrors.description.message}</span>
                </div>
            </div>
            <h2>Skills (optional):</h2>
            <div class="form-group row">
                <label class="col-sm-2 col-form-label">Skill 1:</label>
                <div class="col-sm-10">
                <input onChange={changeHandler} type="text" class="form-control" name="skill1" />
                </div>
            </div>
            <div class="form-group row">
                <label class="col-sm-2 col-form-label">Skill 2:</label>
                <div class="col-sm-10">
                <input onChange={changeHandler} type="text" class="form-control" name="skill2" />
                </div>
            </div>
            <div class="form-group row">
                <label class="col-sm-2 col-form-label">Skill 3:</label>
                <div class="col-sm-10">
                <input onChange={changeHandler} type="text" class="form-control" name="skill3" />
                </div>
            </div>

            
            <input type="submit" className="btn btn-primary" value="Add Pet"/>



            </form>
            
        </div>
        </>
    );
};



export default NewPet;