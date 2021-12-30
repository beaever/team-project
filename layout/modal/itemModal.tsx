import React, { useEffect } from 'react';

const ItemModal = ({ modalClose }) => {
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
	      width: 100%;`;
		return () => {
			const scrollY = document.body.style.top;
			document.body.style.cssText = '';
			window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
		};
	}, []);

	return (
		<div className="modal__container" onClick={onCloseModal}>
			<div className="modal_itemContainer">
				<div className="modal_itemListBox">
					<div className="modal_itemImg">
						<img src="img/옷1.png" alt="" />
						<img src="img/옷1.png" alt="" />
					</div>
					<div className="modal_itemInfo">
						<h3>브랜드명</h3>
						<span>상품명</span>
						<div className="modal_itemTextInfo">
							대충 상품설명하는 글대충 상품설명하는 글대충 상품설명하는 글대충
							상품설명하는 글대충 상품설명하는 글대충 상품설명하는 글대충
							상품설명하는 글대충 상품설명하는 글
						</div>
						<span>#해쉬태그#해쉬태그#해쉬태그#해쉬태그</span>
						<div className="modal_btnBox">
							<button className="modal_btnTerm">인증마크</button>
							<button className="modal_btn">문의하기</button>
							<button className="modal_btn">바로구매</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ItemModal;
