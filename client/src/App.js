import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Landing from "./components/Landing/index";
import PatientScreen from "./components/Patient/PatientScreen";
import VolunteerLogin from "./components/VolunteerLogin/index";
import VolunteerRegister from "./components/RegisterVolunteer/index";
import Dashboard from "./components/Dashboard/Dashboard";
import PatientDetail from "./components/PatientDetails/index";
import * as PusherPushNotifications from "@pusher/push-notifications-web";

function App() {
  useEffect(() => {
    const beamsClient = new PusherPushNotifications.Client({
      instanceId: "8d0baa0c-08b4-43ce-9134-e9fe4b14ec6a",
    });

    const func = async () => {
      beamsClient.start().then((beamsClient) => beamsClient.getDeviceId());
      const userId = await beamsClient.getUserId();
      console.log(userId);
    };

    func();
  }, []);

  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/patient-detail" exact component={PatientDetail} />
        <Route path="/patient" exact component={PatientScreen} />
        <Route path="/register" exact component={VolunteerRegister} />
        <Route path="/login" exact component={VolunteerLogin} />
        <Route path="/dashboard" exact component={Dashboard} />
      </Switch>
    </Router>
  );
}

export default App;
