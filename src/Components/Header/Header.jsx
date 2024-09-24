import { useState } from "react";
import { IconButton, InputBase } from "@mui/material";
import PropTypes from "prop-types";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import SearchIcon from "@mui/icons-material/Search";
import "./header.scss";

const Header = ({ title, searchTerm, setSearchTerm }) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const handleSearchClick = () => {
    setIsSearchOpen(!isSearchOpen);
  };
  const handleBackClick = () => {
    setSearchTerm("");
    setIsSearchOpen(false);
  };
  return (
    <div className="header">
      <IconButton onClick={handleBackClick} className="icon-button">
        <ArrowBackIcon className="arrow-icon" />
      </IconButton>
      <p className="title">{title ?? ""}</p>
      <div className="search-container">
        {!isSearchOpen ? (
          <IconButton className="icon-button" onClick={handleSearchClick}>
            <SearchIcon className="search-icon" />
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
