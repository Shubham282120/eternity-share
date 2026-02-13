import React from "react";
import { PricingPlans } from "../components/PricingPlan/PricingPlan";

function Pricing() {
  return (
    <>
      {/* PAGE HEADER */}
      <header
        className="page-header"
        data-background="assets/images/page-header01.jpg"
      >
        <div className="container">
          <h1>Pricing Plans</h1>
          <p>View Your Best Plans</p>
        </div>
        <div className="scroll-down"></div>
      </header>
      <PricingPlans />
    </>
  );
}
export default Pricing;
