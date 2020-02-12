<template>


<div class="md-layout md-gutter md-alignment-center">
    <div v-for="(item,index) in $store.getters.flavor.data" :key="index" class="md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100">
    	<div >
<md-card>
      <md-card-media-cover md-solid>
        <md-card-media md-ratio="1:1">
         <img src="https://picsum.photos/500/500">
        </md-card-media>

        <md-card-area>
          <md-card-header>
            <span class="md-title">{{item.hotel.type}}</span>
            <span class="md-subhead">{{truncateString(item.hotel.description.text,124)}}</span>
          </md-card-header>

          <md-card-actions>
            <md-button>available : <template v-if="item.available"><span id="dotsGreen">&#183;</span></template></md-button>
            <md-button @click="postOffer"> <md-checkbox v-model="selectedTrip" :value="item"></md-checkbox>BOOK</md-button>
          </md-card-actions>
        </md-card-area>
      </md-card-media-cover>
    </md-card>
</div></div>
   
  </div>

      </template>

      <script>
      export default {
	name: 'Home',
	components: {
    // HelloWorld
},
data: () => ({
  selectedCountryDeparture: "",
  countries: [],
  searchObject:"",
  selectedTrip : ""
  }),

methods :{
	getSeletedItem(){
		this.selectedCountryDeparture = this.selectedCountryDeparture.iataCode
	},getCountriesDeparture (searchTerm) {
		this.countries = new Promise(resolve => {
			window.setTimeout(() => {
				if (!searchTerm) {
					resolve(this.countryList)
				} else {
					const term = searchTerm.toLowerCase()

					resolve(this.countryList.filter(({ name }) => name.toLowerCase().includes(term)))
				}
			}, 500)
		})
	},postOffer() {
		// this.showLoader(true)
    // var vm =this;
    // var urlSend= "keyword="+this.selectedCountryDeparture
 var vm=this;
function chooseHotel(hotel) { 
	
  return hotel.offers[0].id === vm.selectedTrip.offers[0].id;
}
this.selectedTrip = this.$store.getters.flavor.data.find(chooseHotel);
window.console.log(this.selectedTrip)
// var sendRFEquest=""
var x = this.selectedTrip.offers[0].id//.forEach(x=> sendRFEquest = x.id)
window.console.log(x)


    async function postUrlEncoded() {
  // Default options are marked with *

  const response = await fetch("http://localhost:2800/booking", {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      // 'Content-Type': 'application/json'   
      'Content-Type': 'application/x-www-form-urlencoded',
  },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *client
    body:x// body data type must match "Content-Type" header
});
   // this.isLoading = true
  return await response.json(); // parses JSON response into native JavaScript objects
}
try {
postUrlEncoded().then((data) => {
	window.console.log(data)
	this.$store.commit('changePricing', data)
	alert(data);
	// this.showLoader(false)

});

}

catch(error) {
	alert(error)
}
},
}
}


      	
      </script>
<style lang="scss" scoped>
  .md-card {
    width: 320px;
    margin: 4px;
    display: inline-block;
    vertical-align: top;
    color: black
  }

  #dotsGreen{
  	font-size: 45px;
  	color:green;

  }


</style>