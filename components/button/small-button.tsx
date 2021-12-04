import React from 'react';
import styled from 'styled-components';

type SmallButtonTypes = {
	title: string;
	onClick?: React.MouseEventHandler<HTMLButtonElement>;
	router?: any;
};
const NoDataBtn = styled.button`
	padding: 13px;
	width: 170px;
	background-color: #4e63fd;
	border-radius: 22px;
	font-size: 15px;
	font-weight: 300;
	color: #fff;
`;

export default function SmallButton(props: SmallButtonTypes) {
	const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		if (props.onClick) {
			props.onClick(e);
		}
	};

	return (
		<NoDataBtn type="button" className="btn_nodata" onClick={(e) => onClick(e)}>
			{props.title}
		</NoDataBtn>
	);
}
