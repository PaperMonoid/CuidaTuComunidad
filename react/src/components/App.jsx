import React, { useState, useEffect }from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Fab from '@mui/material/Fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import AddIcon from '@mui/icons-material/Add';


import Footer from './Footer.jsx';
import Header from './Header.jsx';
import SearchBar from './SearchBar.jsx';
import TaskList from './TaskList.jsx';


const layoutStyle = {
    display: 'flex',
    minHeight: '100vh',
    flexDirection: 'column'
};
const contentStyle = {
    background: 'white',
    paddingTop: '64px',
    flexGrow: 1
};
const upStyle = {
    position: 'fixed',
    right: '100px',
    bottom: '32px',
};
const addStyle = {
    position: 'fixed',
    right: '32px',
    bottom: '32px',
};


export default function() {
    const matches = window.matchMedia("(max-width:600px)").matches;
    const [ isMobile, setIsMobile ] = useState(!matches);
    const [ isUpVisible, setIsUpVisible ] = useState(false);
    const [ filter, setFilter ] = useState('Título');
    const [ search, setSearch ] = useState('');

    const handleScroll = () => {
        const currentScrollY = window.scrollY;
        setIsUpVisible(window.scrollY >= 100);
        return;
    };

    const handleUp = () => {
        window.scrollTo(0, 0);
    };

    const handleAdd = () => {

    };

    const toggleSearch = (e) => setIsMobile(!e.matches);

    useEffect(() => {
        const matchMedia = window.matchMedia("(max-width:600px)");
        matchMedia.addListener(toggleSearch);
        window.addEventListener('scroll', handleScroll);
        return () => {
            matchMedia.removeListener(toggleSearch);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <div style={layoutStyle}>
          <Header isMobile={isMobile} />
          <div style={contentStyle}>
            <div style={{ marginTop: '20px' }}/>
            <SearchBar
              filter={filter}
              setFilter={setFilter}
              search={search}
              setSearch={setSearch} />
            <TaskList
              filter={filter}
              search={search} />
            <Fab color="primary" style={addStyle} onClick={handleUp}>
              <AddIcon/>
            </Fab>
            {isUpVisible && (
                <Fab color="secondary" style={upStyle} onClick={handleUp}>
                  <KeyboardArrowUpIcon/>
                </Fab>
            )}
          </div>
          <Footer />
        </div>
  );
}
