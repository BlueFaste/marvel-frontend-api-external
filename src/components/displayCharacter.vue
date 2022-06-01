<template>
<div class="container">
    <div v-for="el in character" :key="el.id" class="card">
    <a :href="`/characters/${el.id}`" class="chr">
        <img :src="`${el.thumbnail.path}.${el.thumbnail.extension}`">
        <div>
            <h2>{{el.name}}</h2>
            <p v-if="el.description">{{el.description}}</p>

        </div>
    </a>
    </div>

</div>
</template>

<script>
export default {

    props:{
        character : Array
    }

}
</script>

<style scoped>

.container{
    display: flex;
    /* flex-direction: column; */
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
}

.card{
    background: rgb(211, 211, 211);
    width: 25%;
    height: 15vh;
    margin: 20px;
    padding: 40px;
    border-radius: 20px;

}

.chr{
    display: flex;
}


.chr img{
    width: 7vw;
    height: 7vw;
    border-radius: 100%;
}

.chr div {
    margin-left: 30px;
    height: 10rem;
    overflow: hidden;
    text-overflow: ellipsis;
}

.chr p {
    /* width: 55%; */
   flex: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

a{
    text-decoration: none;
    color:black
}

</style>