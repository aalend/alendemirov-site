import Content from '@/components/elements/content';
import Container from '@/components/ui/container';
import Layout from '@/components/ui/layout';
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import Head from 'next/head';
import remarkGfm from 'remark-gfm';
import getContentfulData from '@/lib/getContentfulData';
import Center from './components/center';
import Icon from './components/icon';
import Splitter from './components/splitter';

const components = {
	Center,
	Icon,
	Splitter,
};

export default function PersonalProjects({ mdxContent }: any) {
	return (
		<>
			<Head>
				<title>Alen Demirov</title>
			</Head>
			<Layout>
				<section className='prose mx-auto mb-12 max-w-3xl prose-thead:border-0 prose-tr:border-0'>
					<Container>
						<article>
							<MDXRemote {...mdxContent} components={components} lazy />
						</article>
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

	const { content } = project;
	const mdxContent = await serialize(content, {
		mdxOptions: {
			remarkPlugins: [remarkGfm],
			format: 'mdx',
		},
	});

	return {
		props: {
			mdxContent,
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
