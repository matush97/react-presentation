import React from "react";
import {useParams} from "react-router-dom"

import UserItem from "../components/UserItem";

import tackPhoto from "../../photos/tack.png";
import djsova from "../../photos/djsova.png";
import krusty from "../../photos/krusty.png";

const USERS = [
    {
        id: 'u1',
        name: 'Tack',
        image: tackPhoto,
    },
    {
        id: 'u2',
        name: 'DJSova',
        image: djsova,
    },
    {
        id: 'u3',
        name: 'krusty',
        image: krusty,
    }
];

function User() {
    const userId = useParams().userId;
    const loadedUser = USERS.find(user => user.id === userId)

    return <UserItem id={loadedUser.id} name={loadedUser.name} image={loadedUser.image}/>
}

export default User;