import React, {useState} from 'react';

import UserItem from './UserItem';
import Card from "../../shared/components/UIElements/Card";
import './UserList.css';

import inkognito from "../../photos/inkognito.png"

function UsersList (props) {
    const [items, setItems] = useState(props.items);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formData, setFormData] = useState({
        id: '',
        name: '',
        image: inkognito
    });

    const handleAddItem  = () => {
        setItems([...items, { ...formData }]);
        setFormData({ id: '', name: '' });
        setIsModalOpen(false);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log("name", name)
        console.log("value", value)
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    // returns
    if (props.items.length === 0) {
        return (
            <div className="center">
                <Card>
                    <h2>No users found.</h2>
                </Card>
            </div>
        );
    }

    return (
        <div>
            <ul className="users-list">
                {items.map(user => (
                    <UserItem
                        key={user.id}
                        id={user.id}
                        image={user.image}
                        name={user.name}
                    />
                ))}
            </ul>

            <button
                onClick={() => setIsModalOpen(true)}
            >
                Add User
            </button>

            {isModalOpen && (
                <div
                >
                    <h3>New user</h3>
                    <input
                        type="id"
                        name="id"
                        value={formData.id}
                        onChange={handleChange}
                        placeholder="Id"
                    />
                    <input
                        type="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Name"
                    />
                    <div className="flex justify-end space-x-2">
                        <button
                            onClick={() => setIsModalOpen(false)}
                        >
                            Cancel
                        </button>
                        <button
                            onClick={handleAddItem }
                        >
                            Add
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default UsersList;
