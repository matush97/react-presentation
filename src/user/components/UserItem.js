import React from 'react';
import {Link} from 'react-router-dom';

import Avatar from '../../utils/components/UIElements/Avatar';
import Card from '../../utils/components/UIElements/Card';
import './UserItem.css';

function UserItem(props) {
    return (
        <li className="user-item">
            <Card className="user-item__content">
                <Link to={`/user/${props.id}`}>
                    <div className="user-item__image">
                        <Avatar image={props.image} alt={props.name}/>
                    </div>
                    <div className="user-item__info">
                        <h2>{props.name}</h2>
                    </div>
                </Link>
            </Card>
        </li>
    );
}

export default UserItem;