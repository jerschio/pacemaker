export async function load({ fetch }) {

	const response = await fetch('/data/producers.json');
	console.log('response', response);

	if (!response.ok) {
		console.error('An error occurred while fetching the producers.json file');
		return;
	}

	const producers = await response.json();

	return {
		producers: producers
	}
}
