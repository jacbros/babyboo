import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckToSlot,
  faBeerMugEmpty,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import "./orderList.css";

const OrderList = (props: any) => {
  return (
    <div className="content-container">
      <div className="content-heading">
        <h2>
          <FontAwesomeIcon icon={faCheckToSlot} />
          Bestillingsliste
        </h2>
        <a href="#">Gå til bestillingsliste</a>
      </div>
      <div className="order-total">
        <p>12 Produkter</p>
        <p>Total: 598,95 DKK</p>
      </div>
      <table>
        <tr>
          <td>
            <FontAwesomeIcon icon={faBeerMugEmpty} />
          </td>
          <td>Erdinger Dünkelbier</td>
          <td>1 Stk</td>
          <td>-12%</td>
          <td>69,99 DKK</td>
        </tr>
      </table>
      <button>
        Vis alle <FontAwesomeIcon icon={faChevronDown} />
      </button>
    </div>
  );
};

export { OrderList };
