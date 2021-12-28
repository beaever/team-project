import React from 'react';
import { isParameterPropertyDeclaration } from 'typescript';
import { ButtonModel } from '../../model/input/button-model';

const Button = (props: ButtonModel) => {
	return (
		<>
			<button>{props.label}</button>
		</>
	);
};

export default Button;
