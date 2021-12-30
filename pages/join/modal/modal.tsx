import React, { useEffect } from 'react';

const Modal = ({ modalClose }) => {
	const onCloseModal = (e) => {
		console.log('e.target: ', e.target);
		console.log('e.tarcurrentTargetget: ', e.currentTarget);
		if (e.target === e.currentTarget) {
			modalClose();
		}
	};

	useEffect(() => {
		document.body.style.cssText = `
        position: fixed; 
        overflow-y: scroll;
        width: 100%;`;
		return () => {
			const scrollY = document.body.style.top;
			document.body.style.cssText = `position: ""; top: "";`;
			window.scrollTo(0, parseInt(scrollY || '0') * -1);
		};
	}, []);

	return (
		<div className="modal__container" onClick={onCloseModal}>
			<div className="modal">
				<div className="modal_terms">
					서비스 이용 약관 서비스 이용 약관 서비스 이용 약관 서비스 이용 약관
				</div>
			</div>
		</div>
	);
};

export default Modal;
