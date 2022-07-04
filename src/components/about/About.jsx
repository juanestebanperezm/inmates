import React from "react";

function About() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12">
          <div className="row">
            <div className="col-md-12">
              <img
                alt="Bootstrap Image Preview"
                src="https://www.layoutit.com/img/sports-q-c-140-140-3.jpg"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="jumbotron">
                <h2>Hello, world!</h2>
                <p>
                  This is a template for a simple marketing or informational
                  website. It includes a large callout called the hero unit and
                  three supporting pieces of content. Use it as a starting point
                  to create something more unique.
                </p>
                <p>
                  <a className="btn btn-primary btn-large" href="#">
                    Learn more
                  </a>
                </p>
                <p>
                  <a className="btn btn-primary btn-large" href="#">
                    Learn more
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
