import { useState } from 'react';
import lodash from 'lodash';

type SelectBoxTypes = {
	options: { label: string; value: any }[];
	value: any;
	onClickItem: Function;
};
export default function SelectBox(props: SelectBoxTypes) {
	const [open, setOpen] = useState(false);

	const _onClickItem = (val: any) => {
		const sel = lodash.find(props.options, (op) => op.value === val);

		if (sel) {
			props.onClickItem(sel);
		}
		setOpen(false);
	};

	return (
		<div className="select-box">
			<div
				className={`select-bar ${open ? 'active' : ''}`}
				onClick={() => setOpen(!open)}
			>
				{
					lodash.find(props.options, (op) => {
						if (op.value === props.value) {
							return true;
						} else {
							return false;
						}
					}).label
				}
				<img src="/img/icon/arrow-bottom.png" alt="" />
			</div>
			<div className={`option-list-wrap ${open ? 'visible' : '_hide'}`}>
				<ul className={`option-list ${open ? '_visible' : '_hide'}`}>
					{props.options.map((item) => {
						return (
							<li onClick={() => _onClickItem(item.value)} key={item.value}>
								{item.label}
							</li>
						);
					})}
				</ul>
			</div>
		</div>
	);
}
