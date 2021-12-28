import { useState, useEffect, useCallback } from 'react';

const useWidth = () => {
	const [width, setWidth] = useState(window.innerWidth);

	const is_320 = width <= 320;
	const is_340 = width <= 340;
	const is_480 = width <= 480;
	const is_750 = width <= 750;
	const is_mobile = width <= 768;
	const is_1024 = width <= 1024;
	const is_1080 = width <= 1080;

	const onResize = useCallback(() => {
		setWidth(window.innerWidth);
	}, []);

	useEffect(() => {
		onResize();
		window.addEventListener('resize', onResize);

		return () => {
			window.removeEventListener('resize', onResize);
		};
	}, []);

	return {
		width,
		is_320,
		is_340,
		is_480,
		is_750,
		is_mobile,
		is_1024,
		is_1080,
	};
};

export default useWidth;
