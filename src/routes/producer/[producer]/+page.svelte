<script>
	import { base } from '$app/paths';
	export let data;
</script>

<h1>{data.producer.name}</h1>

{#if !data.producer.models}
	<p>Ingen algoritmer å vise</p>
{:else}
	<h2>Velg algoritme</h2>
	<div class="container">
		{#each data.producer.models as model (model.id)}
			<a href="{base}/producer/{data.producer.name}/{model.id}">
				<div>
					{model.name}
				</div>
			</a>
		{/each}
	</div>
{/if}

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
