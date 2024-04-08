import type { Producer } from '../types'
import producersData from '$lib/data/producers.json';

// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
export const prerender = true;

export async function load() {
    const producers = producersData as Producer[];
    return {
        producers: producers
    }
}