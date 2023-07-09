import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import './Home.css'

export default class Home extends Component {
  render() {
    return (
        <div className='container mr-auto mt-2 mt-lg-0'>
            <img src={require('../../../../assets/media/Fitness.png')} 
            alt="Banner" 
            style={{ 
            marginTop: '5rem', 
            marginLeft: '30rem', 
            height: '38rem', 
            width: '44rem' }}
            />
        <div className='text'>
            <h2 className='club'
            style={{ color: 'red',
            marginTop: '-35rem' }}>
                Fitness Club
            </h2> 
            <br/>

            <h1 className='sweat'>
                Sweat, Smile And Repeat
            </h1> 
            <h2 className='you'>
                Check out the most effective exercises  
                personalized to you
            </h2>
        </div>

            <br/><br/>
                <div>
                    <Link to={"/member"}>
                <button 
                type="button" 
                className="btn btn-danger btt text-white">
                    Explore Exercises
                </button>
                    </Link> 
                </div>
            <br/>

            <div className='search'>
                <h1 className='weso'>
                    Awesome Exercise You Should Know 
                </h1>
            </div>
           
        </div>
    )
  }
}