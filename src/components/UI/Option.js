import React, { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import styles from "./Option.module.css";
import ReactTooltip from "react-tooltip";

export default function Option(props) {
  return (
    <Fragment>
      <div className={styles.optionsItem} onClick={props.onclick}>
        <div>
          {props.link ? (
            <>
              <Link className={styles.optionsLink} to="/">
                <FontAwesomeIcon icon={props.icon} data-tip data-for={props.tooltip} />
              </Link>
              <ReactTooltip id={props.tooltip} place="top" effect="float" type="info">
                {props.tooltip}
              </ReactTooltip>
            </>
          ) : (
            <>
              <FontAwesomeIcon icon={props.icon} onClick={props.onclick} data-tip data-for={props.tooltip} />
              <ReactTooltip id={props.tooltip} place="top" effect="float" type="info">
                {props.tooltip}
              </ReactTooltip>
            </>
          )}
        </div>
      </div>
    </Fragment>
  );
}
