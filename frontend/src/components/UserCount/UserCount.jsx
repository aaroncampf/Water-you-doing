// UserCount.jsx
import React from 'react';
import { useState } from "react";

import './UserCount.css'


function UserCount() {

    const [nofUsers, setNofUsers] = useState("");

    
    if(nofUsers == null || nofUsers.length == 0) {
        fetch('http://localhost:8080/GetUserCount', {
            method: 'GET'
        }).then(response => response.json())
        .then(jsondata => {
        console.log(jsondata);
        const resultJSON = JSON.parse(JSON.stringify(jsondata));
        
        if (resultJSON.STATUS == "Success") {
           
            setNofUsers(resultJSON.COUNT);
        } else {
            alert("Invalid user id or password");
        }
        }
        
        ).catch(error => {
        alert("Error submitting request " + error);
            
        });
    }
    return (

        <div className="userCount">
            <table align='center'>
                <tr>
                    <td>{nofUsers} Users registered</td>
                </tr>
            </table>
            
        </div>
    );

}

export default UserCount;
