import React, { useState } from 'react';
import {
    Button, TextField, FormControl, InputLabel, Select, MenuItem, Grid, Box
} from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

import { LocalizationProvider } from '@mui/x-date-pickers';
import { DesktopDatePicker } from '@mui/x-date-pickers';


export default function() {
    const [titulo, setTitulo] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [fechaDeCreacion, setFechaDeCreacion] = useState(new Date());
    const [estado, setEstado] = useState('');
    const [nombreDelCreador, setNombreDelCreador] = useState('');

    const estadosDeMexico = [
        'Aguascalientes', 'Baja California', 'Baja California Sur', 'Campeche', 'Chiapas', 'Chihuahua',
        'Coahuila', 'Colima', 'Durango', 'Estado de México', 'Guanajuato', 'Guerrero', 'Hidalgo',
        'Jalisco', 'Michoacán', 'Morelos', 'Nayarit', 'Nuevo León', 'Oaxaca', 'Puebla', 'Querétaro',
        'Quintana Roo', 'San Luis Potosí', 'Sinaloa', 'Sonora', 'Tabasco', 'Tamaulipas', 'Tlaxcala',
        'Veracruz', 'Yucatán', 'Zacatecas'
    ];

    return (
        <Box sx={{ margin: 2 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Título"
                value={titulo}
                onChange={(e) => setTitulo(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Descripción"
                value={descripcion}
                onChange={(e) => setDescripcion(e.target.value)}
                multiline
                rows={4}
              />
            </Grid>
            <Grid item xs={12}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DesktopDatePicker
                  label="Fecha de Creación"
                  value={fechaDeCreacion}
                  onChange={(newValue) => setFechaDeCreacion(newValue)}
                  renderInput={(params) => <TextField {...params} fullWidth />}
                />
              </LocalizationProvider>
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel>Estado</InputLabel>
                <Select
                  value={estado}
                  onChange={(e) => setEstado(e.target.value)}
                >
                  {estadosDeMexico.map((estado) => (
                      <MenuItem key={estado} value={estado}>
                        {estado}
                      </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Nombre del Creador"
                value={nombreDelCreador}
                onChange={(e) => setNombreDelCreador(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" color="primary">
                Crear Task
              </Button>
            </Grid>
          </Grid>
        </Box>
    );
}
