const CONTENTFUL_URL = `https://graphql.contentful.com/content/v1/spaces/${process.env.NEXT_JS_CONTENTFUL_SPACE_ID}/environments/master`;

const headers = {
	Authorization: `Bearer ${process.env.NEXT_JS_CONTENTFUL_DELIVERY_TOKEN}`,
	'Content-Type': 'application/json',
};

export default async function getContentfulData(query: string, variables = {}) {
	const res = await fetch(CONTENTFUL_URL, {
		method: 'POST',
		headers,
		body: JSON.stringify({
			query,
			variables,
		}),
	});

	if (!res.ok) throw Error(`Cannot get data from ContentfulURL. - ${res.status}`);

	const { data } = await res.json();
	return data;
}
