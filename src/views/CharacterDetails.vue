<template>
    <Header></Header>
    <main>
        <div class="header">
            <img :src="`${data.thumbnail.path}.${data.thumbnail.extension}`">
            <div>
                <h1>{{data.name}}</h1>
                <p v-if="data.description">{{data.description}}</p>
            </div>
        </div>

        <div class="apparition">
            <div v-if="data.comics.available">
                <h2>Apparation dans les comics</h2>
                <div>
                    <p v-for="(el, index) in data.comics.items" :key="index">{{el.name}}</p>
                </div>
            </div>
            <div v-if="data.series.available">
                <h2>Apparation dans les series</h2>
                <div>
                    <p v-for="(el, index) in data.series.items" :key="index">{{el.name}}</p>
                </div>
            </div>
            <div v-if="data.stories.available">
                <h2>Apparation dans les stories</h2>
                <div>
                    <p v-for="(el, index) in data.stories.items" :key="index">{{el.name}}</p>
                </div>
            </div>
        </div>
    </main>
    <Footer></Footer>
</template>

<script>
import api from '@/scripts/callApi'
import Header from '@/components/layout/Header.vue'
import Footer from '@/components/layout/Footer.vue'
export default {
    components: { Header, Footer },
    data(){
        return{
            data:{}
        }
    },

    async created(){
        console.log(this.$route.params.id);

        const result = await api('characters/'+ this.$route.params.id,"");

        this.data = result[0]
    }
}
</script>

<style>
main{
    margin:3rem;
}
.header{
    display: flex;
}

.header img{
    width: 20vw;
    height: 20vw;
    border-radius: 100%;
}

.header div{
    margin-left: 30px   ;
}

.apparition{
    display: flex;
    justify-content: space-between;
}

</style>