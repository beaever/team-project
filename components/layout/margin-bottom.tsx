import React from 'react';
import { MarginModel } from '../../model/layout/margin-model';

const MarginBottom = (props: MarginModel) => {
	return (
		<>
			<div style={{ marginBottom: props.margin }} />
		</>
	);
};

export default MarginBottom;
