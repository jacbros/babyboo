import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./latestOrders.css";
import { faFolderOpen } from "@fortawesome/free-solid-svg-icons";

const LatestOrders = (props: any) => {
  return (
    <div className="latest-container">
      <div className="content-heading">
        <h2>
          <FontAwesomeIcon icon={faFolderOpen} />
          Seneste ordrer
        </h2>
        <a href="#">Se alle</a>
      </div>
      <table className="latest-order-table">
        <tr>
          <td>02-02-2022</td>
          <td>#4134534</td>
          <td>
            <a href="#">Se ordre</a>
          </td>
          <td>
            <a href="#">Genbestil</a>
          </td>
        </tr>
        <tr>
          <td>02-02-2022</td>
          <td>#4134534</td>
          <td>
            <a href="#">Se ordre</a>
          </td>
          <td>
            <a href="#">Genbestil</a>
          </td>
        </tr>
        <tr>
          <td>02-02-2022</td>
          <td>#4134534</td>
          <td>
            <a href="#">Se ordre</a>
          </td>
          <td>
            <a href="#">Genbestil</a>
          </td>
        </tr>
        <tr>
          <td>02-02-2022</td>
          <td>#4134534</td>
          <td>
            <a href="#">Se ordre</a>
          </td>
          <td>
            <a href="#">Genbestil</a>
          </td>
        </tr>
        <tr>
          <td>02-02-2022</td>
          <td>#4134534</td>
          <td>
            <a href="#">Se ordre</a>
          </td>
          <td>
            <a href="#">Genbestil</a>
          </td>
        </tr>
        <tr>
          <td>02-02-2022</td>
          <td>#4134534</td>
          <td>
            <a href="#">Se ordre</a>
          </td>
          <td>
            <a href="#">Genbestil</a>
          </td>
        </tr>
        <tr>
          <td>02-02-2022</td>
          <td>#4134534</td>
          <td>
            <a href="#">Se ordre</a>
          </td>
          <td>
            <a href="#">Genbestil</a>
          </td>
        </tr>
        <tr>
          <td>02-02-2022</td>
          <td>#4134534</td>
          <td>
            <a href="#">Se ordre</a>
          </td>
          <td>
            <a href="#">Genbestil</a>
          </td>
        </tr>
      </table>
    </div>
  );
};

export { LatestOrders };
