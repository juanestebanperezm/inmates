import React from "react";
import PropTypes from "prop-types";

// Styles
import "./pruebaStyles.css";
function Prueba({
  title,
  texto,
  img,
  state,
  onClickFunction,
  option1,
  option2,
  option3,
  option4,
  option5,
  option6,
  option7,
  option8,
  option9,
  option10,
  value1,
  value2,
  value3,
  value4,
  value5,
  value6,
  value7,
  value8,
  value9,
  value10,
  selecTitle,
}) {
  return (
    <div className="col-md-3 my-2 mx-1 d-flex justify-content-center align-items-center">
      <div className="card  " style={{ width: "18rem" }}>
        {!state && (
          <div class="card-body">
            <h2 className="card-title">{title}</h2>
            <p class="card-text">{texto}</p>
            <form
              action="https://www.paypal.com/cgi-bin/webscr"
              method="post"
              target="_top"
            >
              <input type="hidden" name="cmd" value="_s-xclick" />
              <input
                type="hidden"
                name="hosted_button_id"
                value="9DBPLLPKHHDH6"
              />
              <table>
                <tr>
                  <td>
                    <input type="hidden" name="on0" value={selecTitle} />
                    {selecTitle}
                  </td>
                </tr>
                <tr>
                  <td>
                    <select name="os0" className="form-control">
                      {option1 && <option value={value1}>{option1}</option>}
                      {option2 && <option value={value2}>{option2}</option>}
                      {option3 && <option value={value3}>{option3}</option>}
                      {option4 && <option value={value4}>{option4}</option>}
                      {option5 && <option value={value5}>{option5}</option>}
                      {option6 && <option value={value6}>{option6}</option>}
                      {option7 && <option value={value7}>{option7}</option>}
                      {option8 && <option value={value8}>{option8}</option>}
                      {option9 && <option value={value9}>{option9}</option>}
                      {option10 && <option value={value10}>{option10}</option>}
                    </select>{" "}
                  </td>
                </tr>
                <tr>
                  <td>
                    <input
                      type="hidden"
                      name="on1"
                      value="INMATE'S NAME AND I.D. NUMBER"
                    />
                    INMATE'S NAME AND I.D. NUMBER
                  </td>
                </tr>
                <tr>
                  <td>
                    <input
                      type="text"
                      name="os1"
                      maxLength="200"
                      className="form-control"
                    />
                  </td>
                </tr>
              </table>
              <input type="hidden" name="currency_code" value="USD" />
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
            <button onClick={onClickFunction} className="btn">
              {img && (
                <img
                  src={img}
                  alt={title}
                  className="img-card"
                  width="70px"
                  height="70px"
                />
              )}
            </button>
          </div>
        )}
        {state && (
          <div class="card-body">
            <h2 className="card-title">{title}</h2>
            <button onClick={onClickFunction} className="btn">
              {img && (
                <img
                  src={img}
                  alt={title}
                  className="img-card"
                  width="70px"
                  height="70px"
                />
              )}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Prueba;

Prueba.propTypes = {
  title: PropTypes.string,
  texto: PropTypes.string,
  img: PropTypes.string,
  state: PropTypes.bool,
  onClickFunction: PropTypes.func,
};
