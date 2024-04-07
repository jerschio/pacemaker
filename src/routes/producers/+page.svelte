<script lang="ts">
	import { goto } from '$app/navigation';
	import Breadcrumb from '../Breadcrumb.svelte';
	export let data;

	function navigateToProducer(id: number) {
		console.log('heisann hoppsann fra navigateToProducer');
		goto(`/producers/${id}`);
	}
</script>

<Breadcrumb />
<h1>Velg produsent</h1>

<div class="container">
	{#each data.producers as producer (producer.id)}
		<a href="/producers/{producer.id}">
			<div>
				{producer.name}
			</div>
		</a>
	{/each}
</div>

<pre>{JSON.stringify(data, null, 2)}</pre>

<style>
	.container {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: flex-start;
		height: 100vh;
	}

	.container div {
		background-color: #f0f0f0;
		border: 2px solid #333;
		padding: 20px;
		text-align: center;
		border-radius: 10px;
		box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
		margin-bottom: 20px;
	}
</style>
