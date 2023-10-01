import React from 'react';


export default function(props) {
    const height = props.height ? props.height : '48px';
    return (
        <img
          src='https://framework-gb.cdn.gob.mx/landing/img/logoheader.svg'
          height={height}
        />
    );
}
