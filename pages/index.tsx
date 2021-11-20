import { useRouter } from "next/dist/client/router";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
// Style
import styles from "../styles/Home.module.css";

export default function Home() {
	// 기본적으로 선언할 내장함수
	const router = useRouter();
	// useState
	const [state, setState] = useState<any>(""); // 임시 예제
	// Function
	const onMove = () => {
		router.push("/login");
	};

	// useEffect
	useEffect(() => {}, []);

	// RETURN
	return <div onClick={() => onMove()}>HOME</div>;
}
