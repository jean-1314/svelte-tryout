<script>
  import { createEventDispatcher } from 'svelte';

  let dispatch = createEventDispatcher();

  let firstName = '';
  let lastName = '';
  let age = 0;
  let skills = [];
  let city = '';

  const handleSubmit = () => {
    const person = {
      firstName, lastName, age, skills, city, id: Math.random()
    };
    dispatch('addPerson', person);
  }
</script>

<form on:submit|preventDefault={handleSubmit}>
  <input type="text" placeholder="First Name" bind:value={firstName}>
  <input type="text" placeholder="Last Name" bind:value={lastName}>
  <input type="number" placeholder="Age" bind:value={age}>
  <label>Skills:</label>
  <input type="checkbox" bind:group={skills} value="html">HTML <br>
  <input type="checkbox" bind:group={skills} value="css">CSS <br>
  <input type="checkbox" bind:group={skills} value="js">JS  <br>
  <label>City:</label>
    <select bind:value={city}>
      <option value="Moscow">Moscow</option>
      <option value="Paris">Paris</option>
      <option value="London">London</option>
      <option value="New York">New York</option>
    </select>
  <button>Add Person</button>
</form>

<style>

</style>