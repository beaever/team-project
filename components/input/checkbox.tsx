import React from 'react';

type CheckboxTypes = {
	id: string;
	name: string;
	className?: 'reverse' | 'navy';
	onChange?: React.ChangeEventHandler<HTMLInputElement>;
	value?: string | number;
	checked?: boolean;
};
export default function CheckBox(props: CheckboxTypes) {
	return (
		<div className="chekcbox_item">
			<input
				type="checkbox"
				id={props.id}
				name={props.name}
				value={props.value}
				onChange={props.onChange}
				checked={props.checked}
			/>
			<label htmlFor={props.id} className={props.className}></label>
		</div>
	);
}
