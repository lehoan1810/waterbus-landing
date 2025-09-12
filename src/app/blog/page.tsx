/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function BlogIndexPage() {
	const router = useRouter();

	useEffect(() => {
		router.push("/");
	}, []);

	return <></>;
}
