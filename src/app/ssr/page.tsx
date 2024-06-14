import React from 'react';
import { ThemeSwitcher } from '../../components/ThemeSwitcher';
import { Avatar, Card, CardBody, CardFooter, Image } from '@nextui-org/react';
import { fetchArticles } from '../../service/article';

type Article = {
	id: string;
	title: string;
	image: string;
	note: string;
};

export default async function Home() {
	const data: { articles: Article[] } = await fetchArticles();
	const list = data.articles;

	return (
		<div>
			<header className="w-full h-14">
				<div className="fixed top-4 right-8 flex justify-center items-center gap-4">
					<Avatar
						showFallback
						src="https://5b0988e595225.cdn.sohucs.com/images/20200110/9a14a31b68f44031aa758949bb5b8452.jpeg"
					/>
					<ThemeSwitcher />
				</div>
			</header>
			<div className="flex items-center justify-center m-4">
				<div className="gap-2 grid grid-cols-2 sm:grid-cols-4">
					{list.map((item, index) => (
						<Card
							shadow="sm"
							key={index}
							isPressable
							// onPress={() => console.log('item pressed')}
						>
							<CardBody className="overflow-visible p-0">
								<Image
									shadow="sm"
									radius="lg"
									width="100%"
									alt={item.title}
									className="w-full object-cover h-[140px]"
									src={item.image}
								/>
							</CardBody>
							<CardFooter className="text-small justify-between">
								<b>{item.title}</b>
								<p className="text-default-500">{item.note}</p>
							</CardFooter>
						</Card>
					))}
				</div>
			</div>
		</div>
	);
}
