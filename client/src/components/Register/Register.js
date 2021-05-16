import React, { useState } from "react";
import axios from "axios";
import * as PusherPushNotifications from "@pusher/push-notifications-web";

const Register = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [vehicle, setVehicle_name] = useState("");
  const [vehicle_number, setVehicle_num] = useState(null);
  const [address, setAddress] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post("http://127.0.0.1:8000/api/register/", {
      name,
      phone,
      email,
      password,
      vehicle,
      vehicle_number,
      address,
      latitude: 34.384,
      longitude: 66.541,
    });

    localStorage.setItem("token", res.data.token);

    const tokenProvider = new PusherPushNotifications.TokenProvider({
      url: "http://127.0.0.1:8000/api/pusher/",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });

    const beamsClient = new PusherPushNotifications.Client({
      instanceId: "8d0baa0c-08b4-43ce-9134-e9fe4b14ec6a",
    });

    beamsClient
      .start()
      .then((beamsClient) => beamsClient.setUserId(`${res.data.user.id}`, tokenProvider))
      .catch(console.error);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Mobile Number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        type="text"
        placeholder="Vehicle Name"
        value={vehicle}
        onChange={(e) => setVehicle_name(e.target.value)}
      />
      <input
        type="text"
        placeholder="Vehicle Number"
        value={vehicle_number}
        onChange={(e) => setVehicle_num(e.target.value)}
      />
      <input
        type="address"
        placeholder="Address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
};
export default Register;
