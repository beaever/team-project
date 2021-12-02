import { useRouter } from "next/dist/client/router";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import styled from "styled-components";

// Style
import styles from "../styles/Home.module.css";

const Div = styled.div `
  width: 100%;
  height: 100vh;
  background-color: gray;
`


export default function Home() {
	// 기본적으로 선언할 내장함수
	const router = useRouter();
	// useState
	const [state, setState] = useState<any>(""); // 임시 예제
	// Function
	

	// useEffect
	useEffect(() => {}, []);

	// RETURN
	return (
		<>
			<Div>메인페이지</Div>
		</>
	);
	
}
