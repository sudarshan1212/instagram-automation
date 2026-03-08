import React from "react";
import PayementCard from "./payment-card";

type Props = {};

const Billing = (props: Props) => {
  return (
    <div className="flex lg:flex-row flex-col gap-5 w-full lg:w-10/12 xl:w-8/12 container">
      <PayementCard current={"FREE"} label="PRO" />

      <PayementCard current={"PRO"} label="FREE" />
    </div>
  );
};

export default Billing;
