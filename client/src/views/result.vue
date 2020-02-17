<template>


<div class="md-layout md-gutter md-alignment-center">
    <div v-for="(item,index) in $store.getters.pricing.data" :key="index" class="md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100">
    	<div >
<md-card>
      <md-card-media-cover md-solid>
        <md-card-media md-ratio="1:1">
         <img src="https://picsum.photos/500/500">
        </md-card-media>

        <md-card-area>
          <md-card-header>
            <span class="md-title">{{item.type}}</span>
            <span class="md-subhead">{{item.id}}</span>
          </md-card-header>

          <md-card-actions>
      <!--       <md-button>available : <template v-if="item.available"><span id="dotsGreen">&#183;</span></template></md-button>
            <md-button @click="postOffer"> <md-checkbox v-model="selectedTrip" :value="item"></md-checkbox>BOOK</md-button> -->
          </md-card-actions>
        </md-card-area>
      </md-card-media-cover>
    </md-card>
</div></div>
   
  </div>

      </template>

