/*let config = require("./config.json");

module.exports = function (){
	let greet = document.createElement("div");
	greet.textContent = config.greetText;
	return greet;
};*/

//以下为react

import React, { Component } from 'react';
import config from "./config.json";

//注意className使用变量的形式
import styles from "./Greeter.css";

export default class Greeter extends Component {
	render() {
		return (
			<div className={styles.root}>
				{ config.greetText }
			</div>
		);
	}
}

