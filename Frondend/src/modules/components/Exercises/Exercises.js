import React from 'react'
import ExercisesCard from '../ExercisesCard/ExercisesCard';
import ExercisesDetails from '../Page/ExercisesDetails/ExercisesDetails';

export default function Exercises(props) {
    
    return (
        <div id="main-exercises">

            <main className='mt-0 py-5' >
                {props.children}
            </main>

            <ExercisesDetails />
            <ExercisesCard />
        </div>
    )
}