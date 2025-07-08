import { useState } from 'react'
import "./App.css";
import "bootswatch/dist/vapor/bootstrap.min.css";
import useStore from "./store/useStore";
import { randomUserAPI } from "./data";
const users = randomUserAPI.results;
// Main App component
export default function App() {
  const { users, updateUser, updateAddress } = useStore();
  const [selectedUserId, setSelectedUserId] = useState(0);
  const [firstName, setFirstName] = useState(users[selectedUserId].name.first);
  const [lastName, setLastName] = useState(users[selectedUserId].name.last);
  const [age, setAge] = useState(users[selectedUserId].age);
  const [street, setStreet] = useState(users[selectedUserId].location.street.name);
  const [city, setCity] = useState(users[selectedUserId].location.city);
  const [streetNumber, setStreetNumber] = useState(users[selectedUserId].location.street.number);
  const handleUserUpdate = (e) => {
    e.preventDefault();
    console.log( firstName, lastName, age );
    updateUser(selectedUserId, { name: { first: firstName, last: lastName }, age: Number(age) });
  };

  const handleAddressUpdate = (e) => {
    e.preventDefault();
    console.log( street, streetNumber, city );
    updateAddress(selectedUserId, { street: { name: street, number: streetNumber }, city });
  };

  return (
    <div
      className="mini"
      style={{ padding: "1rem", fontFamily: "sans-serif" }}>
      <h2>Select User</h2>
      <select
        className="form-select"
        value={selectedUserId}
        onChange={(e) => {
          const index = e.target.value;
          setSelectedUserId(index);
          setFirstName(users[index].name.first);
          setLastName(users[index].name.last);
          setAge(users[index].dob.age || "");
          setStreet(users[index].location.street.name);
          setCity(users[index].location.city);
          setStreetNumber(users[index].location.street.number);
        }}
      >
        {users.map((user, index) => (
          <option key={"user" + index} value={index}>
            {user.name.first} {user.name.last} {index}
          </option>
        ))}
      </select>

      <div style={{ marginBottom: "1rem" }}>
        <h2>Update User</h2>
        <input
          type="text"
          placeholder="Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Age"
          value={age || ""}
          onChange={(e) => setAge(e.target.value)}
        />
          <button onClick={handleUserUpdate} type="submit">Update User</button>
      </div>

      <div style={{ marginBottom: "1rem" }}>
        <h2>Update Address</h2>
        <input
          type="text"
          placeholder="Street"
          value={street}
          onChange={(e) => setStreet(e.target.value)}
        />
        <input
          type="text"
          placeholder="Street Number"
          value={streetNumber}
          onChange={(e) => setStreetNumber(e.target.value)}
        />
        <input
          type="text"
          placeholder="City"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button onClick={handleAddressUpdate} type="submit">Update Address</button>
      </div>

      <div>
        <h2>Current State</h2>
        <pre>{JSON.stringify(users[selectedUserId], null, 2)}</pre>
      </div>
    </div>
  );
}
