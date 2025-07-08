export default function UpdateUserForm({
  formData,
  setFormData,
  handleUserUpdate,
}) {
  return <div className="card p-1 gap-1" style={{ marginBottom: "1rem" }}>
    <h6 className="text-muted border-bottom mb-0">User</h6>
    <input
      className="form-control form-control-sm"
      type="text"
      placeholder="Name"
      value={formData.firstName}
      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
    />
    <input
      className="form-control form-control-sm"
      type="text"
      placeholder="Last Name"
      value={formData.lastName}
      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
    />
    <input
      className="form-control form-control-sm"
      type="number"
      placeholder="Age"
      value={formData.age || ""}
      onChange={(e) => setFormData({ ...formData, age: e.target.value })}
    />
    <button
      className="btn btn-primary btn-block w-100"
      onClick={handleUserUpdate}
      type="submit"
    >
      Update User
    </button>
  </div>;
}
