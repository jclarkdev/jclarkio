"use client";
import Link from "next/link";
import React, { useEffect } from 'react';
import { FileDown, MessageCircle } from "lucide-react";
import Particles from "./components/particles";
import CTA from "./components/cta";
import Footer from "./components/footer";

const navigation = [
	{ name: "Notes", href: "/notes" },
	{ name: "Projects", href: "/projects" },
];

export default function Home() {

	useEffect(() => {
		function autoplay() {
		  setTimeout(() => {
			const button = document.querySelector('[data-testid="play-pause-button"]') || false;
			if (button) {
			  console.log('Click', button);
			  (button as HTMLElement).click();
			}
		  }, 999);
		}
	
		document.addEventListener('DOMContentLoaded', autoplay);
	
		return () => {
		  // Cleanup, if needed
		  document.removeEventListener('DOMContentLoaded', autoplay);
		};
	}, []);

	return (
		<div className="flex flex-col items-center justify-start overflow-y-auto min-h-screen bg-gradient-to-tl from-black via-zinc-600/20 to-black">
			<Particles
				className="absolute inset-0 -z-10"
				quantity={500}
			/>
			<div className="flex flex-col items-center justify-center animate-fade-in">
				<nav className="my-16">
					<ul className="flex flex-wrap items-center justify-center gap-4">
						{navigation.map((item) => (
							<Link
								key={item.href}
								href={item.href}
								className="text-lg duration-500 text-zinc-500 hover:text-zinc-300"
							>
								{item.name}
							</Link>
						))}
					</ul>
				</nav>

				<h1 className="z-10 text-8xl text-transparent duration-1000 bg-white cursor-default text-edge-outline font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text image-underline">
					j clark
				</h1>

				<div className="my-16 text-center">
					<h2 className="text-xl text-zinc-400 mx-6">
						Shopify Frontend Developer at{" "}
						<Link
							target="_blank"
							href="https://ecomdepartment.com"
							className="underline duration-500 hover:text-zinc-300"
						>
							ECOM DEPT
						</Link>
						<wbr /> crafting digital experiences for top-tier brands.{" "}
						<Link
							target="_blank"
							href="https://soundcloud.com/zenecamusic"
							className="underline duration-500 hover:text-zinc-300"
						>
							Musician and producer
						</Link>{" "}
						in my free time.
					</h2>
				</div>

				<div className="my-4 text-center flex flex-row gap-4">
					<a className="flex items-center justify-center border border-zinc-400 bg-transparent border-image--hover text-zinc-200 py-2 px-4" href="/Jordan-Clark-Resume.pdf" download>
						<FileDown />
						<span className="pl-2">Download Resume</span>
					</a>
					<a className="flex items-center justify-center border border-zinc-400 bg-transparent border-image--hover text-zinc-200 py-2 px-4" href="https://linkedin.com/in/jclarkdev">
						<MessageCircle />
						<span className="pl-2">Contact Me</span>
					</a>
				</div>

				<div className="text-center flex flex-row gap-4 w-full my-16 md:my-32 px-6 md:px-0 hidden md:block">
					<iframe src="https://open.spotify.com/embed/artist/0NbnGlKiAGrxwGIWEgX45U?utm_source=generator&theme=0" width="100%" height="152" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
				</div>

				<div className="text-center flex flex-row gap-4 w-full my-16 md:my-32 px-6 md:px-0 md:hidden">
					<iframe className="rounded-none" src="https://open.spotify.com/embed/artist/0NbnGlKiAGrxwGIWEgX45U?utm_source=generator&theme=0" width="100%" height="500" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
				</div>

			</div>

		</div>
	);
}
