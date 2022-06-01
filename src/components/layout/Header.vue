<template>
    <header>
        <h1>Express js - Carouline</h1>
    <nav>
        <ul>
            <li v-for="el in nav" :key="el.name">
                <a :href="el.link">{{el.name}}</a>
            </li>
        </ul>
    </nav>
</header>
</template>

<script>
export default {
name:"HeaderVue",
    data:() => {
        return{
                nav:[
                    { name : "Accueil", link:"/"},
                    { name : "Connexion", link:""},
                    { name : "Page dynamique", link:""},
                    { name : "Téléchargement", link:""},
                    { name : "Gif", link:""},
                    { name : "Chat", link:""},
                    { name : "Page error", link:""},
                    { name : "About", link: "/about"},
                ]
            }

        }
}
</script>

<style scoped>
h1,p{
    margin:0;
    padding:0;
}
header{
    padding: 10px;
    background-color:aquamarine;
    background: linear-gradient(to bottom right, rgb(102, 218, 179)20%, aquamarine 100%);
    display: flex;
    justify-content: space-between;
    align-items: center;
}

ul {
    display: flex;
    justify-content: space-between;
    list-style: none;
}

li{
    margin: 5px;
}

a{
    text-decoration: none;
}

</style>