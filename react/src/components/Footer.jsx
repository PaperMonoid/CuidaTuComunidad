import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import GithubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


import GovermentWhiteLogo from './GovermentWhiteLogo.jsx';
import FooterCaption from './FooterCaption.jsx';
import GovermentFooterPattern from './GovermentFooterPattern.jsx';


import "./Footer.css";


const footerStyle = {
    display: 'flex',
    background: '#12322b',
    color: '#EEEEEE',
    justifyContent: 'center'
};
const footerGridStyle = {
    display: 'flex',
    paddingTop: '70px',
    paddingBottom: '70px',
    textAlign: 'left',
    width: '80%'
};


export default function() {
    return (
        <>
          <footer sx={{ flexGrow: 1 }} style={footerStyle}>
            <Grid container spacing={2} style={footerGridStyle}>
              <Grid item md={4} xs={12}>
                <GovermentWhiteLogo height='80px'/>
              </Grid>
              <Grid item md={2} xs={12}>
                <Typography variant="h6" component="div">
                  Enlaces
                </Typography>
                <Typography variant="body2" style={{ opacity: 0.5 }}>
                  <a href="https://www.gob.mx/" className="footer-link">
                    Gobierno de México
                  </a>
                </Typography>
                <a href="https://agilgob.com/" className="footer-link">
                  <Typography variant="body2" style={{ opacity: 0.5 }}>
                    AgilGob - Soluciones Tecnológicas Gubernamentales
                  </Typography>
                </a>
              </Grid>
              <Grid item md={4} xs={12}>
                <Typography variant="h6" component="div">
                  ¿Qué es cuida tu comunidad?
                </Typography>
                <Typography variant="body2" style={{ opacity: 0.5 }}>
                  Cuida tu comunidad una iniciativa del gobierno federal de México, lanzada en 2025, para promover la colaboración ciudadana en tareas comunitarias. A través de esta plataforma, puedes visualizar y apoyar las tareas que encuentres relevantes otorgándoles me gusta. Participa, agrega nuevas tareas y contribuye a fortalecer el vínculo comunitario.
                </Typography>
              </Grid>
              <Grid item md={2} xs={12}>
                <Typography variant="h6" component="div">
                  Síguenos en:
                </Typography>
                <a href="https://github.com/PaperMonoid" className="footer-link" style={{ opacity: 0.5 }}>
                  <GithubIcon/>
                </a>
                <span style={{display: 'inline-block', width: '5px'}}/>
                <a href="https://www.linkedin.com/in/daniel-santiago-aguila-torres-0a3a60203/" className="footer-link" style={{ opacity: 0.5 }}>
                  <LinkedInIcon/>
                </a>
              </Grid>
              <Grid item xs={12} style={{ flexGrow: 1 }}/>
              <Grid item xs={12} style={{ textAlign: 'center', opacity: 0.5 }}>
                <FooterCaption/>
              </Grid>
            </Grid>
          </footer>
          <GovermentFooterPattern/>
        </>
    );
}
