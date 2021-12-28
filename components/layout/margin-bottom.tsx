import React from 'react';
import { MarginModel } from '../../model/layout/margin-model';

const MarginTop = (props: MarginModel) => {
	return (
		<>
			<div style={{ marginBottom: props.margin }} />
		</>
	);
};

export default MarginTop;
