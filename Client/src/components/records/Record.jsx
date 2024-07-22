import React, { useEffect, useContext } from "react";
import { Data } from "../../context/workoutContext";
import "./Record.scss";
import refresh from "../../assets/refresh.jpeg";
import del from "../../assets/delete.jpeg";

import {useAuthContext} from "../../hooks/useAuthContext"


const Record = () => {

  const {user}=useAuthContext()
  const { workout, deleteWorkout, getWorkout, togleUpdate } = useContext(Data);

  // get request function//////////////

  useEffect(() => {

    if(user){
    getWorkout();

    }
    
  }, [user,getWorkout]);

  return (
    <div className="records">
      {workout &&
        workout.map((item) => {
          return (
            <div className="record" key={item._id}>
              <h2>  {item.title} </h2>
              <h2> Reps: {item.reps} </h2>
              <h2> Load:{item.load} </h2>
              <div className="btn">
                <img
                  className=" btns"
                  onClick={() => togleUpdate(item)}
                  src={refresh}
                  alt=""
                />

                <img
                  className=" btns"
                  onClick={() => deleteWorkout(item._id)}
                  src={del}
                  alt=""
                />
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Record;
