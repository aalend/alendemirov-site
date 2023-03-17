export default async function getContentfulData(query: string, variables = {}) {
	const res = await fetch(
		`https://graphql.contentful.com/content/v1/spaces/${process.env.NEXT_JS_CONTENTFUL_SPACE_ID}/environments/master`,
		{
			method: 'POST',
			headers: {
				Authorization: `Bearer ${process.env.NEXT_JS_CONTENTFUL_DELIVERY_TOKEN}`,
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				query,
				variables,
			}),
		}
	);

	if (!res.ok) throw Error(`Cannot get data from ContentfulURL. - ${res.status}`);

	const { data } = await res.json();
	return data;
}
