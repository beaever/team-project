import React from 'react';
import { MarginModel } from '../../model/layout/margin-model';

const MarginTop = (props: MarginModel) => {
	return (
		<>
			<div style={{ marginTop: props.margin }} />
		</>
	);
};

export default MarginTop;
