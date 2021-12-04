import React from 'react';
type MainButtonTypes = {
	title: string | JSX.Element;
	color: 'prime' | 'navy' | 'cancel' | 'ink' | 'navy-reverse' | 'disabled';
	types: 'type1' | 'type2' | 'type3';
	onClick?: React.MouseEventHandler<HTMLButtonElement>;
	price?: boolean | string; //가격
	front_diamond?: boolean; //타이틀 앞에 다이아 아이콘
	router?: any;
	className?: string;
	twin?: boolean;
	disabled?: boolean;
};
export default function MainButton(props: MainButtonTypes) {
	const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		if (props.onClick) {
			props.onClick(e);
		}
	};

	return (
		<>
			{props.types === 'type3' ? (
				<div className="main_button_wrap">
					<button
						type="button"
						className={`main_button scd6 type3 ${
							props.color === 'prime'
								? 'prime'
								: props.color === 'navy'
								? 'navy'
								: props.color === 'ink'
								? 'ink'
								: props.color === 'cancel'
								? 'cancel'
								: props.color === 'navy-reverse'
								? 'navy-reverse'
								: props.color === 'disabled'
								? 'disabled'
								: ''
						}
       ${props.className}
      `}
						onClick={(e) => onClick(e)}
						disabled={props.disabled ? props.disabled : false}
					>
						{props.title}
						{props.price ? (
							<>
								<div className="diamond scd6">
									<img src="/img/icon/diamond.png" alt="" />
									{props.price}
								</div>
							</>
						) : (
							<></>
						)}
						{}
					</button>
				</div>
			) : (
				<button
					type="button"
					className={`main_button scd6 ${
						props.color === 'prime'
							? 'prime'
							: props.color === 'navy'
							? 'navy'
							: props.color === 'ink'
							? 'ink'
							: props.color === 'cancel'
							? 'cancel'
							: props.color === 'navy-reverse'
							? 'navy-reverse'
							: props.color === 'disabled'
							? 'disabled'
							: ''
					}
      ${
				props.types === 'type1'
					? 'type1'
					: props.types === 'type2'
					? 'type2'
					: ''
			} ${props.className}
      `}
					onClick={(e) => onClick(e)}
					disabled={props.disabled ? props.disabled : false}
				>
					{props.front_diamond ? (
						<img
							src="/img/icon/diamond.png"
							alt=""
							style={{ width: '15px', height: '12px', marginRight: '8px' }}
						/>
					) : (
						<></>
					)}
					{props.title}
					{props.price ? (
						<>
							<div className="diamond scd6">
								<img src="/img/icon/diamond.png" alt="" />
								{props.price}
							</div>
						</>
					) : (
						<></>
					)}
					{}
				</button>
			)}
		</>
	);
}
