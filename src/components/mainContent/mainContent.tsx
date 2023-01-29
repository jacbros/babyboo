import React from "react";
import { Campaigns } from "../campaigns/campaigns";
import { Favorites } from "../favorites/favorites";
import { Footer } from "../footer/footer";
import { LatestOrders } from "../latestOrders/latestOrders";
import { OrderList } from "../orderList/orderList";
import "./mainContent.css";

const MainContent = (props: any) => {
  return (
    <div className="main-content">
      <div className="welcome">
        <h1>Velkommen Joe Schmoe</h1>
      </div>
      <div className="main-content-center">
        <OrderList></OrderList>
        <LatestOrders></LatestOrders>
        <Favorites></Favorites>
      </div>
      <Campaigns></Campaigns>
      <div className="footer-wrapper">
        <Footer></Footer>
      </div>
    </div>
  );
};

export { MainContent };
