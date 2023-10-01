import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import CircularProgress from '@mui/material/CircularProgress';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';


import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import DeleteIcon from '@mui/icons-material/Delete';


export default function({ task, onLike, onDelete }) {
    const canDelete = task.likes == 0;

    const [liking, setLiking] = useState(false);
    const [deleting, setDeleting] = useState(false);
    const [ successOpen, setSuccessOpen ] = useState(false);

    const handleLike = async () => {
        setLiking(true);
        await onLike();
        setLiking(false);
        setSuccessOpen(true);
    };

    const handleDelete = async () => {
        setDeleting(true);
        await onDelete();
        setDeleting(false);
    };

    const handleSuccessClose = () => {
        setSuccessOpen(false);
    };

    return (
        <Card variant="outlined" style={{ margin: '16px', padding: '16px', flexGrow: 1 }}>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              {task.titulo}
            </Typography>
            <Typography variant="body2" color="textSecondary" gutterBottom>
              {task.descripcion}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Fecha: {task.fechaDeCreacion}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Estado: {task.estado}
            </Typography>
            <Typography variant="body2" color="textSecondary" gutterBottom>
              Creador: {task.nombreDelCreador}
            </Typography>
            <Typography variant="body2" color="textSecondary" gutterBottom>
              Likes: {task.likes}
            </Typography>
            <Grid container spacing={2} justifyContent="flex-end">
              { canDelete && (
                  <Grid item>
                    <Button
                      variant="contained"
                      color="error"
                      startIcon={
                          deleting
                              ? <CircularProgress size={24} /> : <DeleteIcon />
                      }
                      onClick={handleDelete}
                      disabled={deleting}
                    >
                      Eliminar
                    </Button>
                  </Grid>
              ) }
              <Grid item>
                <Button
                  variant="contained"
                  color="primary"
                  startIcon={
                      liking
                          ? <CircularProgress size={24} /> : <ThumbUpIcon />
                  }
                  onClick={handleLike}
                  disabled={liking}
                >
                  Like
                </Button>
              </Grid>
            </Grid>
          </CardContent>
          <Snackbar
            open={successOpen}
            autoHideDuration={2000}
            onClose={handleSuccessClose}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            style={{ marginTop: '20px', marginRight: '20px' }}
          >
            <Alert onClose={handleSuccessClose} severity="success" sx={{ width: '100%' }}>
              ¡Operación exitosa!
            </Alert>
          </Snackbar>
        </Card>
    );
};
