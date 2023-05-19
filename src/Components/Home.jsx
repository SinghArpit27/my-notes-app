import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import axios from 'axios';
import './Home.css';
import { Link } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";

const Home = () => {
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);

  const { user, loginWithRedirect, isAuthenticated, logout } = useAuth0();

  function getData(){
    axios
    .get("https://645cf88e250a246ae313d4bf.mockapi.io/Notes-app")
    .then((res) => {
      setData(res.data);
    });
  }

  const handleDelete = (id) => {
    axios
    .delete(`https://645cf88e250a246ae313d4bf.mockapi.io/Notes-app/${id}`)
    .then(() => {
      getData();
    });
  }

  const setToLocalStorage = (id, title, details) => {
    localStorage.setItem("id", id);
    localStorage.setItem("title", title);
    localStorage.setItem("details", details);
  }


  useEffect(() => {
    getData();
  }, []);

  return (
    <>
        <Navbar />
        <h1 style={{textAlign:'center', marginTop: '6rem', marginBottom: '1rem', fontSize: '2.5rem', color: '#475BE8'}}>Notes</h1>
       

        <div className="row row-cols-1 row-cols-md-2 g-5 mb-5 ms-4 me-4">
        {/* row row-cols-1 row-cols-md-3 g-4 */}

          {
            data.map((notesData) => {
              return(
                <>
                  <div className="col">
                    <div className="card">
                      <div className="card-body">
                        <h5 className="card-title">{notesData.title}</h5>
                        <p className="card-text">{notesData.details}</p>
                      </div>
                      <div className='d-flex'>
                        <Link to='/update'> <button className='btn btn-success ms-3 mb-2' onClick={()=> setToLocalStorage(notesData.id, notesData.title, notesData.details)}>Edit</button> </Link>
                        <button className='btn btn-danger ms-2 mb-2' onClick={()=> handleDelete(notesData.id)}>Delete</button>
                      </div>
                    </div>
                  </div>
                </>
              );
            })
          }
        </div>

        
    </>
  )
}

export default Home;