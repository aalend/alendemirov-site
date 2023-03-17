import Cta from '@/components/elements/cta';
import Container from '@/components/ui/container';
import getContentfulData from '@/lib/getContentfulData';
import Image from 'next/image';
import Link from 'next/link';

type WebStackImagesProps = {
	title: string;
	url: string;
	width: number;
	height: number;
};

type paramsProps = {
	params: {
		slug: string;
	};
};

type projectProps = {
	slug: string;
};

export const metadata = {
	title: 'Alen Demirov',
};

export async function generateStaticParams() {
	const { personalProjectsCollection } = await getContentfulData(`
  query LoadAllProjects {
    personalProjectsCollection {
      items {
        slug
      }
    }
  }
`);

	const { items } = personalProjectsCollection;

	return items.map((project: projectProps) => ({
		slug: project.slug,
	}));
}

export default async function PersonalProjects({ params: { slug } }: paramsProps) {
	const { personalProjectsCollection } = await getContentfulData(
		`
			query LoadProject($slug: String!) {
				personalProjectsCollection(where: { slug: $slug }, limit: 1) {
					items {
						title
						slug
						description
						stack
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
						supportImagesCollection {
							items {
								title
								url
								width
								height
							}
						}
						problemsAndThoughtProcess
						supportImage {
							title
							url
							width
							height
						}
						lessonsLearned
					}
				}
			}
		`,
		{
			slug: slug,
		}
	);

	const { items } = personalProjectsCollection;
	const [item] = items;

	console.log(item);

	return (
		<>
			<section className='prose mx-auto mb-24 max-w-3xl dark:prose-invert prose-thead:border-0 prose-tr:border-0'>
				<Container>
					<article className='mt-12'>
						<h1>{item.title}</h1>
						<p>{item.description}</p>
						<table>
							<thead>
								<tr>
									<th>Type</th>
									<th>Stack</th>
									<th>Live</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>{item.stack.type}</td>
									<td>
										{item.stack.stack.map((item: string, index: number) => (
											<div key={index} className={'mb-2'}>
												{item}
											</div>
										))}
									</td>
									<td>
										<Link href={item.stack.live} target={'_blank'} rel='noopener noreferrer'>
											Visit site
										</Link>
									</td>
								</tr>
							</tbody>
						</table>
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
							<div className='flex basis-1/3 flex-col items-center justify-center gap-8'>
								{item.webStackImagesCollection.items.map((img: WebStackImagesProps, i: number) => {
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
								})}
							</div>
							<div className='basis-2/3'>
								<h2>Web Stack and Explanation</h2>
								<p>{item.webStackAndExplanation}</p>
							</div>
						</div>
						<div className='mt-12 grid gap-8 md:grid-cols-2'>
							{item.supportImagesCollection.items.map(
								(img: WebStackImagesProps, index: number) => {
									return (
										<Image
											key={index}
											className='m-0 rounded-md'
											src={img.url}
											alt={img.title}
											width={img.width}
											height={img.height}
											priority={true}
										/>
									);
								}
							)}
						</div>
						<h2>Problems and Thought Process</h2>
						<p>{item.problemsAndThoughtProcess}</p>
						<div className='mt-12'>
							<Image
								className='m-0 rounded-md'
								src={item.supportImage.url}
								alt={item.supportImage.title}
								width={item.supportImage.width}
								height={item.supportImage.height}
								priority={true}
							/>
						</div>
						<h2>Lessons Learned</h2>
						<p>{item.lessonsLearned}</p>
					</article>
				</Container>
			</section>
			<Cta />
		</>
	);
}
