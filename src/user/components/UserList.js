import React, {useState} from 'react';

import UserItem from './UserItem';
import Card from "../../shared/components/UIElements/Card";
import './UserList.css';

import inkognito from "../../photos/inkognito.png"
import AddPersonModal from "./AddPersonModal";

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

            <AddPersonModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                formData={formData}
                onChange={handleChange}
                onSubmit={handleAddItem}
            />
        </div>
    );
}

export default UsersList;
