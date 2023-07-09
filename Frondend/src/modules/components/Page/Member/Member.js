import React from "react";
import { Link } from 'react-router-dom';
import group42 from "../../../../assets/media/icons/Group_42.png";
import icon32 from "../../../../assets/media/icons/Icon.png";
import vector from "../../../../assets/media/icons/Vector.png";

import "./Member.css";

export default function Member() {
  return (
    <div className="card-group">
      <div className="card">
        <img src={icon32} className="card-img-top gmbr" alt="icon32"
        style={{ 
          height: '11%',
          width : '21%',
          marginLeft : '39%',
          marginTop : '12%' }}
        />
        <br />
        <div className="card-body">
          <h5 className="card-title">Classic</h5>
          <br />
          <p className="card-text">
            - Akses tak terbatas ke seluruh FitnessFit di Indonesia <br />
            <br />- Gratis kelas setiap harinya
          </p>
          <br />
          
          <Link to={"/payment"}>
          <button type="button" className="btn btn-danger stp text-white">
            Start
          </button>
          </Link>
        </div>
      </div>

      <div className="card">
        <img src={group42} className="card-img-top gmbr" alt="group42"
        style={{ 
          height: '15%',
          width : '24%',
          marginLeft : '37%',
          marginTop : '12%' }} 
        />
        <br />
        <div className="card-body">
          <h5 className="card-title">Gold</h5>
          <br />
          <p className="card-text">
            - Akses tak terbatas ke seluruh FitnessFit di Indonesia <br />
            <br />
            - Gratis kelas setiap harinya <br /> <br />- Gratis 2 sesi personal
            training
          </p>
          <br />
          
          <Link to={"/payment"}>
          <button type="button" className="btn btn-danger stp text-white">
            Start
          </button>
          </Link>
        </div>
      </div>

      <div className="card">
        <img src={vector} className="card-img-top gmbr" alt="vector" 
        style={{ 
          height: '11%',
          width : '21%',
          marginLeft : '39%',
          marginTop : '12%' }}
        />
        <br />
        <div className="card-body">
          <h5 className="card-title">Silver</h5>
          <br />
          <p className="card-text">
            - Akses tak terbatas ke seluruh FitnessFit di Indonesia <br />
            <br />
            - Gratis kelas setiap harinya <br /> <br />- Gratis 1 sesi personal
            training
          </p>
          <br />
          
          <Link to={"/payment"}>
          <button type="button" className="btn btn-danger stp text-white">
            Start
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
