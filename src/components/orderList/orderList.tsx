import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckToSlot,
  faBeerMugEmpty,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import "./orderList.css";

const OrderList = (props: any) => {
  const [beers, setBeers] = useState<any[]>([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://api.punkapi.com/v2/beers?per_page=6")
      .then((res) => {
        if (!res.ok) {
          throw new Error(res.statusText);
        }
        return res.json();
      })
      .then((data) => setBeers(data))
      .catch((err) => setError(err.message));
  }, []);

  return (
    <div className="content-container orderlist-container">
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
        {error && <p>An error occurred: {error}</p>}
        {beers.map((beer) => (
          <tr>
            <td>
              <FontAwesomeIcon icon={faBeerMugEmpty} />
            </td>
            <td key={beer.id}>{beer.name}</td>
            <td>1 Stk</td>
            <td>-12%</td>
            <td>69,99 DKK</td>
          </tr>
        ))}
      </table>
      <button>
        Vis alle <FontAwesomeIcon icon={faChevronDown} />
      </button>
    </div>
  );
};

export { OrderList };
