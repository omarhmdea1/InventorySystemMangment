import React from "react";
import Header from "./Header";
import SideBar from "./SideBar";
import Content from "./Content";
import { Wapper } from "../styles/MainPageStyles";

const MainPage = () => {
	return (
		<Wapper>
			<Header />
			<SideBar />
			<Content />;
		</Wapper>
	);
};

export default MainPage;
