import { writable } from 'svelte/store';

const PollStore = writable([
  {
    id: 1,
    question: 'JavaScript or TypeScript?',
    answerA: 'JavaScript',
    answerB: 'TypeScript',
    votesA: 9,
    votesB: 15
  }
]);

export default PollStore;