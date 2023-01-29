import {
  faBullhorn,
  faArrowRightLong,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./campaigns.css";

const Campaigns = (props: any) => {
  return (
    <div className="campaign-container">
      <div className="content-heading">
        <h2>
          <FontAwesomeIcon icon={faBullhorn} />
          Kampagner
        </h2>
      </div>
      <ul>
        <li className="campaign-entry">
          <p className="campaign-badge">August 2022 - september 2022</p>
          <p className="campaign-title">Ølsmaging meetup i Tilst</p>
          <button className="campaign-button">
            Gå til kampagne <FontAwesomeIcon icon={faArrowRightLong} />
          </button>
        </li>
        <li className="campaign-entry">
          <p className="campaign-badge">August 2022 - september 2022</p>
          <p className="campaign-title">Ølsmaging meetup i Tilst</p>
          <button className="campaign-button">
            Gå til kampagne <FontAwesomeIcon icon={faArrowRightLong} />
          </button>
        </li>
        <li className="campaign-entry">
          <p className="campaign-badge">August 2022 - september 2022</p>
          <p className="campaign-title">Ølsmaging meetup i Tilst</p>
          <button className="campaign-button">
            Gå til kampagne <FontAwesomeIcon icon={faArrowRightLong} />
          </button>
        </li>
      </ul>
    </div>
  );
};

export { Campaigns };
