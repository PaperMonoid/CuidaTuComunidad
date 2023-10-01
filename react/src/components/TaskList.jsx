import React, { useState, useEffect, useRef } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';


import TaskCard from './TaskCard.jsx';


import TaskService from '../services/TaskService.js';


const taskListParentStyle = {
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
    paddingTop: '5px'
};
const taskListStyle = {
    display: 'flex',
    width: '80%',
    justifyContent: 'center',
    flexDirection: 'column'
};


export default function({ search, filter }) {
    const [ tasks, setTasks ] = useState([]);
    const [ page, setPage ] = useState(0);
    const [ isLoading, setIsLoading ] = useState(true);
    const lastScrollY = useRef(0);  // Para mantener la última posición de scroll

    const loadMoreTasks = () => {
        if (isLoading) return;
        setIsLoading(true);
        TaskService.getTasks(page, search, filter).then((newTasks) => {
            setTasks((prevTasks) => [...prevTasks, ...newTasks]);
            setPage((prevPage) => prevPage + 1);
            setIsLoading(false);
        });
    };

    const handleScroll = () => {
        const currentScrollY = window.scrollY;

        // Verificar si hay una solicitud en curso
        if (isLoading) return;

        // Verificar si el usuario hizo scroll hacia abajo y está cerca del final
        if (currentScrollY > lastScrollY.current &&
            window.innerHeight + currentScrollY >= document.documentElement.scrollHeight - 100) {
            loadMoreTasks();
        }

        // Actualizar la última posición de scroll
        lastScrollY.current = currentScrollY;
    };

    const handleLike = (task) => async () => {
        await TaskService.likeTask(task);
        task.likes += 1;
        setTasks([...tasks]);
    };

    const handleDelete = (task) => async () => {
        await TaskService.deleteTask(task);
        setTasks(tasks.filter(x => x != task));
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [handleScroll]);

    useEffect(() => {
        setTasks([]);
        setPage(0);
        setIsLoading(true);

        TaskService.getTasks(0, search, filter).then((initialTasks) => {
            setPage(1);
            setTasks(initialTasks);
            setIsLoading(false);
        });
    }, [search, filter]);

    // useEffect(() => {
    //     TaskService.getTasks(0, search, filter).then((initialTasks) => {
    //         setPage(1);
    //         setTasks(initialTasks);
    //         setIsLoading(false);
    //     });
    // }, [TaskService]);


    return (
        <div style={taskListParentStyle}>
          <div style={taskListStyle}>
            {tasks.map((task, index) =>
                (<TaskCard
                    task={task}
                    onLike={handleLike(task)}
                    onDelete={handleDelete(task)}
                    key={task.id} />)
            )}
            {isLoading && (
                <Box display="flex" justifyContent="center" my={2}>
                  <CircularProgress />
                </Box>
            )}
          </div>
        </div>
    );
};

// onClose={handleClose}
