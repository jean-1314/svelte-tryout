<script>
  import PollStore from '../stores/PollStore';
  import Card from '../shared/Card.svelte';
  import Button from '../shared/button.svelte';
  import { tweened } from 'svelte/motion';

  export let poll;

  $: totalVotes = poll.votesA + poll.votesB;
  $: percentA = Math.floor(100 / totalVotes * poll.votesA) || 0;
  $: percentB = Math.floor(100 / totalVotes * poll.votesB) || 0;

  const tweenedA = tweened(0);
  const tweenedB = tweened(0);

  $: tweenedA.set(percentA);
  $: tweenedB.set(percentB);

  const handleVote = (option, id) => {
    PollStore.update(currentPolls => {
      let copy = [...currentPolls];
      let upvotedPoll = copy.find(item => item.id === id);
      if (option === 'a') {
          upvotedPoll.votesA++;
      }
      if (option === 'b') {
          upvotedPoll.votesB++;
      }
      return copy;
    });
  };

  const handleDelete = (id) => {
    PollStore.update(currentPolls => {
      return currentPolls.filter(poll => poll.id !== id);
    });
  };
</script>

<Card>
  <div class="poll">
    <h3>{ poll.question }</h3>
    <p>Total votes: { totalVotes }</p>
    <div class="answer" on:click={() => handleVote('a', poll.id)}>
        <div class="percent percent-a" style="width: {$tweenedA}%"></div>
        <span>{ poll.answerA } ({ poll.votesA })</span>
    </div>
    <div class="answer" on:click={() => handleVote('b', poll.id)}>
        <div class="percent percent-b" style="width: {$tweenedB}%"></div>
        <span>{ poll.answerB } ({ poll.votesB })</span>
    </div>
      <div class="delete">
          <Button on:click={() => handleDelete(poll.id)} flat="{true}">Delete</Button>
      </div>
  </div>
</Card>

<style>
  h3 {
      margin: 0 auto;
      color: #555555;
  }
  p {
      margin-top: 6px;
      font-size: 14px;
      color: #aaaaaa;
      margin-bottom: 30px;
  }
  .answer {
      position: relative;
      margin: 10px auto;
      background: #fafafa;
      cursor: pointer;
  }
  .answer:hover {
      opacity: 0.6;
  }
  span {
      display: inline-block;
      padding: 10px 20px;
  }
  .percent {
      position: absolute;
      box-sizing: border-box;
      height: 100%;
  }

  .percent-a {
      border-left: 4px solid #d91b42;
      background-color: rgba(217, 27, 66, 0.2);
  }

  .percent-b {
      border-left: 4px solid #45c496;
      background-color: rgba(69, 196, 150, 0.2);
  }
  .delete {
      margin-top: 30px;
      text-align: center;
  }
</style>