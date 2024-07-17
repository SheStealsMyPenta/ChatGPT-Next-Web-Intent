import React, { useEffect, useState, useRef } from "react";
import "./iframe.css"; // 引入样式文件
export default function IFrame() {
  const iframeRef = useRef(null);
  const handlerInputs = (val, i) => {
    // let arr = [...list]
    // arr[i].title = val
    // setList(arr)
  };
  return (
    <span className="boxs">
      <h3>Here is the component you need</h3>
      <iframe
        ref={iframeRef}
        src="https://erc20-widget.vercel.app/"
        style={{ borderRadius: "24px" }}
        width="320px"
        height="750px"
      ></iframe>
    </span>
  );
}
