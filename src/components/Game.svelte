<script lang="ts">
	import Bouton from '../components/Bouton.svelte';
	import paper from '$lib/icon-paper.svg';
	import rock from '$lib/icon-rock.svg';
	import scissors from '$lib/icon-scissors.svg';

	let playerChoice = '';
	let computerChoice = '';
	let result = '';
	let userScore = 0;
	let ordiScore = 0;

	const choices: string[] = ['rock', 'paper', 'scissors'];
	const playGame = (player: any) => {
		playerChoice = player;
		computerChoice = choices[Math.floor(Math.random() * choices.length)];

		if (playerChoice === computerChoice) {
			result = 'Égalité!';
		} else if (
			(playerChoice === 'rock' && computerChoice === 'scissors') ||
			(playerChoice === 'scissors' && computerChoice === 'paper') ||
			(playerChoice === 'paper' && computerChoice === 'rock')
		) {
			result = 'Vous avez gagné!';
			userScore++;
		} else {
			result = 'Vous avez perdu!';
			ordiScore++;
		}
	};
</script>

<Bouton image={paper} on:click={() => playGame('paper')} />
<Bouton image={rock} on:click={() => playGame('rock')} />
<Bouton image={scissors} on:click={() => playGame('scissors')} />

<p>Choix du joueur: {playerChoice}</p>
<p>Choix de l'ordinateur: {computerChoice}</p>
<p>Résultat: {result}</p>
<p>Score du joueur: {userScore}</p>
<p>Score de l'ordinateur: {ordiScore}</p>
