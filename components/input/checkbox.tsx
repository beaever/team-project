import React from 'react';
import { useState } from 'react';
import Modal from '../../pages/join/modal/modal';

type CheckboxTypes = {
	id: string;
	name: string;
	className?: 'reverse' | 'navy';
	onChange?: React.ChangeEventHandler<HTMLInputElement>;
	value?: string | number;
	checked?: boolean;
};
export default function CheckBox(props: CheckboxTypes) {
	const [modalOpen, setModalOpen] = useState(false);
	const modalClose = () => {
		setModalOpen(!modalOpen);
	};

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
			<button onClick={modalClose}>이용약관보기</button>
			{modalOpen && <Modal modalClose={modalClose}></Modal>}
		</div>
	);
}
