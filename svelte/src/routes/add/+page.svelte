<script>
    import { enhance } from '$app/forms';
    export let data
</script>


<svelte:head>
    <title>New location</title>
</svelte:head>

<body>
    <h1>Add a Location</h1>
    {#if data.para}
        <p class="location-added">Done !</p>
    {/if}
    <div class="afficher">
        <form use:enhance method="POST">
            <label><br>Film Type : <input type="text" placeholder="Film Type" value="Long métrage" name="filmType" required /></label>
            <label><br>Film Producer Name :
                <input type="text" placeholder="Film Producer Name" value="MANDARIN PRODUCTION"name="filmProducerName" required /></label>
            <label><br>End Date :
                <input type="text" placeholder="End Date"  value="2020-08-21T00:00:00.000Z" name="endDate" required /></label>
            <label><br>Film Name :
                <input type="text" placeholder="Film Name"  value="Tuto bene" name="filmName" required  /></label>
            <label><br>District : <input type="text" placeholder="District"  value="75013" name="district" required /></label>
            <label><br>Source Location ID :
                <input type="text" placeholder="Source Location ID"  value="2020-404" name="sourceLocationId" required /></label>
            <label><br>Film Director Name :
                <input type="text" placeholder="Film Director Name"  value="Tristan SEGUELA" name="filmDirectorName" required /></label>
            <label><br>Adress :
                <input type="text" placeholder="Address"  value="rue pascal, 75013 paris" name="address" required /></label>
            <label><br>Start Date :
                <input type="text" placeholder="Start Date" value="2020-07-20T00:00:00.000Z" name="startDate" required /></label>
            <label><br>Year :
                <input type="text" placeholder="Year"  value="2020" name="year" required /></label><br>
            <button type="submit">Add the location</button>
        </form>
    </div>


</body>

<style>
    input{
        background: transparent;
        justify-content: right;
        border:none;
        color: #b6eada;
    }
</style>