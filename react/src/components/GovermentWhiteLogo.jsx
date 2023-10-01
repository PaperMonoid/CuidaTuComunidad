import React from 'react';


export default function(props) {
    const height = props.height ? props.height : '45px';
    return (
        <img
          src='https://framework-gb.cdn.gob.mx/landing/img/logofooter.png'
          height={height}
        />
    );
}
