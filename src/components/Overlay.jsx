import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

export default function Overlay() {
  return (
    <div className="overlay">
      <img src="img/cetim-logo.svg" alt="" className="logo" />
      <div className="left-bar"></div>
    </div>
  );
}
