<script>
	import Breadcrumb from '../../Breadcrumb.svelte';
	export let data;
</script>

<Breadcrumb />

<h1>{data.producer.name}</h1>
<pre>Her kunne det stått noe fornuftig</pre>

<pre>{JSON.stringify(data, null, 2)}</pre>
