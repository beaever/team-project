import React, { useEffect, useState } from 'react';

type InputTextTypes = {
	id?: string;
	label?: boolean | string;
	required?: boolean;
	placeholder?: string;
	error?: boolean | string;
	side?: boolean | JSX.Element;
	side_type?: 'type1' | 'type2';
	type: 'text' | 'password' | 'number';
	pattern?: string;
	max_length?: number;
	value?: string;
	default_value?: string;
	readonly?: boolean;
	disabled?: boolean;
	onChange?: React.ChangeEventHandler<HTMLInputElement>;
	img_search?: boolean;
	name?: string;
	onClick?: Function;
	onBlur?: React.FocusEventHandler<HTMLInputElement>;
	blur?: boolean; // text color를 변경 할지 확인
	img_delete?: boolean;
	gameSearch?: boolean;
	onClickSearchDelete?: Function;
	marginTop?: number;
};
export default function InputText(props: InputTextTypes) {
	const [focus, setFocus] = useState(false);

	return (
		<div className="input_text_wrap">
			<div>
				<div
					className={`input_text ${
						props.side
							? props.side_type === 'type1'
								? 'side'
								: props.side_type === 'type2'
								? 'side2'
								: ''
							: ''
					}`}
				>
					{props.label && (
						<span className="fs-l fw500 label">
							{props.required ? <b className="fs-l"> *</b> : <></>}
							{props.label}
						</span>
					)}

					<div
						className={`scale-wrap ${focus ? 'focus' : ''} ${
							props.disabled ? 'disabled' : ''
						}`}
					>
						<input
							style={props.blur ? { color: '#8b8b9e', cursor: 'default' } : {}}
							id={props.id ?? ''}
							name={props.name ? props.name : ''}
							type={props.type}
							pattern={props.pattern}
							placeholder={props.placeholder}
							maxLength={props.max_length}
							{...(props.default_value
								? { defaultValue: props.default_value ?? '' }
								: { value: props.value })}
							onChange={props.onChange}
							readOnly={props.readonly}
							disabled={props.disabled}
							onFocus={() => setFocus(true)}
							onBlur={() => setFocus(false)}
							onClick={() => {
								props.onClick ? props.onClick() : {};
							}}
							autoComplete="off"
						/>
					</div>
					{props.img_search && !props.gameSearch ? (
						<>
							<i className="img_search"></i>
							<i className="img_delete"></i>
						</>
					) : (
						<></>
					)}
					{props.img_search && props.gameSearch ? (
						<>
							<i className="img_search"></i>
							{props.img_delete && (
								<i
									className="img_delete"
									onClick={() => props.onClickSearchDelete()}
								></i>
							)}
						</>
					) : (
						<></>
					)}
				</div>
				{props.side ? <>{props.side}</> : <></>}
			</div>
			{props.error ? (
				<span className="error fs-s fw500">{props.error}</span>
			) : (
				<></>
			)}
		</div>
	);
}
