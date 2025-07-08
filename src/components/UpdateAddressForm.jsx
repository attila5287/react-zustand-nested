export default function UpdateAddressForm({formData, setFormData, handleAddressUpdate}) {
    return(
        <div className="card p-1 gap-1" style={{ marginBottom: "1rem" }}>
            <h6 className="text-muted border-bottom mb-0">Address</h6>
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
    )
}