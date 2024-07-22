// import React from 'react'
import { createContext, useState } from "react";
import axios from "axios";

export const Data = createContext();
import { useAuthContext } from "../hooks/useAuthContext";

const workoutContext = ({ children }) => {
  
  const { user } = useAuthContext();

  // get request state////////////

  const [workout, setWorkout] = useState(null);

  //   Get request function////////

  const getWorkout = async () => {
    const response = await axios.get("http://localhost:5800/api/workout", {
      headers: {
       " Authorization": `Bearer ${user.token}`,
      },
    });

    const data = response.data;
    console.log(data);

    
    setWorkout(data);

  };

  /// ////////post request state//////

  const [form, setForm] = useState({
    title: "",
    reps: "",
    load: "",
  });

  //  delete request//////////////
  const deleteWorkout = async (_id) => {

    if(user){
        await axios.delete(
      `http://localhost:5800/api/workout/${_id}`,

      {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      }
    );
    getWorkout();
  };

    }
  

  // Updte request/////////
  const [updateForm, setUpdateForm] = useState({
    _id: null,
    title: "",
    reps: "",
    load: "",
  });

  const togleUpdate = (item) => {
    setUpdateForm({
      _id: item._id,
      title: item.title,
      reps: item.reps,
      load: item.load,
    });
  };

  return (
    <>
      <Data.Provider
        value={{
          workout,
          deleteWorkout,
          setWorkout,
          form,
          setForm,
          getWorkout,
          togleUpdate,
          updateForm,
          setUpdateForm,
        }}
      >
        {children}
      </Data.Provider>
    </>
  );
};

export default workoutContext;
