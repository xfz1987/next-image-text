const BASE_API_URL = process.env.API_ADDRESS;

export const fetchArticles = async () => {
	const result = await fetch(`${BASE_API_URL}/article`, {
		cache: 'no-cache',
		method: 'GET',
	});

	return await result.json();
};
