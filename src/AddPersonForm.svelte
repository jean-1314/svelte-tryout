<script>
  let firstName = '';
  let lastName = '';
  let age = 0;

  const handleSubmit = () => {
      console.log(firstName, lastName, age);
  }
</script>

<form on:submit|preventDefault={handleSubmit}>
  <input type="text" placeholder="First Name" bind:value={firstName}>
  <input type="text" placeholder="Last Name" bind:value={lastName}>
  <input type="number" placeholder="Age" bind:value={age}>
  <button>Add Person</button>
</form>

<style>

</style>