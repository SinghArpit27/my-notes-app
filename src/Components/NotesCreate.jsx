import React, { useState } from 'react';
import Navbar from './Navbar';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const NotesCreate = () => {
    const [title, setTitle] = useState("");
    const [details, setDetails] = useState("");

    const navigation = useNavigate();

    const header = {"Access-Control-Allow-Origin" : "*"}

    const handleSubmit = (e) => {
        e.preventDefault();
        e.preventDefault();
        console.log('clicked');
        axios.post(
            "https://645cf88e250a246ae313d4bf.mockapi.io/Notes-app",
            {
                title: title,
                details: details,
                header
            }
        )
        .then(() => {
            navigation('/');
        });
    };

  return (
    <>  
        <Navbar />
        <h1 style={{textAlign:'center', marginTop: '6rem', marginBottom: '.7rem', fontSize: '2.2rem', color: '#11142d'}}>Create Notes</h1>
        <form className='container mb-4' style={{width: '60%'}}>
            <div className="mb-3">
                <label className="form-label fs-5">Title</label>
                <input name="title" type="text" placeholder='Enter Title' className="form-control" onChange={(e)=> {setTitle(e.target.value)}} />
                
            </div>
            <div className="mb-3">
                <label className="form-label fs-5">Details</label>
                <textarea name="description" placeholder='Enter Details' className="form-control" cols="30" rows="10" onChange={(e)=> {setDetails(e.target.value)}}></textarea>
            </div>
            <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
        </form>
        
    </>
  );
}

export default NotesCreate;