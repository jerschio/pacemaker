<script lang="ts">
	export let data;
</script>

<h1>{data.model.name}</h1>

{#if data}
	<h2>{data.model.name}</h2>
	<p>{data.model.description ?? 'Mangler beskrivelse'}</p>
{/if}
