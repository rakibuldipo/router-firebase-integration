import { getAuth } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import app from '../../firebase.init';


const auth = getAuth(app);
const Orders = () => {
    const [user] = useAuthState(auth);
    return (
        <div>
            <h2>This is Order</h2>
            <p>Current user is: {user ? user.displayName : 'NO  Entery'}</p>
        </div>
    );
};

export default Orders;