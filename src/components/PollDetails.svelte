<script>
  export let poll;

  $: totalVotes = poll.votesA + poll.votesB;
</script>

<div class="poll">
  <h3>{ poll.question }</h3>
  <p>Total votes: { totalVotes }</p>
  <div class="answer">
      <div class="percent percent-a"></div>
      <span>{ poll.answerA } ({ poll.votesA })</span>
  </div>
  <div class="answer">
      <div class="percent percent-b"></div>
      <span>{ poll.answerB } ({ poll.votesB })</span>
  </div>
</div>

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
</style>