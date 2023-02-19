import Content from '@/components/elements/content';
import Photo from '@/components/elements/photo';
import Container from '@/components/ui/container';
import Layout from '@/components/ui/layout';
import Head from 'next/head';
import getContentfulData from './api/getContentfulData';

export default function PersonalProjects({ project }: any) {
	return (
		<>
			<Head>
				<title>Alen Demirov - {project.title}</title>
			</Head>
			<Layout>
				<section className='prose mx-auto mb-12 max-w-3xl'>
					<Container>
						<h1>{project.title}</h1>
						<p>{project.description}</p>
						<Photo
							className='rounded-md'
							src={project.image.url}
							alt={project.image.title}
						></Photo>
						<article>{project.content}</article>
					</Container>
				</section>
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

export async function getStaticProps({ params }: any) {
	const { personalProject } = params;

	const data = await getContentfulData(
		`
			query ($slug: String!) {
				personalProjectsCollection(where: { slug: $slug }, limit: 1) {
					items {
						title
						slug
						image {
							title
							url
						}
						description
						content
					}
				}
			}
		`,
		{
			slug: personalProject,
		}
	);

	const [project] = data.personalProjectsCollection.items;

	const contentSource = project.content;

	return {
		props: {
			project,
		},
	};
}

export async function getStaticPaths() {
	const data = await getContentfulData(`
		query {
			personalProjectsCollection {
				items {
					slug
				}
			}
		}
	`);

	const projectsSlugs = data.personalProjectsCollection.items;
	const paths = projectsSlugs.map(({ slug }: { slug: string }) => {
		return {
			params: {
				personalProject: slug,
			},
		};
	});

	return {
		paths,
		fallback: true,
	};
}
