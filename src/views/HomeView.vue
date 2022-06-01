<template>
  <div class="home">
    <Header></Header>
    <main>
      <div>
        <div class="webflow-style-input">
          <input id="search" type="text" v-model="value" @input="lazyCaller()" placeholder="Rechercher un personnage">
        </div>
        
        <div class="range">
          <label for="myRange">Limite de récupération: {{limit}}</label>
          <input type="range" min="1" max="100" class="slider" id="myRange" v-model="limit">
        </div>

        
      </div>
        <div class="noData" v-if="noData">
          <div id="error-box">
            <div class="dot"></div>
            <div class="dot two"></div>
            <div class="face2">
              <div class="eye"></div>
              <div class="eye right"></div>
              <div class="mouth sad"></div>
            </div>
            <div class="shadow move"></div>
            <div class="message">
              <h1 class="alert">Error!</h1>
              <p> Aucune donnée trouvée, veuillez retaper votre recherche</p>
              </div>
          </div>
        </div>
        <div v-if="data.length == 0 && !noData" class="loader">
          <img src="../../public/loader.gif"/>
        </div>
      <div v-show="data.length > 0">
        <displayCharacter :character="data"></displayCharacter>
      </div>
    </main>
    <Footer></Footer>

  </div>
</template>

<script>
// @ is an alias to /src
import api from '@/scripts/callApi'
import Header from '../components/layout/Header.vue'
import Footer from '../components/layout/Footer.vue'
import displayCharacter from '../components/displayCharacter.vue'

export default {
  name: 'HomeView',
  components: {
    Header,
    Footer,
    displayCharacter
  },

  data(){
    return{
      data:[],
      value:"",
      limit: 20,
      noData: false,

    }
  },

methods: {

  lazyCaller(time = 500) {
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      this.test()
    }, time)
  },

  test(){
    console.log(this.value);
    this.callApi({startWith:{value: this.value}})
  },

  async callApi(data){
    this.noData= false;
  let params = `limit=${this.limit}&`
    if(data.startWith && data.startWith.value){
      params+=`nameStartsWith=${data.startWith.value}&`
    }

    this.data=[]
    this.data = await api('characters', params)
    if (this.data.length == 0){
      this.noData = true;
    }
  }
  
},

watch: {
  limit: function() {
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      this.callApi({})
    }, 500)
  }
},

  created(){
    this.callApi({})
  }
}
</script>

<style scoped>
.home{
  min-height: 95vh;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

}

main{
  min-height: 77vh;
}

.loader{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

img{
  width: 25vw;
}

.range, .noData{
  margin: 2rem
}

.noData{
  display: flex;
  justify-content: center;
  align-items: center;
}


.webflow-style-input {
  position: relative;
  display: flex;
  flex-direction: row;
  width: 100%;
  max-width: 350px;
  margin: 0 auto;
  border-radius: 2px;
  margin-top: 2rem
}

.webflow-style-input:after {
    content: "";
    position: absolute;
    left: 0px;
    right: 0px;
    bottom: 0px;
    z-index: 999;
    height: 2px;
    border-bottom-left-radius: 2px;
    border-bottom-right-radius: 2px;
    background-position: 0% 0%;
    background: linear-gradient(to right, #B294FF, #57E6E6, #FEFFB8, #57E6E6, #B294FF, #57E6E6);
    background-size: 500% auto;
    animation: gradient 3s linear infinite;
  }

.webflow-style-input input {
  flex-grow: 1;
  color: #BFD2FF;
  font-size: 1.8rem;
  line-height: 2.4rem;
  vertical-align: middle;
  border: none
}

h1 {
  font-size: 0.9em;
  font-weight: 100;
  letter-spacing: 3px;
  padding-top: 5px;
  color: #FCFCFC;
  padding-bottom: 5px;
  text-transform: uppercase;
}

.red {
  color: darken(#EF8D9C, 10%);
}

.alert {
  font-weight: 700;
  letter-spacing: 5px;
}

p {
  margin-top: -5px;
  font-size: 1em;
  font-weight: 100;
  color: darken(#777777, 10%);
  letter-spacing: 1px;
}

#error-box {
  position: relative;
  width: 35vw;
  height: 50vh;
  background: linear-gradient(to bottom left, #EF8D9C 40%, #FFC39E 100%);
  border-radius: 20px;
  box-shadow: 5px 5px 20px rgba(#CBCDD3, 10%);
}

.dot {
  width: 8px;
  height: 8px;
  background:#FCFCFC;
  border-radius: 50%;
  position: absolute;
  top: 4%;
  right: 6%;

}

.dot:hover {
    background: darken(#FCFCFC, 20%);
  }

.two {
  right: 12%;
  opacity: .5;
}

.face {
  position: absolute;
  width: 22%;
  height: 22%;
  background: #FCFCFC;
  border-radius: 50%;
  border: 1px solid #777777;
  top: 21%;
  left: 37.5%;
  z-index: 2;
  animation: bounce 1s ease-in infinite;
}

.face2 {
  position: absolute;
  width: 22%;
  height: 22%;
  background: #FCFCFC;
  border-radius: 50%;
  border: 1px solid #777777;
  top: 21%;
  left: 37.5%;
  z-index: 2;
  animation: roll 3s ease-in-out infinite;
}

.eye {
  position: absolute;
  width: 5px;
  height: 5px;
  background: #777777;
  border-radius: 50%;
  top: 40%;
  left: 20%;
}

.right {
  left: 68%;
}

.mouth {
  position:absolute;
  top: 43%;
  left: 41%;
  width: 7px;
  height: 7px;
  border-radius: 50%;
}

.sad {
  top: 49%;
  border: 2px solid;
  border-color: #777777 transparent transparent #777777;
  transform: rotate(45deg);
}

.shadow {
  position: absolute;
  width: 21%;
  height: 3%;
  opacity: .5;
  background: #777777;
  left: 40%;
  top: 43%;
  border-radius: 50%;
  z-index: 1;
}

.scale {
  animation: scale 1s ease-in infinite;
}
.move {
  animation: move 3s ease-in-out infinite;
}

.message {
  position: absolute;
  width: 100%;
  text-align: center;
  height: 40%;
  top: 47%;
}

@keyframes bounce {
  50% {
    transform: translateY(-10px);
  }
}

@keyframes scale {
  50% {
    transform: scale(0.9);
  }
}

@keyframes roll {
  0% {
    transform: rotate(0deg);
    left: 25%;
  }
  50% {
    left: 60%;
    transform: rotate(168deg);
  }
  100% {
    transform: rotate(0deg);
    left: 25%;
  }
}

@keyframes move {
  0% {
    left: 25%;
  }
  50% {
    left: 60%;
  }
  100% {
    left: 25%;
  }
}

</style>