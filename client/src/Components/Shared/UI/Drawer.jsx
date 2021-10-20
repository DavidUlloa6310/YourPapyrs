import React from "react";
import ReactDOM from "react-dom";

import { CSSTransition } from "react-transition-group";

import styles from "./Drawer.module.css";

function Drawer(props) {
  const content = (
    <CSSTransition
      in={props.show}
      timeout={{ enter: 200, exit: 200 }}
      classNames="slide-in-left"
      mountOnEnter
      unmountOnExit
    >
      <aside
        className={`${styles["drawer"]} ${styles[props.className]}`}
        onClick={props.onClick}
        style={props.styles}
      >
        {props.children}
      </aside>
    </CSSTransition>
  );

  if (!props.isAbove) {
    return content;
  }

  return ReactDOM.createPortal(
    content,
    document.getElementById(props.hook || "drawer-hook")
  );
}

export default Drawer;
