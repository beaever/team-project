import { useRouter } from "next/dist/client/router";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
	const router = useRouter();

	const onMove = () => {
		router.push("/login");
	};

	return <div onClick={() => onMove()}>HOME</div>;
}
