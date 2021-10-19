import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import styles from "./Search.module.css";
import { AppContext } from "../../context/AppContext";

export default function SearchResults({ searchTerm, setSearchTerm, clearInput, hide, data, closeSearch }) {
  const context = useContext(AppContext);
  //SPLIT THE SEARCH TERM AND STYLE THE PIECES//
  const splitResult = (result) => {
    return result.split(new RegExp(`(${searchTerm})`, `gi`)).map((piece, index) => {
      return (
        <span
          key={index}
          style={{
            //if piece is equal to the search term style it
            background: piece.toLowerCase() === searchTerm.toLocaleLowerCase() ? "GOLD" : "TRANSPARENT",
            padding: "0.15rem 0rem",
            borderRadius: "0.15rem",
          }}
        >
          {piece}
        </span>
      );
    });
  };

  const filterData = () => {
    return data
      .filter((item) => {
        if (searchTerm === "") return false;
        let searchText = item.title;
        let searchBlock = item.content;
        if (searchText.toLowerCase().includes(searchTerm.toLowerCase())) {
          return true;
        }
        let test = false;
        searchBlock.forEach((obj) => {
          if (obj.text && obj.text.toLowerCase().includes(searchTerm.toLowerCase())) {
            test = true;
          }
        });
        return test;
      })
      .map((item) => {
        return (
          <div key={item.index}>
            <h3 style={{ padding: "1rem 0rem" }}>{splitResult(item.title)}</h3>
            {item.content.map((block, i) => (
              <div key={i}>
                {block.text && <div>{splitResult(block.text)}</div>}
                {block.items && (
                  <div>
                    {block.items.map((l, i) => (
                      <div style={{ padding: "0.25rem" }} key={i}>
                        {splitResult(l)}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div
              className={styles.searchLink}
              onClick={() => {
                context.setCurrentSlide(item.index);
                setSearchTerm("");
                clearInput();
                hide();
              }}
            >
              Go To This Slide
            </div>
            <hr />
          </div>
        );
      });
  };

  return (
    <div className={styles.searchResults}>
      <div className={styles.searchResultsHeader}>
        <h2>Search Results</h2>
        <span
          onClick={() => {
            setSearchTerm("");
            clearInput();
          }}
        >
          <FontAwesomeIcon icon={faTimes} className={styles.exitIcon} onClick={hide} />
        </span>
      </div>
      <hr />
      <br />
      {!searchTerm ? <p>Try searching something above.</p> : null}
      <ul>{filterData()}</ul>
    </div>
  );
}
