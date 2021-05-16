import createDataContext from "./createDataContext";
import helpingWheels from "../api/helpingWheels";

const patientReducer = (state, action) => {
  switch (action.type) {
    case "GET_VOLUNTEER_DATA":
      return { ...state, volunteers: action.payload };
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
        type: "GET_VOLUNTEER_DATA",
        payload: res.data.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
};

export const { Provider, Context } = createDataContext(
  patientReducer,
  { getVolunteers },
  { volunteers: [] },
  "Patient-Context"
);