<script>
    import { enhance } from '$app/forms';
    export let data;
    let locations = data.body
    import * as api from '$lib/api.js';

    let role = JSON.parse(atob(data.jwt.split('.')[1])).role;

    async function deleteLocation(id) {
        let jwt = data.jwt
        await api.del('locations/'+id, jwt);
    }
</script>

<svelte:head>
    <title>Locations</title>
</svelte:head>

<body>
    <h1>Locations in Paris (click on the locations)</h1>

    {#if role=='admin'}
        <div  class="button2">
            <a href="/add">Add a Location</a>
        </div>
        <h2>Don't hesitate to modify the locations<br><br></h2>
    {/if}

    {#if locations.length === 0}
        <p>Loading...</p>
    {:else}
        <ul class="gradient-list">
            {#each locations as location}
                <li class="element">
                    <p class="element-title-front" on:click={() => {location.showDetails = !location.showDetails}}>{location.filmName} - ID : {location._id}</p>
                    {#if location.showDetails}
                        {#if role=="admin"}
                            <div class="afficher">
                                <form use:enhance method="POST">
                                    <label>ID : <input type="text" placeholder="_id" value={location._id} name="_id" readonly/></label>
                                    <label><br>Film Type : <input type="text" placeholder="Film Type" value={location.filmType} name="filmType" required /></label>
                                    <label><br>Film Producer Name :
                                        <input type="text" placeholder="Film Producer Name" value={location.filmProducerName} name="filmProducerName" required /></label>
                                    <label><br>End Date :
                                        <input type="text" placeholder="End Date" value={location.endDate} name="endDate" required /></label>
                                    <label><br>Film Name :
                                        <input type="text" placeholder="Film Name" value={location.filmName} name="filmName" required  /></label>
                                    <label><br>District : <input type="text" placeholder="District" value={location.district} name="district" required /></label>
                                    <label><br>Source Location ID :
                                        <input type="text" placeholder="Source Location ID" value={location.sourceLocationId} name="sourceLocationId" required /></label>
                                    <label><br>Film Director Name :
                                        <input type="text" placeholder="Film Director Name" value={location.filmDirectorName} name="filmDirectorName" required /></label>
                                    <label><br>Adress :
                                        <input type="text" placeholder="Address" value={location.address} name="address" required /></label>
                                    <label><br>Start Date :
                                        <input type="text" placeholder="Start Date" value={location.startDate} name="startDate" required /></label>
                                    <label><br>Year :
                                        <input type="text" placeholder="Year" value={location.year} name="year" required /></label>

                                    <div class="bttn">
                                        <button type="submit">Save the modication</button>
                                    </div>
                                </form>
                                <div class="bttn">
                                    <button class="bttn" on:click={deleteLocation(location._id)}>Delete</button>
                                </div>
                            </div>
                        {/if}
                        {#if role!="admin"}
                            <div class="afficher">
                                <li>ID :     			     {location._id}</li>
                                <li>Film Type :			     {location.filmType}</li>
                                <li>Film Producer Name :	     {location.filmProducerName}</li>
                                <li>End Date :			     {location.endDate}</li>
                                <li>Film Name :			     {location.filmName}</li>
                                <li>District :			     {location.district}</li>
                                <li>Geolocation :		     {location.geolocation}</li>
                                <li>Coordinates :		     {location.coordinates}</li>
                                <li>Type :				     {location.type}</li>
                                <li>Source Location ID :	     {location.sourceLocationId}</li>
                                <li>Film Director Name :	     {location.filmDirectorName}</li>
                                <li>Address :			     {location.address}</li>
                                <li>Start Date :			     {location.startDate}</li>
                                <li>Year :				     {location.year}</li>
                            </div>
                        {/if}
                    {/if}
                </li>
            {/each}
        </ul>
    {/if}

</body>
<style>
    .afficher{
        padding-left: 20px;
        padding-bottom: 30px;
    }
    input{
        background: transparent;
        justify-content: right;
        border:none;
        color: #b6eada;
    }
    .button2{
        display: flex;
        justify-content: left;
        padding:20px;
        font-size: 20px;
        font-weight: bold;
    }
    .bttn{
       padding: 3px;
    }
</style>