import { useState } from 'react'
import './App.css'
import 'bootswatch/dist/vapor/bootstrap.min.css'
import useStore from './store/useStore'
// Main App component
export default function App() {
  const { user, updateUser, updateAddress } = useStore();
  const [name, setName] = useState(user.name);
  const [age, setAge] = useState(user.age);
  const [street, setStreet] = useState(user.address.street);
  const [city, setCity] = useState(user.address.city);

  const handleUserUpdate = () => {
    updateUser({ name, age: Number(age) });
  };

  const handleAddressUpdate = () => {
    updateAddress({ street, city });
  };

  return (
    <div style={{ padding: "1rem", fontFamily: "sans-serif" }}>
      <h1>Zustand User Info</h1>

      <div style={{ marginBottom: "1rem" }}>
        <h2>Update User</h2>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <button onClick={handleUserUpdate}>Update User</button>
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
          placeholder="City"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button onClick={handleAddressUpdate}>Update Address</button>
      </div>

      <div>
        <h2>Current State</h2>
        <pre>{JSON.stringify(user, null, 2)}</pre>
      </div>
    </div>
  );
}
