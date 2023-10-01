import React, { useState } from 'react';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';


const searchContainerStyle = {
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
};
const searchBarContainerStyle = {
    display: 'flex',
    width: '80%',
};
const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    border: '1px solid rgba(0, 0, 0, 0.23)',
    margin: 0,
    width: '100%',
}));
const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));
const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    width: '100%',
    height: '100%',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
    },
}));

export default function SearchBar({ filter, setFilter, search, setSearch }) {
    const [ internalFilter, setInternalFilter ] = useState(filter);
    const [ internalSearch, setInternalSearch ] = useState(search);

    const handleInternalFilterChange = (e) => {
        setInternalFilter(e.target.value);
    };

    const handleInternalSearchChange = (e) => {
        setInternalSearch(e.target.value);
    };

    const handleSearch = () => {
	setSearch(internalSearch);
        setFilter(internalFilter);
    };

    const handleClearSearch = () => {
        setSearch('');
        setFilter('Título');
    };

    return (
        <div style={searchContainerStyle}>
          <div style={searchBarContainerStyle}>
            <FormControl style={{ width: '200px' }}>
              <InputLabel id="filtro">Filtro</InputLabel>
              <Select
                id="filtro"
                value={internalFilter}
                label="Filtro"
                onChange={handleInternalFilterChange}
                style={{ borderTopRightRadius: '0', borderBottomRightRadius: '0' }}
              >
                <MenuItem value='Título'>Título</MenuItem>
                <MenuItem value='Estado'>Estado</MenuItem>
              </Select>
            </FormControl>
            <Search style={{ flexGrow: 1 }} >
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Buscar…"
                inputProps={{ 'aria-label': 'search' }}
                value={internalSearch}
                onChange={handleInternalSearchChange}
                autoFocus
              />
            </Search>
	    <Button variant="contained" color="primary" size="large"
                    style={{ borderTopLeftRadius: '0', borderBottomLeftRadius: '0' }}
                    onClick={handleSearch}>
              <SearchIcon />
            </Button>
          </div>
          {search != "" && (
              <div style={{ display: 'block', width: '80%', textAlign: 'left', marginTop: '10px'}}>
                <Chip label={`Filtro: ${filter}, Búsqueda: ${search}`} onDelete={handleClearSearch}/>
              </div>
          )}
        </div>
    );
}
