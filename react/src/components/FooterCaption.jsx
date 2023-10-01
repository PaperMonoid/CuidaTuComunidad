import React from 'react';
import Typography from '@mui/material/Typography';


export default function() {
    return (
        <>
          <Typography variant="caption" color="white" component='span'>
            &copy; 2023 Cuida Tu Comunidad | Creado por Daniel Santiago Aguila Torres
          </Typography>
          <span style={{ display: 'inline-block', width: '5px' }} />
          <Typography variant="caption" color="white" component='span'>
            para el reto Fullstack de AgilGlob
          </Typography>
          <Typography variant="caption" color="white" style={{fontSize: 10, opacity: 0.5}} component='div'>
            Todo el contenido de este sitio web es de caracter ficticio con motivos demostrativos.
          </Typography>
        </>
    );
}
