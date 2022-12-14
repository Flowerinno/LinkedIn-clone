import React from "react";
import "./HeaderOptions.css";
import Avatar from "@mui/material/Avatar";
const HeaderOptions = ({ avatar, Icon, title, onClick }) => {
	return (
		<div className="header-options" onClick={onClick}>
			{Icon && <Icon className="header-options__icon " />}
			{avatar && <Avatar className="header-options__icon" src={avatar} />}
			<h3 className="header-options-title">{title}</h3>
		</div>
	);
};

export default HeaderOptions;
