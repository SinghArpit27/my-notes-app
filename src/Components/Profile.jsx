import React from 'react'
import Navbar from './Navbar';
import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
    const { user, logout } = useAuth0();
  return (
    <>
        <Navbar />
        <h1 style={{textAlign:'center', marginTop: '6rem', marginBottom: '1rem', fontSize: '2.5rem', color: '#475BE8'}}>Profile</h1>

        <div className="container d-flex">
            <div className="car" style={{width: '33rem'}}>
                <img src={user.picture} className="card-img-top" alt={user.name} />
            </div>
            <div className="card-body">
                    <h5 className="title" style={{fontSize: '1.2rem'}}>{user.name}</h5>
                    <h5 className="card-title">{user.email}</h5>
                    <h5 className="card-title">{user.mobile}</h5>
                    <p className="card-text">I am a Full stack web developer I can develop both client and server software. In addition to mastering HTML and CSS, Program a browser (like using JavaScript, jQuery, Typescript, React.Js) Program a server (like using Node, Express, MongoDB).</p>
                    <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })} className="btn btn-primary mt-3">Log Out</button>
            </div>
        </div>
    </>
  )
}

export default Profile;