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
		<p class="error-message">Incorrect Password</p>
	{/if}

	<div class="text-column">
		<h1>Login</h1>
		<h2>If you don't have an account, go <a href="/register">register</a> first !</h2>
		<!--form method="POST" action="/login"-->
		<!--form on:submit={handleSubmit}-->
		<form method="POST" action="/login">
			<label>
				Username
				<input name="username" type="text" required>
			</label>
			<label>
				Password
				<input name="password" type="password" required>
			</label>
			<div class="action">
				<button type="submit">Log in</button>
				<button on:click={() => window.location.href='/register'}>Register</button>
			</div>
		</form>
	</div>

</body>