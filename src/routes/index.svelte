<svelte:head>
	<title>The Calypso Programming Language</title>
</svelte:head>

<div class="w-full pt-16 pl-4 pr-4 max-w-96 center">
	<div class="flex flex-row pb-16">
		<div class="w-70 max-w-5xl">
			<div class="pb-2">
				<h1 class="text-8xl text-white text-nunito">Calypso</h1>
				<h2 class="text-2xl pt-8 text-white text-montserrat">
					Calypso is a mostly imperative language with some functional influences that is focused on
					flexibility and simplicity.
				</h2>
				<h2 class="text-2xl pt-2 text-white text-montserrat">
					Note that Calypso is still in its early stages of development. The implementation so far
					is VERY incomplete and is definitely neither working nor ready for production.
					Contributions, however, are welcome and highly encouraged as they help to bring Calypso to
					life.
				</h2>
			</div>
			<div class="pt-4">
				<a
					href="https://github.com/calypso-lang/calypso"
					class="rounded-md mr-2 text-3xl text-white p-2 bg-blue-600">Code</a
				>
				<a href="/docs" class="rounded-md mr-2 text-3xl text-white p-2 bg-blue-600">Docs</a>
				<a
					href="https://discord.gg/26X6ChQQcG"
					class="rounded-md text-3xl text-white p-2 bg-blue-600">Discord</a
				>
			</div>
		</div>
		<div class="w-30 pl-24 pr-0">
			<img src="/assets/logo.svg" class="w-96 h-96" alt="Calypso logo" />
		</div>
	</div>
</div>

<style lang="postcss">
	.w-70 {
		width: 70%;
	}
	.w-30 {
		width: 30%;
	}
	.center {
		margin-left: auto;
		margin-right: auto;
	}
	.max-w-96 {
		max-width: 96rem;
	}
</style>
