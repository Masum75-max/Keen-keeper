
'use client'
import { useContext } from "react";
import Count from "./Count";
import Dash from "./Dash";
import Friend from "./Friend";
import { LengthOfTotal } from "../layout";

const Homepage = () => {


const { friends }  =  useContext(LengthOfTotal);

    return (
        <div className="w-10/12 mx-auto">
          <Dash></Dash>
          <Count></Count>

          <h1 className="text-2xl font-bold my-10">Total Friends</h1>

          <div className="grid grid-cols-1 gap-2  md:grid-cols-3 lg:grid-cols-4">
            {
            friends.map(friend=><Friend key={friend.id} friend={friend}></Friend>)
          }
          
          </div>
        </div>
    );
};

export default Homepage;