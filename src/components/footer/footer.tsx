import React from "react";
import "./footer.css";
import {
  faTent,
  faImage,
  faMobile,
  faBeerMugEmpty,
  faArrowRightLong,
  faCloudArrowUp,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = (props: any) => {
  return (
    <div className="footer-container">
      <div className="footer-heading">
        <h2>Dine forhandler ressourcer for Erdinger Dünkelbier</h2>
      </div>
      <div className="footer-items">
        <div className="footer-item">
          <div>
            <FontAwesomeIcon icon={faTent} />
          </div>
          <p>POS bestilling</p>
          <button>
            Gå til <FontAwesomeIcon icon={faArrowRightLong} />
          </button>
        </div>
        <div className="footer-item">
          <div>
            <FontAwesomeIcon icon={faImage} />
          </div>
          <p>Billedepakke</p>
          <button>
            Download <FontAwesomeIcon icon={faCloudArrowUp} />
          </button>
        </div>
        <div className="footer-item">
          <div>
            <FontAwesomeIcon icon={faMobile} />
          </div>
          <p>SOME kampagne</p>
          <button>
            Download <FontAwesomeIcon icon={faCloudArrowUp} />
          </button>
        </div>
        <div className="footer-item">
          <div>
            <FontAwesomeIcon icon={faBeerMugEmpty} />
          </div>
          <p>Mere Øl</p>
          <button>
            Gå til <FontAwesomeIcon icon={faArrowRightLong} />
          </button>
        </div>
      </div>
    </div>
  );
};

export { Footer };
