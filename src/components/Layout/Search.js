import React, { Fragment, useState, useRef } from "react";
import SearchResults from "./SearchResults";
import styles from "./Search.module.css";

export default function Search({ data, showSearch, show, hide }) {
  const [searchTerm, setSearchTerm] = useState("");
  const inputBox = useRef();
  //set the search term
  const searchHandler = (e) => {
    setSearchTerm(e.target.value);
  };
  //clear the search input
  const clearInput = () => {
    inputBox.current.value = "";
  };
  //props for search results component
  const searchResultsProps = {
    searchTerm: searchTerm,
    setSearchTerm: setSearchTerm,
    clearInput: clearInput,
    data: data,
    hide: hide,
  };

  return (
    <Fragment>
      <div className={`${showSearch ? styles.searchOpen : styles.searchClosed}`} onFocus={show}>
        {showSearch && (
          <>
            <input
              className={styles.searchInput}
              ref={inputBox}
              autoFocus={inputBox}
              id="search"
              type="text"
              placeholder="What are you looking for?"
              onChange={searchHandler}
            />

            <SearchResults {...searchResultsProps} />
          </>
        )}
      </div>
    </Fragment>
  );
}
