import styled from "styled-components";

export const Wapper = styled.div`
	margin: 0;
	height: 100vh;
	display: grid;
	grid-template-columns: 250px 1fr auto;
	grid-template-rows: auto 1fr auto;
	grid-template-areas: "lf hd hd" "lf cn cn" "lf cn cn";
	/* why fr and not vw/vh/% ? -> you can add some gaps */
	gap: 3px;
`;
