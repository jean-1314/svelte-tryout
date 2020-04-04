<script>
	let people = [
		{ id: 1, firstName: 'Ivan', lastName: 'LastName', age: 30 },
		{ id: 2, firstName: 'Olga', lastName: 'LastName', age: 27 },
		{ id: 3, firstName: 'FirstName', lastName: 'LastName', age: 32 }
	];

	const handleClick = (id) => {
		people = people.filter(person => person.id !== id);
	}
</script>

<main>
	{ #each people as person (person.id)}
		<div>
			<h2>{person.firstName} {person.lastName}</h2>
			<p>{person.age} years old</p>
			<button on:click={() => handleClick(person.id)}>delete</button>
		</div>
	{:else}
		<p>There are no people to show</p>
	{/each}
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