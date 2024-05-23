import React from 'react'
// import { Navbar } from 'react-bootstrap';
import SignUpform from'../components/SignUpform';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SignUpImg from '../assets/10.jpg';
import Hero from '../components/Hero';

function SignUp() {
  return (
    <>
    <Navbar/>
    <Hero 
        cName="hero-mid"
        heroImg={SignUpImg}
        title="Sign Up"
        btnClass="hide"
        />
    <SignUpform/>
    <Footer/>
    </>
  )
}

export default SignUp