import createDataContext from "./createDataContext";
import helpingWheels from "../api/helpingWheels";

const patientReducer = (state, action) => {
  switch (action.type) {
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
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };
};

export const { Provider, Context } = createDataContext(
  patientReducer,
  { getVolunteers },
  { voulenteers: null },
  "Patient-Context"
);
