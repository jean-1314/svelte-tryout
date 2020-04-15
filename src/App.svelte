<script>
	import Modal from './Modal.svelte';
	import AddPersonForm from './AddPersonForm.svelte';

	let showModal = false;

	const toggleModal = () => {
		showModal = !showModal;
	};

	let people = [
		{ id: 1, firstName: 'Ivan', lastName: 'LastName', age: 30 },
		{ id: 2, firstName: 'Olga', lastName: 'LastName', age: 27 },
		{ id: 3, firstName: 'FirstName', lastName: 'LastName', age: 32 }
	];

	const handleClick = (id) => {
		people = people.filter(person => person.id !== id);
	};

	let num = 1;

	const addPerson = (e) => {
		const person = e.detail;
		people = [person, ...people];
		showModal = false;
	};
</script>

{#if num > 20}
	<p>Greater then 20</p>
{:else if num > 5}
	<p>Greater than 5</p>
{:else}
	<p>Not greater than 5</p>
{/if}

<Modal {showModal} on:click={toggleModal}>
	<h3>Add a New Person</h3>
	<AddPersonForm on:addPerson={addPerson}/>
</Modal>
<main>
	<button on:click={toggleModal}>Open Modal</button>
	{ #each people as person (person.id)}
		<div>
			<h2>{person.firstName} {person.lastName}</h2>
			<p>{person.age} years old</p>
			{#if person.age > 30}
				<p>Too old</p>
			{/if}
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