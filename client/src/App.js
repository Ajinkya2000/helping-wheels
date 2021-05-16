import React, { useEffect } from "react";
import "./App.css";
import Register from "./components/Register/Register";
// import PatientScreen from './components/PatientScreen';
import * as PusherPushNotifications from "@pusher/push-notifications-web";

function App() {
  useEffect(() => {
    const beamsClient = new PusherPushNotifications.Client({
      instanceId: "8d0baa0c-08b4-43ce-9134-e9fe4b14ec6a",
    });

    const func = async () => {
      beamsClient.start().then((beamsClient) => beamsClient.getDeviceId())
      const userId = await beamsClient.getUserId();
      console.log(userId)
      // .getUserId().then((userId) => console.log(userId));

    }
    func();


    // beamsClient
    //   .start()
    //   .then((beamsClient) => beamsClient.getDeviceId())
    //   .then((deviceId) =>
    //     console.log("Successfully registered with Beams. Device ID:", deviceId)
    //   )
    //   .catch(console.error);
  }, []);

  return (
    <div className="App">
      {/*<PatientScreen />*/}
      <Register />
    </div>
  );
}

export default App;
