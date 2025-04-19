import React from 'react';

import tackPhoto from "../../photos/tack.png"
import djsova from "../../photos/djsova.png"
import krusty from "../../photos/krusty.png"
import UserList from "../components/UserList";

function Users() {

    const USERS = [
        {
            id: 'u1',
            name: 'Tack',
            image: tackPhoto,
            places: 1
        },
        {
            id: 'u2',
            name: 'DJSova',
            image: djsova,
            places: 2
        },
        {
            id: 'u2',
            name: 'krusty',
            image: krusty,
            places: 2
        }
    ];

    return <UserList items={USERS}/>
}

export default Users;