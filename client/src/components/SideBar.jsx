import React from "react";
import { Container, Logo } from "../styles/SideBarStyles";
import SideBarOption from "./SideBarOption";
import { RxDashboard } from "react-icons/rx";
import { MdInventory } from "react-icons/md";
import { IoIosSettings } from "react-icons/io";

const SideBar = () => {
	return (
		<Container>
			<Logo>OmaRoz</Logo>
			<SideBarOption title="Dashboard" icon={<RxDashboard />} />
			<SideBarOption title="Inventory" icon={<MdInventory />} />
			<SideBarOption title="Setting" icon={<IoIosSettings />} />
		</Container>
	);
};

export default SideBar;
