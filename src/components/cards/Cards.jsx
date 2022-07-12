import React, { useState } from "react";

import r1 from "../../assets/r1.png";
import r2 from "../../assets/r2.png";
import r4 from "../../assets/r4.png";
import r5 from "../../assets/r5.png";
import r6 from "../../assets/r6.png";
import r7 from "../../assets/r7.png";

import "../cards/cards.css";

//COMPONENTES
import Footer from "../footer/Footer";
import Prueba from "./Prueba";
import Help from "./Help";
import About from "./About";

function Cards() {
  const [isFlipped1, setIsFlipped1] = useState(true);
  const [isFlipped2, setIsFlipped2] = useState(true);
  const [isFlipped3, setIsFlipped3] = useState(true);
  const [isFlipped4, setIsFlipped4] = useState(true);
  const [isFlipped5, setIsFlipped5] = useState(true);
  const [isFlipped6, setIsFlipped6] = useState(true);
  const [isFlipped7, setIsFlipped7] = useState(true);
  const onClickFunction = () => {
    !isFlipped1 ? setIsFlipped1(true) : setIsFlipped1(false);
  };

  const onClickFunction2 = () => {
    !isFlipped2 ? setIsFlipped2(true) : setIsFlipped2(false);
  };

  const onClickFunction3 = () => {
    !isFlipped3 ? setIsFlipped3(true) : setIsFlipped3(false);
  };
  const onClickFunction4 = () => {
    !isFlipped4 ? setIsFlipped4(true) : setIsFlipped4(false);
  };
  const onClickFunction5 = () => {
    !isFlipped5 ? setIsFlipped5(true) : setIsFlipped5(false);
  };
  const onClickFunction6 = () => {
    !isFlipped6 ? setIsFlipped6(true) : setIsFlipped6(false);
  };

  const onClickFunction7 = () => {
    !isFlipped7 ? setIsFlipped7(true) : setIsFlipped7(false);
  };

  return (
    <div className="">
      <section className="container-cards  d-flex flex-wrap justify-content-center align-items-center">
        <Prueba
          title="Local Messages"
          texto="We provide numbers that are near the institution where you loved one is located. The call rate drops from $0.21 to $0.06 per minute(For federal prisons, state and county rates may be different). That is how much your loved one will pay from the prison phone. With your payment, you purchase a package of up to 10 local numbers and minutes."
          img={r1}
          state={isFlipped1}
          onClickFunction={onClickFunction}
          value1="300min 1 month (U.S/P.R.)"
          option="300min 1 month (U.S/P.R.) $10.00 USD"
          value2="500min 1 month (U.S/P.R.)"
          option2="500min 1 month (U.S/P.R.) $15.00 USD"
          value3="1000min 2 months (U.S/P.R.)"
          option3="1000min 2 months (U.S/P.R.) $25.00 USD"
          value4="2000min  6 months (U.S/P.R.)"
          option4="2000min  6 months (U.S/P.R.) $50.00 USD"
          value5="4000min 1 year (U.S/P.R.)"
          option5="4000min 1 year (U.S/P.R.) $90.00 USD"
          value6="6000min 1 year (U.S/P.R.)"
          option6="6000min 1 year (U.S/P.R.) $120.00 USD"
          value7="300min 1 month (U.S. MEX & COL)"
          option7="300min 1 month (U.S. MEX & COL) $20.00 USD"
          value8="500min 1 month (U.S. MEX & COL)"
          option8="500min 1 month (U.S. MEX & COL) $30.00 USD"
          value9="1000min 2 month (U.S. MEX & COL)"
          option9="1000min 2 month (U.S. MEX & COL) $55.00 USD"
          value10="4000min 1 year (U.S. MEX & COL)"
          option10="4000min 1 year (U.S. MEX & COL) $200.00 USD"
          selecTitle="SELECT YOUR  PLAN"
        />

        <Prueba
          title="Inmate Messages"
          texto="With this service you are able to send and receive messages from your loved one without having to login at corrlinks.com. Your loved one will get a telephone number assigned to his/her account so anyone can send messages into that number. It is the most popular way to stay in touch with your loved one."
          img={r2}
          state={isFlipped2}
          onClickFunction={onClickFunction2}
          value1="1 month (U.S and P.R.)"
          option1="1 month (U.S and P.R.) $20.00 USD"
          value2="3 months (U.S. and P.R.)"
          option2="3 months (U.S. and P.R.) $50.00 USD"
          value3="6 months (U.S. and P.R.)"
          option3="6 months (U.S. and P.R.) $90.00 USD"
          value4="1 year (U.S. and P.R.)"
          option4="1 year (U.S. and P.R.) $150.00 USD"
          selecTitle="SELECT YOUR  PLAN"
        />

        <Prueba
          title="Pictures"
          texto="our services you will be able to upload , text or email pictures so we can print and mail them to your loved one. We process pictures every time we collect 25 and as long as he has picture credits."
          img={r4}
          state={isFlipped3}
          onClickFunction={onClickFunction3}
          value1="5 Pictures"
          option1="5 Pictures $5.00 USD"
          value2="10 Pictures"
          option2="10 Pictures $8.00 USD"
          value3="20 Pictures"
          option3="20 Pictures $13.00 USD"
          value4="25 Pictures"
          option4="25 Pictures $15.00 USD"
          value5="50 Pictures"
          option5="50 Pictures $27.00 USD"
          value6="100 Pictures"
          option6="100 Pictures $50.00 USD"
          selecTitle="SELECT QUANTITY"
        />

        <Prueba
          title="Sports Service"
          texto="We provide sports information such as scores, lines, computer picks, expert picks and more to keep your loved one updated with the latest information on all major sports. Our software sends several messages a day with updates."
          img={r5}
          state={isFlipped4}
          onClickFunction={onClickFunction4}
          value1="1 month VIP Access"
          option1="1 month VIP Access $15.00 USD"
          value2="6 months VIP Access"
          option2="6 months VIP Access $70.00 USD"
          value3="1 year VIP Access"
          option3="1 year VIP Access $120.00 USD"
          value4="Football(Season )"
          option4="Football(Season ) $50.00 USD"
          value5="Basketball(Season)"
          option5="Basketball(Season) $50.00 USD"
          value6="Baseball(Season)"
          option6="Baseball(Season) $50.00 USD"
          value7="VIP Lines and Scores(1 Year)"
          option7="VIP Lines and Scores(1 Year) $25.00 USD"
          value8="VIP Computer Picks(1 Year)"
          option8="VIP Computer Picks(1 Year) $30.00 USD"
          value9="VIP Expert Picks(1 Year)"
          option9="VIP Expert Picks(1 Year) $30.00 USD"
          value10="NFL Box Scores(Season)"
          option10="NFL Box Scores(Season) $25.00 USD"
        />

        <Prueba
          title="Phone + Text Combo"
          texto="Get a discount for having both services. Local Numbers and Inmate Messages in one package."
          img={r6}
          state={isFlipped5}
          onClickFunction={onClickFunction5}
          value1="300min(U.S./P.R.) + 1m mgs"
          option1="300min(U.S./P.R.) + 1m mgs $25.00 USD"
          value2="500min(U.S./ P.R.) + 1m mgs"
          option2="500min(U.S./ P.R.) + 1m mgs $30.00 USD"
          value3="1000min(U.S./ P.R.) + 2m mgs"
          option3="1000min(U.S./ P.R.) + 2m mgs $55.00 USD"
          value4="4000min(U.S./P.R.) + 1y mgs"
          option4="4000min(U.S./P.R.) + 1y mgs $210.00 USD"
          selecTitle="SELECT YOUR PLAN"
        />

        <Prueba
          title="Messages + Pics Combo"
          texto="Get a discount for having both services. Inmate Messages and Picture packages in one place."
          img={r7}
          state={isFlipped6}
          onClickFunction={onClickFunction6}
          value1="1 month Messages + 25 Pictures"
          option1="1 month Messages + 25 Pictures $30.00 USD"
          value2="3 months Messages + 50 Pictures"
          option2="3 months Messages + 50 Pictures $70.00 USD"
          value3="6 months Messages + 100 Pictures"
          option3="6 months Messages + 100 Pictures $130.00 USD"
          value4="1 year Messages + 200 Pictures"
          option4="1 year Messages + 200 Pictures $250.00 USD"
          selecTitle="SELECT YOUR PLAN"
        />
      </section>

      <div className="contenedor--payment d-flex justify-content-center align-items-center my-3">
        {!isFlipped7 && (
          <div className=" card d-flex justify-content-center align-items-center flex-column ">
            <button
              className="btn fs-5 mt-2 fw-semibold"
              onClick={() => setIsFlipped7(true)}
            >
              Special Payment
            </button>
            <form
              action="https://www.paypal.com/cgi-bin/webscr"
              method="post"
              target="_top"
              className=" d-flex flex-column justify-content-center align-items-center my-3"
            >
              <input type="hidden" name="cmd" value="_s-xclick" />
              <input
                type="hidden"
                name="hosted_button_id"
                value="WS6PBPRKMFGLQ"
              />
              <table>
                <tr>
                  <td>
                    <input
                      type="hidden"
                      name="on0"
                      value="INMATE'S NAME AND I.D. NUMBER"
                    />
                    INMATE'S NAME AND I.D. NUMBER
                    <br />
                    IS OPTION IS ONLY TO BE USED IF YOU WANT TO PAY A DIFFERENT
                    AMOUNT THAN THE ONES DISPLAYED ON THE OTHER PAYMENT MENUES.
                  </td>
                </tr>
                <tr>
                  <td>
                    <input
                      type="text"
                      name="os0"
                      maxLength="200"
                      className="form-control"
                    />
                  </td>
                </tr>
              </table>
              <input
                type="image"
                src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif"
                border="0"
                name="submit"
                alt="PayPal - The safer, easier way to pay online!"
              />
              <img
                alt=""
                border="0"
                src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif"
                width="1"
                height="1"
              />
            </form>
          </div>
        )}
        {isFlipped7 && (
          <button
            className="btn-special-payment"
            onClick={() => setIsFlipped7(false)}
          >
            Special Payment
          </button>
        )}
      </div>

      <div className="container d-flex  flex-row justify-content-center align-items-center">
        <div className="d-flex flex-row my-2 justify-content-center align-items-center" >
          <Help />
          <About />
        </div>
        
      </div>

      <Footer />
    </div>
  );
}

export default Cards;
