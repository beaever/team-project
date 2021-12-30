import { useState } from 'react';
import ItemModal from './modal/itemModal';

const ItemList = () => {
	const [modalOpen, setModalOpen] = useState(false);
	const modalClose = () => {
		setModalOpen(!modalOpen);
	};

	return (
		<section className="itemListContainer">
			<div className="item_inner">
				<ul className="item_ul">
					<li className="item_li">
						<div className="item_listBox">
							<button onClick={modalClose}>
								<img src="img/jordan.svg" alt="" />
								<h3>브랜드</h3>
								<span className="item_name">상품명</span>
								<span className="item_price">가격</span>
							</button>
							{modalOpen && <ItemModal modalClose={modalClose}></ItemModal>}
						</div>
					</li>

					<li className="item_li">
						<div className="item_listBox">
							<button onClick={modalClose}>
								<img src="img/jordan.svg" alt="" />
								<h3>브랜드</h3>
								<span className="item_name">상품명</span>
								<span className="item_price">가격</span>
							</button>
							{modalOpen && <ItemModal modalClose={modalClose}></ItemModal>}
						</div>
					</li>

					<li className="item_li">
						<div className="item_listBox">
							<button onClick={modalClose}>
								<img src="img/jordan.svg" alt="" />
								<h3>브랜드</h3>
								<span className="item_name">상품명</span>
								<span className="item_price">가격</span>
							</button>
							{modalOpen && <ItemModal modalClose={modalClose}></ItemModal>}
						</div>
					</li>

					<li className="item_li">
						<div className="item_listBox">
							<button onClick={modalClose}>
								<img src="img/jordan.svg" alt="" />
								<h3>브랜드</h3>
								<span className="item_name">상품명</span>
								<span className="item_price">가격</span>
							</button>
							{modalOpen && <ItemModal modalClose={modalClose}></ItemModal>}
						</div>
					</li>
				</ul>
			</div>
		</section>
	);
};

export default ItemList;
