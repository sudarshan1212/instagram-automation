import { Button } from "@/components/ui/button";
import React from "react";
import Loader from "../loader";

type Props = {};

const ActivateAutomationButton = (props: Props) => {
  return (
    <Button className="lg:px-10 bg-gradient-to-br hover:opacity-80 text-white rounded-full from-[#3352CC] font-medium to-[#1C2D70] mx-2">
      {/* WIP Set the loading state */}
      <Loader state={false}>
        <p className="lg:inline hidden">Activate</p>
      </Loader>
    </Button>
  );
};

export default ActivateAutomationButton;
