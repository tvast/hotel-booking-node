<template>
	<!-- <div class="diamond"></div> -->
	<!-- https://codepen.io/lewisvrobinson/pen/VeMOKx -->
	<div class="form-wrap">
		<h2 class="mob">Hotel Booking Form</h2>
		<h3 class="mob">Mobile Version</h3>
		<h5 class="mob">view on a desktop for the full experience</h5>
		<form action="">
			<div class="location">
				<label for="location">LOCATION</label><br/>
				<md-autocomplete @input="searchCity()" v-model="selectedCountryDeparture" :md-options="$store.getters.dataCitySearch" @md-changed="getCountriesDeparture" @md-selected="getSeletedItem()">
      <label>Departure</label>

      <template slot="md-autocomplete-item" slot-scope="{ item }"> {{item.name}}--{{item.id}}</template>
    </md-autocomplete>
			</div>
			<div class="guests">
				<label for="guests">NUMBER OF GUESTS</label><br/><br/>
				<button class="counter-btn" type="button" id="cnt-down">-</button>
				<input type="text" id="guestNo" name="guests" value="2"/>
				<button class="counter-btn" type="button" id="cnt-up">+</button>
			</div>
			<div class="dates">
				<div class="arrival">
					<label for="arrival">ARRIVAL</label><br/>
					<md-datepicker v-model="selectedDateDeparture" />
				</div>
				<div class="departure">
					<label for="arrival">DEPARTURE</label><br/>
					<md-datepicker v-model="selectedDateArrival" /> 
				</div>
			</div>
		</form>
		<button @click="searchHotel" class="btn" type="button">BOOK NOW</button>
		<div class="linkbox">
			<div class="links">
				<div class="origin">
					<p>Check out Seth Coelen's original design over on dribbble</p><a href="https://dribbble.com/shots/2464177-Daily-UI-067-Hotel-Booking" target="_blank"><i class="fa fa-dribbble"></i></a>
				</div>
				<div class="me">
					<p>Why not take a look at my other pens while you're here</p><a href="https://codepen.io/lewisvrobinson"><i class="fa fa-codepen"></i></a>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import router from '../router/index.js'

import Swal from 'sweetalert2'
 
// CommonJS

export default {
	name: 'Home',
	components: {
    // HelloWorld
},
data: () => ({
  selectedCountryDeparture: "",
  countries: [],
  searchObject:""
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
	},searchCity() {
		// this.showLoader(true)
    // var vm =this;
    var urlSend= "keyword="+this.selectedCountryDeparture



    async function postUrlEncoded() {
  // Default options are marked with *

  const response = await fetch("http://localhost:2800/citySearch?"+urlSend, {
    method: 'GET', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      // 'Content-Type': 'application/json'   
      'Content-Type': 'application/x-www-form-urlencoded',
  },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *client
    // body: urlSend// body data type must match "Content-Type" header
});
   // this.isLoading = true
  return await response.json(); // parses JSON response into native JavaScript objects
}

try {

postUrlEncoded().then((data) => {
	window.console.log(data)
	this.countryList=data.data;
	this.$store.commit('dataCitySearchMute', data.data)
	// this.showLoader(false)

});}

catch{
	Swal.fire({
  icon: 'error',
  title: 'Oops...',
  text: 'Something went wrong!',
  footer: '<a href>Why do I have this issue?</a>'
})
}
},searchHotel(){
	// this.showLoader(true)
  var urlSend= "keyword="+this.selectedCountryDeparture
	async function postHotel(urlsend) {
  // Default options are marked with *

  const response = await fetch("http://localhost:2800/hotel?keyword="+urlsend, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      // 'Content-Type': 'application/json'   
      'Content-Type': 'application/x-www-form-urlencoded',
  },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *client// body data type must match "Content-Type" header
    body: urlSend
});
   // this.isLoading = true
  return await response.json(); // parses JSON response into native JavaScript objects
}

window.console.log(this.selectedCountryDeparture)
try {
postHotel(this.selectedCountryDeparture).then((data) => {
	window.console.log(data)
	// searchHotel
	this.$store.commit('change', data)
	// this.showLoader(false)
	router.push('about')
	// this.showLoader(false)

});}
  catch(error) {
  Swal.fire({
  icon: 'error',
  title: 'Oops...',
  text: 'Something went wrong!',
  footer: '<a href>Why do I have this issue?</a>'
})

     }
}
}
}
</script>

<style lang="scss">
@import url(https://fonts.googleapis.com/css?family=Open+Sans:400,300,600,700);

$green: #8DFEE1;
$grey: #EBF3F5;
$orange: #FEA88D;
$color1: #888;


.mob {
  display: none;
  @media(max-width: 450px) {
    display: inline-block;
  }
}



input {
	padding: 15px 10px;
	border: none;
	margin-bottom: 20px;
	border-radius: 3px;
	box-shadow: 1px 3px 20px rgba(#111, .1);
	width: 100%;
	height: 45px;
	outline: $green;
}

input[type=date]::-webkit-inner-spin-button {
	-webkit-appearance: none;
	display: none;
}

#guestNo {
	width: 80px;
	margin: 0 20px;
	text-align: center;
}

input[type="date"] {
	&:webkit-inner-spin-button {
		display: none;
	} 
}

label {
	padding-bottom: 10px;
	display: inline;
	float: left;
}

.counter-btn {
	position: relative;
	display: inline-block;
	height: 40px;
	text-align: top;
	vertical-align: top;
	font-size: 1.5em;
	font-weight: 300;
	width: 40px;
	background: #fff;
	border: none;
	margin-bottom: 20px;
	border-radius: 50%;
	box-shadow: 1px 3px 20px rgba(#111, .1);
	cursor: pointer;
	outline: none;
	&:nth-child(2) {
		float: right;
	}
	&:hover {
		box-shadow: 1px 3px 20px rgba(#111, .3);
	}
}

.guests {
	margin: 10px;
}

.dates {
	.arrival {
		display: inline-block;
		float: left;
		width: 45%;
	}
	.departure {
		display: inline-block;
		float: right;
		width: 45%;
	}
}

.btn {
	border: none;
	padding: 10px;
	margin: 20px auto;
	width: 100%;
	height: 45px;
	display: block;
	background: $orange;
	color: #fff;
	font-size: 1.3em;
	letter-spacing: 0.1em;
	box-shadow: 1px 3px 20px rgba(#111, .1);
	border-radius: 3px;
	outline: none;
	&:hover {
		background: darken($orange, 5%);
	}
}

.windup {
	transform: translate(-50%, -50%) rotate(0deg);
	height: 100vh;
	width: 100vw;
	border-radius: 0;
}
.booked {
	background: darken($green, 30%);
	&:hover {
		background: darken($green, 20%);
	}
	&:before {
		content: '';
		position: absolute;
		bottom: 0;
		transform: translateY(-35px);
		left: -30px;
		display: block;
		height: 0px;
		border-radius: 3px;
		border: 20px solid darken($green, 30%);
		border-left: 30px solid rgba(0,0,0,0);
		border-right: 20px solid darken($green, 35%);
		z-index: -1;
		animation: ribbon-left .2s ease-in-out;
	}
	&:after {
		content: '';
		position: absolute;
		bottom: 0;
		transform: translateY(-35px);
		right: -30px;
		display: block;
		height: 0px;
		border-radius: 3px;
		border: 20px solid darken($green, 30%);
		border-right: 30px solid rgba(0,0,0,0);
		border-left: 20px solid darken($green, 35%);
		z-index: -1;
		animation: ribbon-right .2s ease-in-out;
	}
}

.linkbox {
	display: none;
}

.links {
	position: absolute;
	transform: translateY(100px);
	display: flex;
	justify-content: space-between;
	opacity: 1;
	animation: fadeIn 3s ease;
	background: darken($grey, 5%);
	@media(max-width: 450px) {
		transform: translateY(50px);
	}
	.origin, .me {
		display: flex;
		flex-flow: column;
		flex-grow: 1;
		padding: 10px 10px;
		color: $color1;
		border-radius: 5px;
		p {
			flex-grow: 1;
		}
		i {
			flex-grow: 1;
			font-size: 2em;
			color: $color1;
			&:hover {
				color: darken($color1, 20%);
			}
		}
	}
}

@keyframes ribbon-right {
	0% {
		transform: translate(-30px, -20px);
	}
}
@keyframes ribbon-left {
	0% {
		transform: translate(30px, -20px);
	}
}

@keyframes fadeIn {
	0% {
		opacity: 0;
	}
	80% {
		opacity: 1;
	}
}

</style>
