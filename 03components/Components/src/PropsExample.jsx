import React from "react";
function User({ nameProp, ageProp, deptProp, emailProp }) {
    return (
        <>
            <h2>{nameProp}'s Profile</h2>
            <p>Age: {ageProp}</p>
            <p>Department: {deptProp}</p>
            <p>Email: {emailProp}</p>
        </>
    );
}

export default User;
