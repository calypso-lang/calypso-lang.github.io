<div
	class="navbar w-auto min-w-full max-w-full bg-gray-800 h-16 overflow-hidden fixed top-0 left-0 flex flex-row items-center justify-end pr-4"
>
	<div class="navbar-l mr-auto inline-flex items-center pl-1">
		<a href="/"><img src="/assets/logo.svg" class="w-14 h-14" alt="Calypso logo" /></a>
		<a href="/" class="text-white text-4xl pl-2 text-nunito">Calypso</a>
	</div>
	<ul class="navbar-r list-none text-nunito">
		<li><a href="/docs">Docs</a></li>
		<li><a href="https://github.com/calypso-lang/calypso">GitHub</a></li>
		<li><a href="https://discord.gg/26X6ChQQcG">Discord</a></li>
	</ul>
</div>

<style lang="postcss">
	.navbar {
		box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12),
			0 1px 5px 0 rgba(0, 0, 0, 0.2);
	}

	.navbar-r li {
		@apply inline-flex text-center;
	}

	.navbar-r li a,
	.navbar-r li a:visited {
		@apply text-white text-2xl mr-4;
	}

	.navbar-r li a:hover {
		@apply text-blue-300;

		text-decoration: dashed underline;
	}
</style>
