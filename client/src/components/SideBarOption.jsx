import React from "react";
import { Container, OptionIcon, Title } from "../styles/SideBarOptionStyles";

const SideBarOption = ({ title, icon }) => {
	return (
		<Container>
			<OptionIcon> {icon} </OptionIcon>
			<Title>{title}</Title>
		</Container>
	);
};

export default SideBarOption;
