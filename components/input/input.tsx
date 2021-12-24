import { off } from 'process';
import React from 'react';
import Slider from 'react-slick';
import InputModel from '../../model/inputModel';

const calendar = require('../../static/img/icons/calendar.png');

import { click, monthFormat, numberFormat } from '../../shared/function';

const YEAR = new Date().getFullYear();

type STATE = {
	time_selector_render: boolean;
	hour: number;
	min: number;
	date_selector_render: boolean;
	month: number;
	date: number;
	year: number;
};

class Input extends React.Component<InputModel, STATE> {
	hour_ref: any;
	min_ref: any;
	month_ref: any;
	date_ref: any;
	year_ref: any;

	constructor(props: InputModel) {
		super(props);
		/* this bind */
		this.onClickOkByDate = this.onClickOkByDate.bind(this);
		this.onClickOkByTime = this.onClickOkByTime.bind(this);
		this.onFocus = this.onFocus.bind(this);
		this.onFocusDate = this.onFocusDate.bind(this);
		this.onFocusFile = this.onFocusFile.bind(this);
		this.onFocusTime = this.onFocusTime.bind(this);

		/* initial state */
		this.state = {
			time_selector_render: false as boolean,
			hour: 0 as number,
			min: 0 as number,
			date_selector_render: false as boolean,
			month: 0 as number,
			date: 0 as number,
			year: 0 as number,
		};

		/* Ref Init */
		this.hour_ref = React.createRef();
		this.min_ref = React.createRef();

		this.month_ref = React.createRef();
		this.year_ref = React.createRef();
		this.date_ref = React.createRef();
	}

	componentDidMount() {
		// this.month_ref = this.month_ref.current
		// this.year_ref = this.year_ref.current
		// this.date_ref = this.date_ref.current
		// this.hour_ref = this.hour_ref.current
		// this.min_ref = this.min_ref.current
	}

	onFocusTime(e: React.FocusEvent<HTMLInputElement>) {
		e.currentTarget.blur();

		if (this.state.time_selector_render) {
			this.setState({ time_selector_render: false });
			return;
		}

		if (this.props.value) {
			const h = parseInt(this.props.value?.toString().split(':')[0]) - 1;
			const m = parseInt(this.props.value.toString().split(':')[1]) / 5 - 1;

			this.hour_ref.current.slickGoTo(h, false);
			this.setState({ hour: h + 1 });
			this.min_ref.current.slickGoTo(m, true);
			this.setState({ min: (m + 1) * 5 });

			this.setState({ time_selector_render: true });
		}
	}

	onFocusDate(e: React.FocusEvent<HTMLInputElement>) {
		e.currentTarget.blur();

		if (this.state.date_selector_render) {
			this.setState({ date_selector_render: false });
			return;
		}

		if (this.props.value !== undefined) {
			if (this.props.value === '') {
				const currentDate = new Date();

				this.year_ref.current.slickGoTo(-1, false);
				this.month_ref.current.slickGoTo(currentDate.getMonth(), false);
				this.date_ref.current.slickGoTo(currentDate.getDate() - 2, false);

				this.setState({
					month: currentDate.getMonth() + 1,
					date: currentDate.getDate(),
					year: YEAR,
				});
			} else {
				const y = parseInt(this.props.value.toString().split('-')[0]);
				const m = parseInt(this.props.value.toString().split('-')[1]);
				const d = parseInt(this.props.value.toString().split('-')[2]);

				this.month_ref.current.slickGoTo(m - 1, false);
				this.date_ref.current.slickGoTo(d - 2, false);
				this.year_ref.current.slickGoTo(y - YEAR - 1, false);
				this.setState({ month: m, date: d, year: y });
			}
			this.setState({ date_selector_render: true });
		}
	}

	onFocusFile(e: React.FocusEvent<HTMLInputElement>) {
		e.currentTarget.blur();
		click(`#file_${this.props.id}`);
	}

	onFocus(e: React.FocusEvent<HTMLInputElement>) {
		if (this.props.onFocus) {
			this.props.onFocus(e);
		} else {
			if (this.props.type === 'time') {
				this.onFocusTime(e);
			} else if (this.props.type === 'date') {
				this.onFocusDate(e);
			} else if (this.props.type === 'file') {
				this.onFocusFile(e);
			}
		}
	}

	onClickOkByTime() {
		const final = `${numberFormat(this.state.hour)}:${numberFormat(
			this.state.min,
		)}`;

		this.props.setForm({
			...this.props.form,
			[this.props.id ?? '']: final,
		});

		this.setState({
			time_selector_render: false,
		});
	}

	onClickOkByDate() {
		const month =
			this.state.month < 10 ? '0' + this.state.month : this.state.month;
		const day = this.state.date < 10 ? '0' + this.state.date : this.state.date;

		const final = `${this.state.year}-${month}-${day}`;
		this.props.setForm({
			...this.props.form,
			[this.props.id ?? '']: final,
		});

		this.setState({
			date_selector_render: false,
		});
	}

	shouldComponentUpdate(nextProps: InputModel, nextState: STATE) {
		/* props value값 변경되었을 때 re-render */
		if (nextProps.value !== this.props.value) {
			return true;
		}

		/* selector_render값 변경되었을 때 re-render */
		if (nextState.date_selector_render !== this.state.date_selector_render) {
			return true;
		}

		if (nextState.time_selector_render !== this.state.time_selector_render) {
			return true;
		}

		if (nextProps.warning_text !== this.props.warning_text) {
			return true;
		}

		if (nextProps.right_button !== this.props.right_button) {
			return true;
		}

		return false;
	}

	componentDidUpdate(prevProps: InputModel, prevState: STATE) {
		/* date_selector_render 변경 시 */
		if (this.state.date_selector_render !== prevState.date_selector_render) {
			if (window.innerWidth <= 768) {
				document.body.style.overflow = this.state.date_selector_render
					? 'hidden'
					: 'auto';
			}
		}

		/* time_selector_render 변경 시  */
		if (this.state.time_selector_render !== prevState.time_selector_render) {
			if (window.innerWidth <= 768) {
				document.body.style.overflow = this.state.time_selector_render
					? 'hidden'
					: 'auto';
			}
		}
	}

	render() {
		return (
			<div
				style={{
					marginTop:
						this.props.margin && this.props.margin.top
							? this.props.margin.top
							: 0,
					marginBottom:
						this.props.margin && this.props.margin.bottom
							? this.props.margin.bottom
							: 0,
					marginLeft:
						this.props.margin && this.props.margin.left
							? this.props.margin.left
							: 0,
					marginRight:
						this.props.margin && this.props.margin.right
							? this.props.margin.right
							: 0,
					position: 'relative',
				}}
				className={this.props.parent_className ?? ''}
			>
				{this.props.label && <p className="input_label">{this.props.label}</p>}
				<div className="rel">
					<input
						type={this.props.type === 'password' ? 'password' : 'text'}
						value={this.props.value ?? ''}
						onKeyUp={this.props.onKeyup}
						onChange={
							this.props.type === 'file' ? () => {} : this.props.onChange
						}
						onBlur={this.props.onBlur}
						className={this.props.className ?? ''}
						id={this.props.id ?? ''}
						name={this.props.name ?? ''}
						maxLength={this.props.maxLength}
						disabled={this.props.disabled}
						onFocus={this.onFocus}
						style={this.props.right_button ? { width: '68%' } : {}}
						placeholder={this.props.placeholder ?? ''}
						autoComplete="off"
					/>
					{this.props.right_button && (
						<button
							style={{ width: '30%' }}
							className={`btn point_btn floatR ${
								this.props.right_button.className ?? ''
							}`}
							onClick={this.props.right_button.onClick}
							disabled={this.props.right_button.disabled}
						>
							{this.props.right_button.text}
						</button>
					)}
					{this.props.type === 'date' && (
						<img
							src={calendar.default.src}
							style={{ right: 15, width: 15 }}
							className="abs_top_center"
							alt="캘린더 아이콘"
						/>
					)}
				</div>
				{this.props.warning_text && (
					<p className="input_label color_red" style={{ marginTop: 7 }}>
						{this.props.warning_text}
					</p>
				)}
				{
					/*
					 * 타임 셀렉터
					 */
					<div
						className="time-wrap"
						style={{
							display: this.state.time_selector_render ? 'block' : 'none',
						}}
					>
						<div className="time-selector">
							<div className="time-area">
								<div className="dis_ib hour-area">
									<Slider
										infinite={true}
										vertical={true}
										dots={false}
										slidesToScroll={1}
										verticalSwiping={true}
										swipeToSlide={true}
										ref={this.hour_ref}
										speed={0.1}
										afterChange={(c) =>
											this.setState({ hour: c + 1 > 23 ? 0 : c + 1 })
										}
									>
										{Array(24)
											.fill(1)
											.map((item, index) => index)
											.map((item, index) => {
												return (
													<div className="piece mulish fs_13" key={item}>
														{numberFormat(item)}
													</div>
												);
											})}
									</Slider>
									<span />
									<span />
									<span />
								</div>
								<div className="dis_ib min-area">
									<Slider
										infinite={true}
										vertical={true}
										dots={false}
										slidesToScroll={1}
										slidesToShow={3}
										verticalSwiping={true}
										swipeToSlide={true}
										ref={this.min_ref}
										speed={0.1}
										afterChange={(c) =>
											this.setState({ min: (c + 1 > 11 ? 0 : c + 1) * 5 })
										}
									>
										{Array(12)
											.fill(1)
											.map((item, index) => index * 5)
											.map((item, index) => {
												return (
													<div className="piece mulish fs_13" key={item}>
														{numberFormat(item)}
													</div>
												);
											})}
									</Slider>
									<span />
									<span />
									<span />
								</div>
							</div>
							<div className="btn_wrap" style={{ width: 150 }}>
								<button
									className="floatL btn wd_48per fs_12 cancel_btn smaller"
									onClick={() => this.setState({ time_selector_render: false })}
								>
									취소
								</button>
								<button
									className="floatR btn wd_48per fs_12 smaller"
									onClick={this.onClickOkByTime}
								>
									확인
								</button>
							</div>
						</div>
					</div>
				}
				{
					/*
					 * 데이트 셀렉터
					 */
					<div
						className="date-wrap"
						style={{
							display: this.state.date_selector_render ? 'block' : 'none',
						}}
					>
						<div className="date-selector">
							<div className="date-area">
								<div className="dis_ib">
									<Slider
										infinite={true}
										vertical={true}
										dots={false}
										slidesToScroll={1}
										verticalSwiping={true}
										swipeToSlide={true}
										ref={this.year_ref}
										speed={0.1}
										afterChange={(c) =>
											this.setState({ year: c + 1 > 4 ? YEAR : YEAR + c + 1 })
										}
									>
										{Array(5)
											.fill(1)
											.map((item, index) => YEAR + index)
											.map((item, index) => {
												return (
													<div className="piece mulish fs_13" key={item}>
														{item}
													</div>
												);
											})}
									</Slider>
									<span></span>
									<span></span>
									<span></span>
								</div>
								<div className="dis_ib">
									<Slider
										infinite={true}
										vertical={true}
										dots={false}
										slidesToScroll={1}
										verticalSwiping={true}
										swipeToSlide={true}
										ref={this.month_ref}
										speed={0.1}
										afterChange={(c) => this.setState({ month: c + 1 })}
									>
										{Array(12)
											.fill(1)
											.map((item, index) => index)
											.map((item, index) => {
												return (
													<div className="piece mulish fs_13" key={item}>
														{monthFormat(item)}
													</div>
												);
											})}
									</Slider>
									<span></span>
									<span></span>
									<span></span>
								</div>
								<div className="dis_ib">
									<Slider
										infinite={true}
										vertical={true}
										dots={false}
										slidesToScroll={1}
										verticalSwiping={true}
										swipeToSlide={true}
										ref={this.date_ref}
										speed={0.1}
										afterChange={(c) =>
											this.setState({ date: c + 2 > 31 ? 1 : c + 2 })
										}
									>
										{Array(31)
											.fill(1)
											.map((item, index) => index + 1)
											.map((item, index) => {
												return (
													<div className="piece mulish fs_13" key={item}>
														{`${item}일`}
													</div>
												);
											})}
									</Slider>
									<span></span>
									<span></span>
									<span></span>
								</div>
							</div>
							<div className="btn_wrap" style={{ width: 150 }}>
								<button
									className="floatL btn wd_48per fs_12 cancel_btn smaller"
									onClick={() => this.setState({ date_selector_render: false })}
								>
									취소
								</button>
								<button
									className="floatR btn wd_48per fs_12 smaller"
									onClick={this.onClickOkByDate}
								>
									확인
								</button>
							</div>
						</div>
					</div>
				}
				{
					/*
					 * 파일 선택기
					 */
					this.props.type === 'file' && (
						<input
							type="file"
							className="none"
							onChange={this.props.onChange}
							id={`file_${this.props.id}`}
						/>
					)
				}
			</div>
		);
	}
}

export default Input;
