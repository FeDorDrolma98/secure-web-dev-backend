<script>
	async function handleSubmit(event) {
		event.preventDefault();
		const formData = new FormData(event.target);
		const username = formData.get("username");
		const password = formData.get("password");
		const response = await fetch('http://localhost:3000/users/login', {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({ username, password })
		});
		if (response.status === 200) {
			const { jwt } = await response.json();
			// Store the JWT token in local storage or a cookie for future use
			localStorage.setItem("jwt", jwt);
			// Redirect to the home page or show a success message
			window.location.href = "/";
		} else {
			// Show an error message
			console.error("Login failed");
		}
	}
</script>
<svelte:head>
	<title>Login</title>
	<meta name="description" content="Login" />

</svelte:head>

<div class="text-column">
	<h1>Login</h1>

	<!--form method="POST" action="/login"-->
	<form on:submit={handleSubmit}>
	<label>
			User name
			<input name="username" type="text">
		</label>
		<label>
			Password
			<input name="password" type="password">
		</label>
		<button>Log in</button>
	</form>
</div>
