import React, { useContext } from "react";
import axios from "axios";
import { Data } from "../../context/workoutContext";
import "./Form.scss";
import { useAuthContext } from "../../hooks/useAuthContext";

const Form = () => {
  const { user } = useAuthContext();

  const {
    workout,
    setWorkout,
    getWorkout,
    form,
    setForm,
    updateForm,
    setUpdateForm,
  } = useContext(Data);

  const updatedForm = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const createWorkout = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5800/api/workout/create",
        form,
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );

      setWorkout([...workout, response.data]); // Corrected setState usage


      setForm({
        title: "",
        reps: "",
        load: "",
      });

  
      
      getWorkout();
    } catch (error) {
      console.error("Error creating workout:", error);
    }
  };

  const handleUpdateFeild = (e) => {
    const { name, value } = e.target;
    setUpdateForm({
      ...updateForm,
      [name]: value,
    });
  };

  const updatedWorkout = async (e) => {
    e.preventDefault();
    const { _id, title, load, reps } = updateForm;
    try {
      await axios.patch(
        `http://localhost:5800/api/workout/${_id}`,
        { title, reps, load },
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );

      getWorkout();

      setUpdateForm({
        _id: null,
        title: "",
        reps: "",
        load: "",
      }); // Corrected resetting updateForm state

    } catch (error) {
      console.error("Error updating workout:", error);
    }
  };
  

  // useEffect(()=>{
  //   getWorkout()
  // },[getWorkout])

  return (
    <div>
      {/* create form */}
      {!updateForm._id && (
        <div className="form">
          <form onSubmit={createWorkout}>
            <h1>Create record</h1>
            <div className="field">
              <label htmlFor="title">Title:</label>
              <input
                type="text"
                name="title"
                value={form.title}
                onChange={updatedForm}
              />
            </div>

            <div className="field">
              <label htmlFor="reps">Reps:</label>
              <input
                type="number"
                name="reps"
                value={form.reps}
                onChange={updatedForm}
              />
            </div>

            <div className="field">
              <label htmlFor="load">Load:</label>
              <input
                type="text"
                name="load"
                value={form.load}
                onChange={updatedForm}
              />
            </div>

            <button type="submit">Submit</button>
          </form>
        </div>
      )}

      {/* updated form */}

      {updateForm._id && (
        <div className="form">
          <form onSubmit={updatedWorkout}>
            <h1>Edit record</h1>

            <div className="field">
              <label htmlFor="updateTitle">Title:</label>
              <input
                type="text"
                name="title"
                value={updateForm.title}
                onChange={handleUpdateFeild}
              />
            </div>

            <div className="field">
              <label htmlFor="updateReps">Reps:</label>
              <input
                type="number"
                name="reps"
                value={updateForm.reps}
                onChange={handleUpdateFeild}
              />
            </div>

            <div className="field">
              <label htmlFor="updateLoad">Load:</label>
              <input
                type="text"
                name="load"
                value={updateForm.load}
                onChange={handleUpdateFeild}
              />
            </div>

            <button type="submit">Update</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Form;
