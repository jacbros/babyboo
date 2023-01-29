import {
  faBeerMugEmpty,
  faCloudArrowDown,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./favorites.css";
import React from "react";

const Favorites = (props: any) => {
  return (
    <div className="content-container favorites">
      <div className="content-heading">
        <h2>
          <FontAwesomeIcon icon={faHeart} />
          Favoritprodukter
        </h2>
        <a href="#">Redigér</a>
      </div>
      <table>
        <tr className="favorite-entry">
          <td>
            <FontAwesomeIcon icon={faBeerMugEmpty} />
          </td>
          <td>Erdinger Dünkelbier</td>
          <td className="favorite-button">
            <button>
              <FontAwesomeIcon icon={faCloudArrowDown} />
            </button>
          </td>
        </tr>
        <tr className="favorite-entry">
          <td>
            <FontAwesomeIcon icon={faBeerMugEmpty} />
          </td>
          <td>Erdinger Dünkelbier</td>
          <td className="favorite-button">
            <button>
              <FontAwesomeIcon icon={faCloudArrowDown} />
            </button>
          </td>
        </tr>
      </table>
    </div>
  );
};
export { Favorites };
