import React from "react";
import { Link } from "react-router-dom";
import planking2 from "../../../assets/media/planking2.jpg";
import pullup2 from "../../../assets/media/pullup2.jpg";
import situp2 from "../../../assets/media/situp2.jpeg";
import jumpingrope from "../../../assets/media/jumpingrope.jpg"

import "./ExercisesCard.css";

const ExercisesCard = ({ exercises }) => (
    <div className="row row-cols-1 row-cols-md-2 g-4">
      <div className="col">
        <div className="card"
        style={{ marginRight : '5%' }}
        >
          <img src={planking2} class="card-img-top" alt="plnking" 
          style={{ 
            height : '35%',
            width : '75%',
            marginLeft : '12%',
            marginTop : '8%'
          }}
          />
          <div className="card-body">
            <h5 className="card-title">Planking</h5>
          </div>
        </div>
      </div>

      <Link to={"/pullup"}> 
      <div className="col">
        <div className="card"
        style={{ marginLeft : '6%' }}
        >
          <img src={pullup2} class="card-img-top" alt="pullup"
          style={{ 
            height : '35%',
            width : '75%',
            marginLeft : '12%',
            marginTop : '8%'
          }}
          />
          <div className="card-body">
            <h5 className="card-title">Pull Up</h5>
          </div>
        </div>
      </div>
      </Link>

      <div className="col">
        <div className="card"
        style={{ marginRight : '4%' }}
        >
          <img src={situp2} class="card-img-top" alt="situp" 
          style={{ 
            height : '35%',
            width : '75%',
            marginLeft : '12%',
            marginTop : '8%'
          }}
          />
          <div className="card-body">
            <h5 className="card-title">Sit Up</h5>
          </div>
        </div>
      </div>

      <div className="col">
        <div className="card"
        style={{ marginLeft : '6%' }}
        >
          <img src={jumpingrope} class="card-img-top" alt="jumpingrope" 
          style={{ 
            height : '35%',
            width : '75%',
            marginLeft : '12%',
            marginTop : '8%'
          }}
          />
          <div className="card-body">
            <h5 className="card-title">Jumping Rope</h5>
          </div>
        </div>
      </div>
    </div>
);

export default ExercisesCard;
