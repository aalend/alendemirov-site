import Content from '@/components/elements/content';
import Container from '@/components/ui/container';
import Layout from '@/components/ui/layout';
import getContentfulData from '@/lib/getContentfulData';
import Head from 'next/head';
import Image from 'next/image';

type WebStackImagesProps = {
	title: string;
	url: string;
	width: number;
	height: number;
};

export default function PersonalProjects({ item }: any) {
	console.log(item);
	return (
		<>
			<Head>
				<title>Alen Demirov</title>
			</Head>
			<Layout>
				<section className='prose mx-auto mb-24 max-w-3xl prose-thead:border-0 prose-tr:border-0'>
					<Container>
						<article className='mt-12'>
							<h1>{item.title}</h1>
							<p>{item.description}</p>
							<Image
								className=' rounded-md object-cover'
								src={item.image.url}
								alt={item.image.title}
								width={item.image.width}
								height={item.image.height}
								priority={true}
							/>
							<h2>Project Purpose And Goal</h2>
							<p>{item.projectPurposeAndGoal}</p>
							<div className='flex flex-col-reverse gap-8 md:flex-row'>
								<div className='flex basis-1/2 flex-col items-center justify-center gap-8'>
									{item.webStackImagesCollection.items.map(
										(img: WebStackImagesProps, i: number) => {
											return (
												<div
													key={i}
													className='flex w-40 items-center gap-4 rounded-md border py-2 px-4 text-center shadow-md'
												>
													<Image
														className='m-0'
														src={img.url}
														alt={img.title}
														width={img.width}
														height={img.height}
														priority={true}
													/>
													<span>{img.title}</span>
												</div>
											);
										}
									)}
								</div>
								<div className='basis-1/2'>
									<h2>Web Stack and Explanation</h2>
									<p>{item.webStackAndExplanation}</p>
								</div>
							</div>
							<h2>Problems and Thought Process</h2>
							<p>{item.problemsAndThoughtProcess}</p>
							<h2>Lessons Learned</h2>
							<p>{item.lessonsLearned}</p>
						</article>
					</Container>
				</section>
				<Content
					heading="Let's build something together"
					subHeading="So if you're looking for a front-end developer who is passionate about creating clean, functional, and responsive websites, look no further! Get in touch with me today to discuss your project and let's build something great together."
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
	const { project } = params;

	const data = await getContentfulData(
		`
			query LoadProject($slug: String!) {
				personalProjectsCollection(where: { slug: $slug }, limit: 1) {
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
						projectPurposeAndGoal
						webStackImagesCollection {
							items {
								title
								url
								width
								height
							}
						}
						webStackAndExplanation
						problemsAndThoughtProcess
						lessonsLearned
					}
				}
			}
		`,
		{
			slug: project,
		}
	);

	const { items } = data.personalProjectsCollection;
	const [item] = items;

	return {
		props: {
			item,
		},
	};
}

export async function getStaticPaths() {
	const data = await getContentfulData(`
		query LoadProjectPaths{
			personalProjectsCollection {
				items {
					slug
				}
			}
		}
	`);

	const { items } = data.personalProjectsCollection;
	const paths = items.map(({ slug }: { slug: string }) => {
		return {
			params: {
				project: slug,
			},
		};
	});

	return {
		paths,
		fallback: false,
	};
}
