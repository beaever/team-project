import React, { FunctionComponentElement } from 'react';

export default interface HeaderModel {
	member?: any;
	scroll_y?: number;
	is_lock?: boolean;
	title?: string;
	header_render_type?: number;
	right_button?: JSX.Element;
	match?: any;
	logout?: any;
	getType?: (type: string) => void;
}
