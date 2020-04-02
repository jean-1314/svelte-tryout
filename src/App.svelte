<script>
	let firstName = 'Jimi';
	let lastName = 'Hendrix';

	$: fullName = `${firstName} ${lastName}`;
	$: {
		console.log(firstName);
		console.log(lastName);
		console.log(fullName);
	}
</script>

<main>
	<h1>Hello, {fullName}!</h1>
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>

	<input type="text" bind:value={firstName}>
	<input type="text" bind:value={lastName}>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>