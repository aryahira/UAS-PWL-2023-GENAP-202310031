import React from "react";

export default function Error() {
  return (
    <div className="container">
        <div className="m-auto p-5 w-50 mt-10">
          <br />
            <img style={{ marginTop : '10rem' }} 
            src={require("../../../../assets/media/404.png")} 
            alt="error" className="w-100 mb-10" />
            <p className="text-primary text-center fw-bolder fs-2">
              Seems there is nothing here
            </p>
        </div>
      
    </div>
  );
}