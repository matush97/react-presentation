import React from "react";

function AddPersonModal(props) {
    const { isOpen, onClose, formData, onChange, onSubmit } = props;

    if (!isOpen) return null;

    return (
        <div>
            <h3>New user</h3>
            <input
                type="id"
                name="id"
                value={formData.id}
                onChange={onChange}
                placeholder="Id"
            />
            <input
                type="name"
                name="name"
                value={formData.name}
                onChange={onChange}
                placeholder="Name"
            />
            <div className="flex justify-end space-x-2">
                <button
                    onClick={onClose}
                >
                    Cancel
                </button>
                <button
                    onClick={onSubmit }
                >
                    Add
                </button>
            </div>
        </div>
    )
}


export default AddPersonModal