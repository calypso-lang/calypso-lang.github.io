<script>
	import Navbar from '$lib/Navbar.svelte';
</script>

<div>
	<Navbar />
	<div class="mt-16 p-0 min-w-full bg-gray-700">
		<slot />
	</div>
</div>

<style global lang="postcss">
	@tailwind base;
	@tailwind components;
	@tailwind utilities;

	body {
		@apply bg-gray-700;
	}

	.text-nunito {
		font-family: 'Nunito', sans-serif;
	}

	.text-montserrat {
		font-family: 'Montserrat', sans-serif;
	}
</style>
