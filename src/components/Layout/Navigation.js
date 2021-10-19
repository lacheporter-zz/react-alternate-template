import React, { Fragment, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { AppContext } from "../../context/AppContext";
import styles from "./Navigation.module.css";

export default function Navigation() {
  const context = useContext(AppContext);

  return (
    <Fragment>
      <div className={` ${context.showSideNav ? styles.sideNavOpen : styles.sideNavClosed} `}>
        <div className={styles.sideNavHeader}>
          <span>COURSE CONTENT</span>
          <span onClick={context.toggleSideNav}>
            <FontAwesomeIcon icon={faTimes} className={styles.exitIcon} />
          </span>
        </div>
        <div className={styles.sideNavList}>
          {context.index &&
            context.index.map((title, i) => (
              <div
                className={styles.sideNavListItem}
                key={i}
                onClick={() => {
                  context.setCurrentSlide(i);
                  context.toggleSideNav();
                }}
              >
                <div>
                  {i + 1}. {title}
                </div>
              </div>
            ))}
        </div>
      </div>
    </Fragment>
  );
}
