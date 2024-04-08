<script>
	import Breadcrumb from '../../Breadcrumb.svelte';
	export let data;
</script>

<Breadcrumb />

<h1>{data.producer.name}</h1>
<pre>Her kunne det stått noe fornuftig</pre>

{#if !data.producer.models}
	<p>Ingen modeller å vise</p>
{:else}
	<h2>Kanskje velge modell?</h2>
	<div class="container">
		{#each data.producer.models as model (model.id)}
			<a href="/producers/{data.producer.id}/{model.id}">
				<div>
					{model.name}
				</div>
			</a>
		{/each}
	</div>
{/if}

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
