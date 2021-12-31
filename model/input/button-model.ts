import React from 'react';

export interface ButtonModel {
	className: string;
	label: string;
	onClick: Function;
	disabled?: boolean;
	marginBottom?: number;
	img?: boolean;
	src?: string;
}
