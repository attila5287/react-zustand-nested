import { useState } from "react";
import "./App.css";
import "bootswatch/dist/quartz/bootstrap.min.css";
import useStore from "./store/useStore";
// Main App component
export default function App() {
  const { users, updateUser, updateAddress } = useStore();
  const [selectedUserId, setSelectedUserId] = useState(0);
  const [formData, setFormData] = useState({
    firstName: users[selectedUserId].name.first,
    lastName: users[selectedUserId].name.last,
    age: users[selectedUserId].dob.age,
    street: users[selectedUserId].location.street.name,
    city: users[selectedUserId].location.city,
    streetNumber: users[selectedUserId].location.street.number,
  });
  const handleUserUpdate = (e) => {
    e.preventDefault();
    console.log(formData.firstName, formData.lastName, formData.age);
    updateUser(Number(selectedUserId), {
      name: { first: formData.firstName, last: formData.lastName },
      dob: { ...users[selectedUserId].dob, age: Number(formData.age) },
    });
  };

  const handleAddressUpdate = (e) => {
    e.preventDefault();
    console.log(formData.street, formData.streetNumber, formData.city);
    updateAddress(Number(selectedUserId), {
      street: { name: formData.street, number: formData.streetNumber },
      city: formData.city,
    });
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary py-0">
        <div className="d-flex gap-1 mini py-0">
          <a className="navbar-brand" href="https://zustand.docs.pmnd.rs/ ">
            <i className="fa fa-search"></i> Zustand
          </a>
          <select
            className="form-select w-100"
            value={selectedUserId}
            onChange={(e) => {
              const index = Number(e.target.value);
              setSelectedUserId(index);
              setFormData({
                firstName: users[index].name.first,
                lastName: users[index].name.last,
                age: users[index].dob.age || "",
                street: users[index].location.street.name,
                city: users[index].location.city,
                streetNumber: users[index].location.street.number,
              });
            }}
          >
            {users.map((user, index) => (
              <option key={"user" + index} value={index}>
                {index} - {user.name.first} {user.name.last}
              </option>
            ))}
          </select>
        </div>
      </nav>

      <div className="mini" style={{ padding: "1rem" }}>
        <div className="d-flex gap-1">
          <div className="card p-1 gap-1" style={{ marginBottom: "1rem" }}>
            <input
              className="form-control form-control-sm"
              type="text"
              placeholder="Name"
              value={formData.firstName}
              onChange={(e) =>
                setFormData({ ...formData, firstName: e.target.value })
              }
            />
            <input
              className="form-control form-control-sm"
              type="text"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={(e) =>
                setFormData({ ...formData, lastName: e.target.value })
              }
            />
            <input
              className="form-control form-control-sm"
              type="number"
              placeholder="Age"
              value={formData.age || ""}
              onChange={(e) =>
                setFormData({ ...formData, age: e.target.value })
              }
            />
            <button
              className="btn btn-primary btn-block w-100"
              onClick={handleUserUpdate}
              type="submit"
            >
              Update User
            </button>
          </div>

          <div className="card p-1 gap-1" style={{ marginBottom: "1rem" }}>
            <input
              className="form-control form-control-sm"
              type="text"
              placeholder="Street"
              value={formData.street}
              onChange={(e) =>
                setFormData({ ...formData, street: e.target.value })
              }
            />
            <input
              className="form-control form-control-sm"
              type="text"
              placeholder="Street Number"
              value={formData.streetNumber}
              onChange={(e) =>
                setFormData({ ...formData, streetNumber: e.target.value })
              }
            />
            <input
              className="form-control form-control-sm"
              type="text"
              placeholder="City"
              value={formData.city}
              onChange={(e) =>
                setFormData({ ...formData, city: e.target.value })
              }
            />
            <button
              className="btn btn-primary btn-block w-100"
              onClick={handleAddressUpdate}
              type="submit"
            >
              Update Address
            </button>
          </div>
        </div>

        <div className="card p-2">
          <h6 className="text-muted border-bottom mb-0">
            Current User (randomuser.me/API)
          </h6>
          <pre>{JSON.stringify(users[selectedUserId], null, 2)}</pre>
        </div>
      </div>
    </>
  );
}
