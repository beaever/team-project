import React from 'react';
import { isParameterPropertyDeclaration } from 'typescript';
import { ButtonModel } from '../../model/input/button-model';
import MarginBottom from '../layout/margin-bottom';

const Button = (props: ButtonModel) => {
	return (
		<>
			<button className={props.className} onClick={() => props.onClick()}>
				<span>
					{props.label}
					{props.img && <img src={props.src} />}
				</span>
			</button>

			{props.marginBottom && <MarginBottom margin={props.marginBottom} />}
		</>
	);
};

export default Button;
