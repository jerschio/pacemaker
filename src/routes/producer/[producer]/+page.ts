import type { Producer } from '../../../types.js';
import producersData from '$lib/data/producers.json';

export async function load({ params }) {

	console.log('params er ', params);

	const producerName = params.producer;


	const producers = producersData as Producer[];
	const producer = producers.find(producer => producer.name === producerName);


	console.log('1 producer er ', producers[0]);
	console.log('En producer er ', producer);


	return {
		producer: producer
	}

}
