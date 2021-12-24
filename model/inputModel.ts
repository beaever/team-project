import React from 'react';
import marginModel from '../model/marginModel';

interface rightButtonModel {
	text: string;
	onClick: React.MouseEventHandler<HTMLButtonElement>;
	disabled: boolean;
	className?: string;
}

export default interface InputModel {
	label?: string;
	type: 'text' | 'password' | 'time' | 'date' | 'file' | 'select';
	value?: string | number;
	onKeyup?: React.KeyboardEventHandler<HTMLInputElement>;
	onChange: React.ChangeEventHandler<HTMLInputElement>;
	onBlur?: React.FocusEventHandler<HTMLInputElement>;
	onFocus?: React.FocusEventHandler<HTMLInputElement>;
	onFocusOut?: React.FocusEventHandler<HTMLInputElement>;
	className?: string;
	parent_className?: string;
	id?: string;
	name?: string;
	maxLength: number;
	disabled: boolean;
	placeholder?: string;
	margin?: marginModel;
	warning_text?: string;
	right_button?: rightButtonModel;
	form?: any;
	setForm?: any;
	isCheck?: boolean; // 유효성 검사여부
}
