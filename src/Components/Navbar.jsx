import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import { CgMenuRightAlt, CgClose } from 'react-icons/cg';
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from 'react-router-dom';
// import Profile from './Profile';


const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [open, setOpen] = useState(false);

  const { user, loginWithRedirect, isAuthenticated, logout, isLoading } = useAuth0();
  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    <>
         <nav className='navbar'>
            <h3 className='logo'>Notes</h3>
            <ul className= {isMobile ? "nav-links-mobile" : "nav-links"} onClick={() => setIsMobile(false)}>
                <NavLink to="/" className="home"> <li>home</li> </NavLink>
                <NavLink to="/create" className="contact"> <li>Create</li> </NavLink>
                <NavLink to="/about" className="about"> <li>about</li> </NavLink>

                {
                  isAuthenticated ?
                  <NavLink to="/profile" className="profile"> <li>profile</li> </NavLink>
                  
                  :
                  <button onClick={() => loginWithRedirect()} className='btn btn-light'>Log In</button>
                }
                
            </ul>
            <button className='mobile-menu-icon' onClick={() => setIsMobile(!isMobile)}>
              {isMobile ? <CgClose /> : <CgMenuRightAlt />}
            </button>


        </nav>
    </>
  )
}

function DropdownItem(){
  return(
    <li className='dropdownItem'>
      <img src={props.img}></img>
      <a>{props.text}</a>
    </li>
  );
}

export default Navbar;

// {
//   isShow && 
//   (<div class="sub-menu-wrap" id="subMenu">
//     <div class="sub-menu">
//       <div class="user-info">
//         <img src={user.picture} alt={user.name} className="profile-pic" />
//         <h3>{user.name}</h3>
//       </div>
//       <hr />
//       <a href="#" class="sub-menu-link">
//         <i class="fa fa-envelope" aria-hidden="true"></i>
//         <p>{user.email}</p>
//       </a>
//       <a href="#" class="sub-menu-link">
//         <i class="fas fa-sign-out-alt"></i>
//         <p><button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })} className='btn btn-light'>Log Out</button></p>
//       </a>
//     </div>
//   </div>)
// }




// {
//   isAuthenticated
//   ? 
//   <div>
//     <div className="menu-container">
//       <div className="menu-trigger" onClick={()=>{setOpen(!open)}}>
      
//         <img src={user.picture} alt={user.name} className="profile-pic"/>
//       </div>
//       <div className={`dropdown-menu ${open? 'active' : 'inactive'}`}>
//         <h3>The Arpit <span>Web Developer</span></h3>
//         <ul>
//           {/* <DropdownItem img={userIcon} text={"My Profile"} /> */}
//           <li className='dropdownItem'>
//             <img src={user.picture}></img>
//             <a>{user.name}</a>
//           </li>
//           <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })} className='btn btn-light'>Log Out</button>
//         </ul>
//       </div>
//     </div>  
//   </div>
//   :
//   <button onClick={() => loginWithRedirect()} className='btn btn-light mx-2'>Log In</button>
// }