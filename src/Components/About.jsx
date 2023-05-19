import React from 'react';
import Navbar from './Navbar';
import './About.css';
import { Link } from 'react-router-dom';
// import { CgUserlane } from "react-icons/cg";
import image1 from '../assets/img/image1.jpeg';
// import Footer from './Footer';

const About = () => {
  return (
    <>
        <Navbar />
        <h1 style={{textAlign:'center', marginTop: '4rem', marginBottom: '.7rem', fontSize: '2.2rem', color: '#11142d'}}></h1>


        <div className="center-vertical bg-dark">
          <div className="about-us-section bg-light">
            <div className="container">
              <div className="row">
                <div className="col-12 col-lg-6 mb-4 mb-lg-0">
                  <div className="img-head">
                    <img src={image1} />
                  </div>
                </div>
                <div className="col-12 col-lg-6">
                  <h2 className='text-head'>KNOW MORE ABOUT US</h2>
                  <div className="break-small mb-2"></div>
                  <p className='text-para'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti est soluta doloribus perferendis distinctio nihil inventore deserunt nostrum quae non quo sit ducimus nobis aspernatur, corrupti velit quaerat aliquid error illum consequatur. Sit perspiciatis temporibus blanditiis quam sint repudiandae accusamus laudantium velit fugiat, accusantium et totam quos reiciendis aliquid consequuntur suscipit soluta amet placeat voluptate ipsam sapiente praesentium eos. At quo iure repudiandae assumenda ipsum eum dicta quidem consequuntur rem cumque blanditiis, optio explicabo veniam esse nemo. Laboriosam beatae quasi fugiat vel reiciendis. Voluptatibus et similique consectetur natus perspiciatis libero reprehenderit, veritatis officia labore culpa dicta quod quia voluptas quidem.</p>
                  {/* <div className="row">
                    <div className="col-12 col-md-4 mb-2 mb-md-0">
                      <div className="box">
                        <i className=' mb-3'> { CgUserlane } </i>
                        <h4 className='mb-0'>TOTAL CLIENTS</h4>
                        <p className="mb-0">999</p>
                      </div>
                    </div>
                  </div> */}
                  <Link to='/'> <button className='btn btn-primary'>explore</button> </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* <Footer /> */}

    </>
  )
}

export default About;