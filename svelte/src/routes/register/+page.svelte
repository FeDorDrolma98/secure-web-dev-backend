<script>
    import { enhance } from '$app/forms';
    export let data
</script>

<svelte:head>
    <title>Register</title>
</svelte:head>

<body>
    <h1>Register</h1>
    <form use:enhance method="POST">
        <div class="content">
            <div class="input-field">
                <input name="username" type="text" required placeholder="Username"/>
            </div>
            <div class="input-field">
                <input name="password" type="password" required placeholder="Password"/>
            </div>
            {#if data.para === 'true'}
                <p>User created</p>
            {/if}
        </div>
        <div class="action">
            <div class="bttn"><button type="submit">Register</button></div>
            <div class="bttn"><button on:click={() => window.location.href='/login'}>Login</button></div>
        </div>
    </form>
    </body>
    <style>
        .input-field{
            position: center;
            display: flex;
            justify-content: center;
            padding: 1px;
        }
        .content{
            position: center;
            display: flex;
            padding: 50px 0;
            flex-direction: column;
            justify-content: center;
        }
        .action{
            position: center;
            display: flex;
            justify-content: center;
        }
        button{
            padding: 4px 8px;
        }
        .bttn{
            padding: 1px;
        }
</style>
