<script lang="ts">
	import { base } from '$app/paths';
</script>

<div class="homelink">
	<a href={base || '/'}>Home</a>
</div>

<style>
	.homelink {
		list-style: none;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>
