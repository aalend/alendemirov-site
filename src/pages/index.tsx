import Content from '@/components/elements/content';
import Photo from '@/components/elements/photo';
import Icons from '@/components/social/icons';
import Container from '@/components/ui/container';
import Skills from '@/features/show-skills/components/skills';
import Head from 'next/head';
import Link from 'next/link';

import avatar from '../assets/alendemirov.webp';
import SPAImg from '../assets/Screenshot_20230218_110505.png';

export default function Home() {
	return (
		<>
			<Head>
				<title>Alen Demirov</title>
			</Head>
			<header>
				<Container>
					<div className='py-12'>
						<Link href={'/'}>Alen</Link>
					</div>
				</Container>
			</header>
			<main id={'main-content'} tabIndex={-1}>
				<section>
					<Container>
						<div className='grid gap-8'>
							<div className='flex items-center gap-8'>
								<div className='h-px w-28 bg-gray-900'></div>
								<Icons width={20} />
							</div>
							<div className='grid gap-4'>
								<h1 className='text-4xl font-bold'>Hello, I&apos;m Alen.</h1>
								<p className='text-lg text-gray-700'>
									Front-end Developer. Lorem ipsum dolor sit amet consectetur adipisicing.
								</p>
							</div>
							<Photo
								className='aspect-video w-full rounded-md object-cover'
								src={avatar}
								alt={'Alen Demirov'}
							/>
							<p>
								Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id facilis, nulla fuga
								exercitationem delectus reprehenderit aut voluptatibus.
							</p>
						</div>
					</Container>
				</section>
				<Content
					heading='Skills'
					subHeading='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum alias praesentium neque fugiat rerum et corrupti dolorum!'
				>
					<Skills />
				</Content>
				<Content
					heading="What I've been working on"
					subHeading='Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates iste fugiat illo, exercitationem nobis earum quisquam mollitia.'
				>
					<div>
						<Photo
							src={SPAImg}
							alt={'Single page desing portfilio'}
							className='mb-8 w-full rounded-md shadow-md'
						/>
						<h3 className='mb-4 text-xl font-bold'>Single page design portfolio</h3>
						<p className='mb-2'>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, sed iure architecto
							odit iusto at laboriosam dignissimos.
						</p>
						<Link
							className='font-bold hover:underline hover:underline-offset-4'
							href={'/projects'}
							target={'_blank'}
						>
							View story
						</Link>
					</div>
				</Content>
				<Content
					className='bg-gray-50'
					heading="Let's build something together"
					subHeading='Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, voluptatum? Mollitia, ratione ipsa? Eligendi, consequuntur. Cumque, maxime?'
				>
					<a
						href='mailto:aalendemirov@gmail.com'
						className='font-bold hover:underline hover:underline-offset-4'
					>
						aalendemirov@gmail.com
					</a>
				</Content>
			</main>
			<footer className='bg-gray-50'>
				<Container>
					<div className='flex justify-between py-12'>
						<Link href={'/'}>Alen</Link>
						<Icons width={20} />
					</div>
				</Container>
			</footer>
		</>
	);
}
