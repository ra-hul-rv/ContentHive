import { useState } from 'react';
import { IconButton, InputBase } from '@mui/material';
import PropTypes from 'prop-types';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SearchIcon from '@mui/icons-material/Search';
import './header.scss';

const Header = ({ title, searchTerm, setSearchTerm }) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const handleSearchClick = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  return (
    <div className="header">
      <IconButton onClick={()=>setIsSearchOpen(false)}  className="icon-button">
        <ArrowBackIcon   />
      </IconButton>
      <h1 className="title">{title ?? ''}</h1>
      <div className="search-container">
        {!isSearchOpen ? (
          <IconButton   className="icon-button" onClick={handleSearchClick}>
            <SearchIcon   />
          </IconButton>
        ) : (
          <InputBase
          autoFocus
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        )}
      </div>
    </div>
  );
};
Header.propTypes = {
    title: PropTypes.string,
    searchTerm: PropTypes.string.isRequired,
    setSearchTerm: PropTypes.func.isRequired,
  };
  
export default Header;