import React, { useState } from "react";

function Help({ title, text }) {
  const [activo, setActivo] = useState(true);

  return (
    <>
      {!activo && (
        <div className="card container my-2 d-flex justify-content-center align-items-center">
          <button className="btn" onClick={() => setActivo(true)}>
            <div className="card-title">Help</div>
          </button>
          <p>
            If you have any questions, or need telephone assistance, please open
            up the chat on the top left corner and we will assist you as soon as
            possible. Here are some common questions: Q:How many numbers comes
            with the plan? A:We give up to 10 numbers in most cases. There are a
            few institutions where we have to give less numbers because they are
            hard to get. Q:How fast is your Messages service? A:Messages from
            prison have a delay we cannot control, it is about 1.5 hours each
            way. Once we get the message, we send it to you in minutes. Q:How
            many pictures do you print per package? A:Usually 25 pictures per
            package. If you pay less than 25 pictures we will print only the
            ones you pay upon request via chat. Otherwise we will wait to get a
            total of 25 to print and mail them. Q:What do I have to do after
            payment? A:Usually nothing. We do everything with the inmate. We
            communicate with them via corrlinks to send them instructions on how
            to use the services. Everything is up and running as soon as the
            inmate follows the steps we provide. Q:Can I get a refund? A:Sure!
            We're not here to take anyone's money without providing a quality
            service. You might get charged just for what you used up to the
            moment of refund request. If you paid for a special plan, it will be
            prorated at regular price. Always talk to us on the chat if you need
            a refund.
          </p>
        </div>
      )}{" "}
      {activo && (
        <div style={{width:"80px"}}  className="card mx-2 container my-2  d-flex justify-content-center align-items-center">
          <button className="btn" onClick={() => setActivo(false)}>Help</button>
        </div>
      )}
    </>
  );
}

export default Help;
