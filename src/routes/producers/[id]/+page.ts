export async function load({ fetch, params }) {

	const id = params.id;
	const idAsNumber = parseInt(id, 10);


	console.log(`heisann hoppsann fra producers/[${id}]/index.svelte`);


	const response = await fetch('/data/producers.json');


	console.log('response', response);

	if (!response.ok) {
		console.error('An error occurred while fetching the producers.json file');
		return;
	}

	const producers = await response.json();

	const producer = producers.find(producer => producer.id === idAsNumber);


	console.log('1 producer er ', producers[0]);
	console.log('En producer er ', producer);


	return {
		producer: producer
	}


}
