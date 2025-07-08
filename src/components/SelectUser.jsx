import useStore from "../store/useStore";

export default function SelectUser({ selectedUserId, setSelectedUserId, setFormData }) {
  const { users } = useStore();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary py-0">
      <div className="d-flex gap-2 mini py-0 my-1">
        <a
          className="navbar-brand"
          href="https://refine.dev/blog/zustand-react-state/#managing-state-structures"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-react fa-spin mx-1"></i>
          <img
            src={users[selectedUserId].picture.thumbnail}
            alt="Zustand"
            className="img-fluid rounded-circle"
            style={{ width: "40px" }}
          />
        </a>
        <select
          className="form-select w-100 py-0"
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
  );
}
