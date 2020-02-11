<template>
  <div class="about">
    <div v-for="(item,index) in $store.getters.flavor.data" :key="index">
<div v-for="(foo,index) in item.hotel.media" :key="index"><img :src="foo.uri"></div>
    <h1>{{item.hotel.type}}</h1>
    <!-- {{item.hotel.description.text}} -->
</div>

  </div>
</template>
