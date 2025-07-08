import { useState } from "react";
import "./App.css";
import "bootswatch/dist/quartz/bootstrap.min.css";
import useStore from "./store/useStore";
import SelectUser from "./components/SelectUser";
import UpdateUserForm from "./components/UpdateUserForm";
import UpdateAddressForm from "./components/UpdateAddressForm";
import CurrentUser from "./components/CurrentUser";
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
      <SelectUser
        selectedUserId={selectedUserId}
        setSelectedUserId={setSelectedUserId}
        setFormData={setFormData}
      />
      <div className="mini" style={{ padding: "1rem" }}>
        <div className="d-flex gap-1">
          
          <UpdateUserForm formData={formData} setFormData={setFormData} handleUserUpdate={handleUserUpdate} />
          
          <UpdateAddressForm formData={formData} setFormData={setFormData} handleAddressUpdate={handleAddressUpdate} />   
        </div>

        <CurrentUser selectedUserId={selectedUserId} />
      </div>
    </>
  );
}
