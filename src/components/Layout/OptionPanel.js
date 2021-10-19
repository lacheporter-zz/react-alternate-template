import React, { Fragment, useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { faListUl, faHome, faSearch } from "@fortawesome/free-solid-svg-icons";
import Option from "../UI/Option";
import styles from "./OptionPanel.module.css";

export default function OptionPanel({ showSearchHandler }) {
  //set state
  const context = useContext(AppContext);
  // const [panelWidth, setPanelWidth] = useState(false);
  // const [showText, setShowText] = useState(false);

  //show hide panel on mouse hover
  // const panelWidthHandler = () => {
  //   setPanelWidth(!panelWidth);
  //   setShowText(!showText);
  // };

  return (
    <Fragment>
      <div className={styles.panel}>
        <Option tooltip="Main Menu" link={true} icon={faHome} />
        <Option tooltip="Lesson Index" link={false} icon={faListUl} onclick={context.toggleSideNav} />
        <Option tooltip="Search" link={false} icon={faSearch} onclick={showSearchHandler} />
      </div>
    </Fragment>
  );
}
