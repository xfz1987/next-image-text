const BASE_API_URL = process.env.API_ADDRESS;

export const fetchArticles = async () => {
	// client
	const result = await fetch(`${BASE_API_URL}/article`);
	// SSR
	// const result = await fetch(`${BASE_API_URL}/article`, { cache: 'no-store' });
	// SSG
	// const result2 = await fetch(`${BASE_API_URL}/article`, { cache: 'force-cache' });

	return await result.json();
};
