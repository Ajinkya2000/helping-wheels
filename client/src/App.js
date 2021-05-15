import React, { useEffect } from "react";
import logo from "./logo.svg";
import * as PusherPushNotifications from "@pusher/push-notifications-web";
import "./App.css";

function App() {
  useEffect(() => {
    const beamsClient = new PusherPushNotifications.Client({
      instanceId: "8d0baa0c-08b4-43ce-9134-e9fe4b14ec6a",
    });

    beamsClient
      .start()
      .then(() => beamsClient.addDeviceInterest("hello"))
      .then(() => console.log("Successfully registered and subscribed!"))
      .catch(console.error);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
