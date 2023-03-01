import Content from '@/components/elements/content';
import Cta from '@/components/elements/cta';
import Icons from '@/components/social/icons';
import Container from '@/components/ui/container';
import Card from '@/features/contentful/components/card';
import Skills from '@/features/show-skills/components/skills';
import Image from 'next/image';
import getContentfulData from '../lib/getContentfulData';

export const metadata = {
	title: 'Alen Demirov',
};

export default async function Home() {
	const { personalProjectsCollection } = await getContentfulData(`
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

	const { items } = personalProjectsCollection;

	return (
		<>
			<section>
				<Container>
					<div className='my-24 grid gap-8'>
						<div className='flex items-center gap-8'>
							<div className='h-[2px] w-32 bg-neutral-400'></div>
							<Icons width={20} />
						</div>
						<div className='grid gap-4'>
							<h1 className='text-5xl'>Hello, I&apos;m Alen.</h1>
							<p className='text-2xl'>
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
							Everything I&apos;ve learned so far has been through trial, error and experimentation
							with code and various tools. I have a keen interest in staying up-to-date with the
							latest trends and advancements in technology, and I actively engage with similar
							communities. I&apos;m a curious and resourceful learner who utilizes diverse sources
							of knowledge, including YouTube and other similar platforms, to expand my
							understanding and sharpen my skills.
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
				<Card projects={items} />
			</Content>
			<Cta />
		</>
	);
}
