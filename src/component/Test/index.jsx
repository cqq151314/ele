import React from 'react';
function Test({location}) {
    console.log(location);
    return <div>{location.pathname}</div>;
}
export default Test;