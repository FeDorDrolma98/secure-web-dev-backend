<script>
	import { browser } from '$app/environment';
	import { goto } from '$app/navigation';


	export let data;
	$: if (browser && data?.jwt) {
		goto('/locations');
	}
</script>

<svelte:head>
	<title>Login</title>
	<meta name="description" content="Login" />
</svelte:head>

<body class="login">
	{#if data.para}
		<p class="error-message">Incorrect password !</p>
	{/if}

	<div class="text-column">
		<h1>Login</h1>
		<h2>If you don't have a account yet, you have to create one <a href="/register">first</a> !</h2>
		<form method="POST" action="/login">
			<div class="input">
				<div class="input-field">
					<input name="username" type="text" required placeholder="Username"/>
				</div>
				<div class="input-field">
					<input name="password" type="password" required placeholder="Password"/>
				</div>
			</div>
			<div class="bttn">
				<div class="action">
					<button type="submit">Login</button>
				</div>
			</div>
		</form>
	</div>

</body>



<style>
	.input-field{
		position: center;
		display: flex;
		justify-content: left;
		padding: 1px;
	}
	.action{
		position: center;
		display: flex;
		justify-content: left;
	}
	button{
		padding: 4px 8px;
	}
	.input{
		padding:15px 15px;
	}
	.bttn{
		padding-top: 15px;
		padding-left: 30px;
	}
</style>


