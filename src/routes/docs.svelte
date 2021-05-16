<svelte:head>
	<title>Documentation - The Calypso Programming Language</title>
</svelte:head>

<div class="w-full pt-16 pl-4 pr-4 max-w-96 center">
	<div class="flex flex-row pb-16">
		<div class="w-full">
			<h1 class="text-4xl text-white text-nunito">Calypso Documentation</h1>
			<h2 class="text-2xl pt-4 text-white text-montserrat">
				Calypso has various "books" for learning about the language and its internals. Currently
				there are only two, and they are very incomplete. Feel free to contribute to make these
				better!
			</h2>
			<h1 class="text-4xl pt-4 text-white text-nunito"><i>The Calypso Guide</i></h1>
			<h2 class="text-2xl pb-4 pt-4 text-white text-montserrat">
				<i>The Calypso Guide</i> or "The Guide" is the definitive guide for calypso. It will cover everything
				you will need to make applications and libraries in Calypso.
			</h2>
			<a
				href="https://calypso-lang.github.io/gui/index.html"
				class="rounded-md mr-2 text-3xl text-white p-2 bg-blue-600">Guide</a
			>
			<h1 class="text-4xl pt-4 text-white text-nunito"><i>The Calypso Reference</i></h1>
			<h2 class="text-2xl pb-4 pt-4 text-white text-montserrat">
				<i>The Calypso Reference</i> or "The Reference" is the definitive reference for Calypso. It will
				be more of a specification of how the Calypso programming language works.
			</h2>
			<a
				href="https://calypso-lang.github.io/ref/index.html"
				class="rounded-md mr-2 text-3xl text-white p-2 bg-blue-600">Reference</a
			>
			<h1 class="text-4xl pt-4 text-white text-nunito">Compiler/VM Internals</h1>
			<h2 class="text-2xl pb-4 pt-4 text-white text-montserrat">
				There is also some documentation on the internals of Calypso. Currently, there is only the
				rustdoc documentation for Calypso and SaturnVM, but in the future there will probably be an
				internals guide for both Calypso and SaturnVM.
			</h2>
			<a
				href="https://calypso-lang.github.io/rustdoc/calypso/"
				class="rounded-md mr-2 text-3xl text-white p-2 bg-blue-600">Rustdocs</a
			>
		</div>
	</div>
</div>

<style lang="postcss">
	.center {
		margin-left: auto;
		margin-right: auto;
	}
	.max-w-96 {
		max-width: 96rem;
	}
</style>
