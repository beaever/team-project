import React, { FunctionComponentElement } from 'react';

export default interface HeaderModel {
	scroll_y?: number;
	is_lock?: boolean;
	title?: string;
	header_render_type: number;
	filter_btn_is_render?: boolean;
	filter_type?: number;
	filter_data?: any;
	filter_click?: React.MouseEventHandler;
	right_button?: JSX.Element;
	match?: any;
	logout?: any;
	getType?: (type: string) => void;
}
