import type { Producer } from '../../../../types.js';
import producersData from '$lib/data/producers.json';


export async function load({ params }) {

	const producerName = params.producer;
	const modelid = params.modelid;

	const modelidAsNumber = parseInt(modelid, 10);

	const producers = producersData as Producer[];
	const producer: Producer | undefined = producers.find(producer => producer.name === producerName);

	const model = producer.models.find(model => model.id === modelidAsNumber);


	return {
		model: model
	}

}
