import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
// import Footer from './Footer';

const UpdateData = () => {
    // make state to store data from localstorage
    const [id, setId] = useState();
    const [title, setTitle] = useState();
    const [details, setDetails] = useState();

    const navigation = useNavigate();

    // get data from localstorage
    useEffect(() => {
        setId(localStorage.getItem("id"));
        setTitle(localStorage.getItem("title"));
        setDetails(localStorage.getItem("details"));
    }, []);

    const handleUpdate = (e) => {
        e.preventDefault();
        axios.put(`https://645cf88e250a246ae313d4bf.mockapi.io/Notes-app/${id}`,
        {
            title: title,
            details: details,

        })
        .then(() => {
            navigation('/');
        });
    }

  return (
    <>
        <Navbar />
        <h1 style={{textAlign:'center', marginTop: '6rem', marginBottom: '.7rem', fontSize: '2.2rem', color: '#11142d'}}>Update Notes</h1>
        <form className='container mb-4' style={{width: '60%'}}>
            <div className="mb-3">
                <label className="form-label fs-5">Title</label>
                <input name="title" type="text" className="form-control" value={title} onChange={(e)=> {setTitle(e.target.value)}} />
                
            </div>
            <div className="mb-3">
                <label className="form-label fs-5">Details</label>
                <textarea name="description" className="form-control" value={details} cols="30" rows="10" onChange={(e)=> {setDetails(e.target.value)}}></textarea>
            </div>
            <div>
                <button type="submit" className="btn btn-primary" onClick={handleUpdate}>Update</button>
                <Link to='/'> <button className='btn btn-secondary mx-3'>back</button> </Link>
            </div>
        </form>
        {/* <Footer /> */}
    </>
  )
}

export default UpdateData;