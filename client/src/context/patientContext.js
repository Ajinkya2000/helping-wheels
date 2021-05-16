import createDataContext from "./createDataContext";
import helpingWheels from "../api/helpingWheels";

const patientReducer = (state, action) => {
  switch (action.type) {
    case "GET_VOLUNTEERS_DATA":
      return { ...state, volunteers: action.payload };
    case "VOLUNTEER_DATA":
      return { ...state, volunteer: action.payload };
    case "SEND_EMAIL":
      return { ...state, emailSent: true };
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
      console.log(res.data.data);
      dispatch({
        type: "GET_VOLUNTEERS_DATA",
        payload: res.data.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
};

const login = (dispatch) => {
  return async ({ email, password }, redirect) => {
    try {
      const res = await helpingWheels.post("login/", { email, password });
      if (res.status === 200) {
        window.localStorage.setItem("token", res.data.token);
        console.log(res.data.user);
        dispatch({ type: "VOLUNTEER_DATA", payload: res.data.user });
        redirect();
      } else {
        throw new Error("Unable to Login");
      }
    } catch (e) {
      console.log(e);
    }
  };
};

const sendEmail = (dispatch) => {
  return async (volunteer_list, patient_data) => {
    try {
      const res = await helpingWheels.post("mail-volunteer/", {
        volunteer_list,
        patient_data,
      });
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };
};

export const { Provider, Context } = createDataContext(
  patientReducer,
  { getVolunteers, login, sendEmail },
  { volunteers: [], volunteer: {}, emailSent: false },
  "Patient-Context"
);
