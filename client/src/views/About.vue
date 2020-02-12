<template>


<div class="md-layout md-gutter md-alignment-center">
    <div v-for="(item,index) in $store.getters.flavor.data" :key="index" class="md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100">
    	<div >
<md-card>
      <md-card-media-cover md-solid>
        <md-card-media md-ratio="1:1">
         <img src="https://picsum.photos/200/300">
        </md-card-media>

        <md-card-area>
          <md-card-header>
            <span class="md-title">{{item.hotel.type}}</span>
            <span class="md-subhead">{{truncateString(item.hotel.description.text,124)}}</span>
          </md-card-header>

          <md-card-actions>
            <md-button>available : <template v-if="item.available"><span id="dotsGreen">&#183;</span></template></md-button>
            <md-button>BOOK</md-button>
          </md-card-actions>
        </md-card-area>
      </md-card-media-cover>
    </md-card>
</div></div>
   
  </div>

      </template>
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