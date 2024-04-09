<script>
	import { base } from '$app/paths';
	export let data;
</script>

<section>
	<h1>{data.producer.name}</h1>

	{#if !data.producer.models}
		<p>Ingen algoritmer å vise</p>
	{:else}
		<h1>Velg algoritme</h1>
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
</section>

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

	section {
		display: flex;
		flex-direction: column;
		justify-content: start;
		align-items: center;
		flex: 0.6;
	}

	h1 {
		width: 100%;
	}
</style>
