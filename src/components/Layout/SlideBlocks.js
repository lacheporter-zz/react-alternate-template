import React, { useState } from "react";
import styles from "./SlideBlocks.module.css";
import ImageMapper from "react-img-mapper";
import Button from "../UI/Button";
const SlideBlocks = (props) => {
  const [clickedTerm, setClickedTerm] = useState(0);
  const [showClicked, setShowClicked] = useState(true);
  const [mapInfo, setMapInfo] = useState("Click a number in the diagram to view details.");

  const handleClick = (i) => {
    setClickedTerm(i);
    setShowClicked(true);
  };
  const mapHandler = (text) => {
    setMapInfo(text);
  };

  //paragraph block
  const Paragraph = ({ text, size, tag }) => {
    const formatted = text.replace(`${tag}`, (it) => `<b>${it}</b>`);
    return <div dangerouslySetInnerHTML={{ __html: formatted }} style={{ fontSize: size }} />;
  };
  //link block
  const Link = ({ text, path }) => {
    return (
      <a href={path} target="_blank">
        {text}
      </a>
    );
  };
  //space block
  const Space = ({ height }) => {
    return <div style={{ height }} />;
  };
  //list block
  const List = ({ title, items }) => {
    return (
      <>
        {title && <strong>{title}</strong>}
        <ul className={styles.contentList}>
          {items.map((item) => (
            <li className={styles.contentListItem} key={item}>
              {item}
            </li>
          ))}
        </ul>
      </>
    );
  };
  //terms block
  const Terms = ({ title, terms }) => {
    return (
      <>
        <p>{title}</p>
        <div className={styles.termsRow}>
          <div className={styles.termsDefinition}>
            {showClicked && (
              <div>
                <h3>{terms[clickedTerm].name}</h3>
                <div>{terms[clickedTerm].definition}</div>
              </div>
            )}
          </div>
          <div className={styles.termsColumn}>
            {terms.map((item, index) => (
              <Button key={index} onclick={() => handleClick(index)} text={item.name} />
            ))}
          </div>
        </div>
      </>
    );
  };

  //reference blocks
  const blocks = {
    paragraph: Paragraph,
    link: Link,
    space: Space,
    list: List,
    terms: Terms,
  };

  return (
    <>
      <div className={props.layout === "wide" ? styles.wideGrid : styles.standardGrid}>
        <span className={`slide-title ${styles.title} ${styles.slideTitle}`}>{props.title}</span>
        <div className={styles.content}>
          {props.content.map((item, i) => {
            const Comp = blocks[item.type];
            return <Comp key={i} {...item} />;
          })}
        </div>
        {props.image && (
          <img
            id="picture"
            className={styles.picture}
            src={props.image}
            alt="slideimage"
            style={{ width: props.width, height: props.height }}
          />
        )}
        {props.diagram && (
          <div className={styles.picture}>
            <ImageMapper
              src={props.diagram}
              map={props.map}
              width={props.width}
              height={400}
              onClick={(item, id) => mapHandler(item.content)}
            />
            <p className={styles.mapInfo}>{mapInfo}</p>
          </div>
        )}
      </div>
    </>
  );
};

export default SlideBlocks;
