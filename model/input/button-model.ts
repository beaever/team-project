import React from 'react';

export interface ButtonModel {
	className: string;
	label: string;
	onClick: Function;
	marginBottom?: number;
	img?: boolean;
	src?: string;
}
