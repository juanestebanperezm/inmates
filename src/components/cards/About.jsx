import React, { useState } from "react";

function About() {
  const [activos, setActivos] = useState(true);

  return (
    <>
      <div>
        {!activos && (
          <div  className="card container my-2  d-flex justify-content-center align-items-center">
            <button className="btn" onClick={() => setActivos(true)}>About</button>
            <p>
              VIPInmates.com is a service created for those who appreciate a
              quality customer service. We are focused on providing the best
              experience for your loved one to make time a bit easier for them.
              The services we provide uses custom made applications to deliver
              messages as fast as possible. Our Phone provider is one of the
              biggest companies in United States and we use top quality routes
              to complete their phone calls to you and others. For Pictures we
              use a company that has excellent printing quality. For Sports we
              get the data from the best websites around. We know first hand
              what they and you are going though and we're here to help stay in
              touch.
            </p>
          </div>
        )}
        {activos && (
          <div style={{width:"80px"}} className="card mx-2 container my-2  d-flex justify-content-center align-items-center">
            <button className="btn" onClick={() => setActivos(false)}>
              About
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default About;
