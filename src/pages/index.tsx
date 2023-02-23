import Content from '@/components/elements/content';
import Icons from '@/components/social/icons';
import Container from '@/components/ui/container';
import Layout from '@/components/ui/layout';
import Card from '@/features/contentful/components/card';
import { ProjectProps } from '@/features/contentful/types/data';
import Skills from '@/features/show-skills/components/skills';
import Head from 'next/head';
import Image from 'next/image';
import getContentfulData from '../lib/getContentfulData';

export default function Home({ projects }: { projects: ProjectProps[] }) {
	return (
		<>
			<Head>
				<title>Alen Demirov</title>
			</Head>
			<Layout>
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
							<Image
								className='aspect-video rounded-md object-cover'
								src={
									'https://images.ctfassets.net/ya9ebrot0car/5VCcnwJ1DbijuBSSzqFP36/c1c7a6f7f01121e9b8398f7d9394b42c/alen-demirov.jpg'
								}
								alt={'Alen Demirov'}
								width={800}
								height={400}
								priority={true}
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
					<Card projects={projects} />
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
			</Layout>
		</>
	);
}

export async function getStaticProps() {
	const data = await getContentfulData(`
		query {
			personalProjectsCollection {
				items {
					title
					slug
					image {
						title
						url
					}
					description
				}
			}
		}
	`);

	return {
		props: {
			projects: data.personalProjectsCollection.items,
		},
	};
}
