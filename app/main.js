/*const greeter = require("./Greeter.js");

document.querySelector("#root").appendChild(greeter());*/


//以下为react

import React, { Component } from 'react';
import ReactDOM from "react-dom";
import Greeter from "./Greeter";

import "./main.css";

ReactDOM.render(
	<Greeter></Greeter>,
	document.getElementById('root')
);
