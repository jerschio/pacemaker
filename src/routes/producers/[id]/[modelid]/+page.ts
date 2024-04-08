import type { Producer } from '../../../../types.js';

export async function load({ fetch, params }) {

	// Hentes med feks url producers/1/2 hvor 1 er produsent og 2 er modell

	const id = params.id;
	const modelid = params.modelid;

	const idAsNumber = parseInt(id, 10);
	const modelidAsNumber = parseInt(modelid, 10);

	// Henter data
	const response = await fetch('/data/producers.json');

	if (!response.ok) {
		console.error('An error occurred while fetching the producers.json file');
		return;
	}

	const producers: Producer[] = await response.json();
	const producer: Producer | undefined = producers.find(producer => producer.id === idAsNumber);

	console.log('modelidAsNumber', modelidAsNumber);

	const model = producer.models.find(model => model.id === modelidAsNumber);


	console.log('1 model er ', producers[0]);
	console.log('En model er ', producer);

	console.log('En model er virkelig', model);


	return {
		model: model
	}

}
