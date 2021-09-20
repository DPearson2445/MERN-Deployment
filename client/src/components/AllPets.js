import React, {useState, useEffect} from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';


const AllPets = () => {


    //store all products in state variable
    const [allPets, setAllPets] = useState([]);

    //state variable to track
    const [deleteClicked, setDeleteClicked] = useState(false);

    //api call to render all products
    useEffect(() => {


        axios.get("http://localhost:8000/api/pets")
            .then(res=>{
                console.log(res);
                // res.data.results.sort();
                // sort by name
                res.data.results.sort(function(a, b) {
                    var nameA = a.petType.toUpperCase(); // ignore upper and lowercase
                    var nameB = b.petType.toUpperCase(); // ignore upper and lowercase
                    if (nameA < nameB) {
                    return -1;
                    }
                    if (nameA > nameB) {
                    return 1;
                    }
                    // names must be equal
                    return 0;
                });

                setAllPets(res.data.results);
            })
            .catch(err=>{
                console.log(err);

            })

    }, [deleteClicked])



    // const deleteHandler = (e, _id)=>{
    //     console.log("Trying to delete");
    //     axios.delete(`http://localhost:8000/api/pets/${_id}`)
    //         .then(res=>{
    //             console.log("Successfully deleted an object.", res);
    //             setDeleteClicked(!deleteClicked);
    //         })
    //         .catch(err=>{
    //             console.log(err);
    //         })
    // }






    return (
        <>
        <hr></hr>

        <div>
            <table className="table table-striped">
                <thead>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Type</th>
                    <th scope="col">Actions</th>
                </tr>
                </thead>
                <tbody>
                {allPets.map((pet, i)=>{
                    return <>
                            <tr key={i}>
                                <td>{pet.name}</td>
                                <td>{pet.petType}</td>
                                <td><Link className="btn btn-secondary" to={`/pet/${pet._id}`}>Details</Link>|<Link className="btn btn-secondary" to={`/pet/${pet._id}/edit`}>Edit</Link></td>
                            </tr>
                        </> 
                })}
                </tbody>
            </table>
            
            
            </div>
            <hr></hr>
                
        </>
    );
};



export default AllPets;