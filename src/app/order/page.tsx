"use client";

import { useState } from "react";
import Link from "next/link";

// components
import Done from "@/src/component/Done";
import Progress from "@/src/component/Progress";
import Ready from "@/src/component/Ready";
import Received from "@/src/component/Recieved";

const OrderPage = () => {
  const [display, setDisplay] = useState("");
  return (
    <div className="max-w-6xl mx-auto">
      <Link href="/" className="flex py-4 font-medium bg-amber-300">
        Orders-Status
      </Link>
      <div className="flex justify-between bg-green-300">
        <div className="flex  px-4 py-4 font-medium gap-4">
          <p onClick={() => setDisplay("received")} className="border-b-4 px-4">
            Received
          </p>
          <p onClick={() => setDisplay("progress")} className="border-b-4 px-4">
            In Progress
          </p>
          <p onClick={() => setDisplay("ready")} className="border-b-4 px-4">
            Ready for Pick-Up
          </p>
          <p onClick={() => setDisplay("done")} className="border-b-4 px-4">
            Done
          </p>
        </div>
        <div className="flex px-4 py-2">
          <input
            className="p-2 w-full border text-sm font-light"
            placeholder="Search for a customer"
          />
        </div>
      </div>
      <div className="h-[100vh]">
        {display === "received" && <Received />}
        {display === "progress" && <Progress />}
        {display === "ready" && <Ready />}
        {display === "done" && <Done />}
      </div>
    </div>
  );
};

export default OrderPage;
