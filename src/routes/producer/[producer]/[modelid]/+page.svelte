<script lang="ts">
	export let data;
</script>

<section>
	{#if data}
		<h1>{data.model.name}</h1>
		<p>{data.model.description ?? 'Mangler beskrivelse'}</p>
	{:else}
		<p>Ingen algoritme å vise</p>
	{/if}
</section>

<style>
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
