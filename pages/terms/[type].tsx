import { GetServerSideProps } from 'next';
import { useRouter } from 'next/dist/client/router';
import React, { useEffect } from 'react';
import useWidth from '../../hooks/useWitdh';
import { termsText, termsTitle } from '../../shared/function';

const Terms = (props) => {
	const router = useRouter();
	const { mediaQuery } = useWidth();
	const router_type = props.type as string;

	useEffect(() => {
		console.log(router_type);
	}, []);

	return (
		<>
			<section className="termPage">
				<div className="termConainer">
					<h2>{termsTitle(router_type)}</h2>
					<div>
						<p dangerouslySetInnerHTML={{ __html: termsText(router_type) }}></p>
					</div>
				</div>
			</section>
		</>
	);
};

export const getServerSideProps: GetServerSideProps = async (context) => {
	//pageProps로 넘길 데이터
	return { props: { type: context.query.type } };
};

export default Terms;
