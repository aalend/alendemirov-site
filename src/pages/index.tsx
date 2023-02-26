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
						<div className='my-24 grid gap-8'>
							<div className='flex items-center gap-8'>
								<div className='h-px w-28 bg-gray-900'></div>
								<Icons width={20} />
							</div>
							<div className='grid gap-4'>
								<h1 className='text-5xl'>Hello, I&apos;m Alen.</h1>
								<p className='text-xl text-gray-700'>
									I&apos;m a self-taught front-end developer with a passion for creating websites.
								</p>
							</div>
							<Image
								className='aspect-video rounded-md object-cover'
								src={
									'https://ik.imagekit.io/hhrhmkcoa/alendemirov-assets/pexels-justin-shaifer-1222271.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1677414527070'
								}
								alt={'Alen Demirov'}
								width={800}
								height={400}
								priority={true}
							/>
							<p>
								I&apos;ve acquired my knowledge through exploration and experimentation with code,
								as well as by keeping up with the latest trends and technologies through blog posts
								and YouTube videos.
							</p>
						</div>
					</Container>
				</section>
				<Content
					heading='Skills'
					subHeading="In terms of my skills, I have experience with a range of front-end development tools, including HTML, CSS, JavaScript, and libraries such as React. I also have a solid understanding of web design principles, and I'm constantly expanding my skillset through personal projects and online courses."
				>
					<Skills />
				</Content>
				<Content
					heading="What I've been working on"
					subHeading='As a front-end developer, my goal is to create websites that are not only aesthetically pleasing, but also highly functional and user-friendly. You can see some of my recent work, which showcases my ability to create websites that are tailored to the unique needs of each client. '
				>
					<Card projects={projects} />
				</Content>
				<Content
					heading="Let's build something together"
					subHeading="So if you're looking for a front-end developer who is passionate about creating clean, functional, and responsive websites, look no further! Get in touch with me today to discuss your project and let's build something great together.
					"
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
		query LoadAllProjects {
			personalProjectsCollection {
				items {
					title
					slug
					description
					image {
						title
						url
						width
						height
					}
				}
			}
		}
	`);

	const { items } = data.personalProjectsCollection;

	return {
		props: {
			projects: items,
		},
	};
}
