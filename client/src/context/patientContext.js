import createDataContext from "./createDataContext";
import helpingWheels from "../api/helpingWheels";

const patientReducer = (state, action) => {
  switch (action.type) {
    case "GET_VOLUNTEERS_DATA":
      return { ...state, volunteers: action.payload };
    case "VOLUNTEER_DATA":
      return { ...state, volunteer: action.payload };
    default:
      return state;
  }
};

const getVolunteers = (dispatch) => {
  return async ({ latitude, longitude }) => {
    try {
      const res = await helpingWheels.post("get-volunteer/", {
        patient_latitude: latitude,
        patient_longitude: longitude,
      });
      console.log (res.data.data)
      dispatch({
        type: "GET_VOLUNTEERS_DATA",
        payload: res.data.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
};

const login =(dispatch) => {
  return async({ email, password }) => {
    try {
      const res = await helpingWheels.post("login/", { email, password });
      if (res.status === 200) {
        window.localStorage.setItem("token", res.data.token);
        dispatch({ type: "VOLUNTEER_DATA", payload: res.data.user });
        history.push("/dashboard");
      } else {
        throw new Error("Unable to Login");
      }
    } catch (e) {
      console.log(e);
    }
  }
}

export const { Provider, Context } = createDataContext(
  patientReducer,
  { getVolunteers, login },
  { volunteers: [], volunteer },
  "Patient-Context"
);