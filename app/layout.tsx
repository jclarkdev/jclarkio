import "../global.css";
import LocalFont from "@next/font/local";
import { Metadata } from "next";
import { Analytics } from "./components/analytics";

export const metadata: Metadata = {
	title: {
		default: "j. clark",
		template: "%s | j. clark",
	},
	description: "Shopify Frontend Developer at ECOM DEPT, Musician, and Producer",
	openGraph: {
		title: "j. clark",
		description:
			"Shopify Frontend Developer at ECOM DEPT, Musician, and Producer",
		url: "https://jclark.io",
		siteName: "j. clark",
		images: [
			{
				url: "https://jclark.io/og.png",
				width: 1920,
				height: 1080,
			},
		],
		locale: "en-US",
		type: "website",
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
	twitter: {
		title: "j clark",
		card: "summary_large_image",
	},
	icons: {
		shortcut: "/favicon.png",
	},
};

const crimson = LocalFont({
	src: "../public/fonts/CrimsonText-Regular.ttf",
	variable: "--font-crimson",
});

const bebas = LocalFont({
	src: "../public/fonts/bebas-neue.ttf",
	variable: "--font-bebas",
});

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className={[crimson.variable, bebas.variable].join(" ")}>
			<head>
				<Analytics />
				<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
			</head>
			<body
				className={`bg-black ${
					process.env.NODE_ENV === "development" ? "debug-screens" : undefined
				}`}
			>
				{children}
			</body>
		</html>
	);
}
