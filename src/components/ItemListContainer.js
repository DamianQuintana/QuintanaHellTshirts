import React from 'react';

function PropGreeting({greeting, buySome}){
        return(
            <>
            <div>
                <h1 class ="headerContainer" >
                    {greeting}<br/>
                    {buySome}
                </h1>
            </div>
            </>
        );
    }

export default PropGreeting;