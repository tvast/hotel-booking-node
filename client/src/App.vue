<template>
  <div id="app">
   


  <div class="page-container">
    <md-app md-waterfall md-mode="overlap">
      <md-app-toolbar class="md-primary md-large">
        <div class="md-toolbar-row">
          <md-button class="md-icon-button" @click="menuVisible = !menuVisible">
            <md-icon>menu</md-icon>
          </md-button>

          <span class="md-title">My Title</span>
        </div>
      </md-app-toolbar>

      <md-app-drawer :md-active.sync="menuVisible">
        <md-toolbar class="md-transparent" md-elevation="0">
          Navigation
        </md-toolbar>

        <md-list>
          <md-list-item>
            <md-icon>move_to_inbox</md-icon>
            <span class="md-list-item-text">Inbox</span>
          </md-list-item>

          <md-list-item>
            <md-icon>send</md-icon>
            <span class="md-list-item-text">Sent Mail</span>
          </md-list-item>

          <md-list-item>
            <md-icon>delete</md-icon>
            <span class="md-list-item-text">Trash</span>
          </md-list-item>

          <md-list-item>
            <md-icon>error</md-icon>
            <span class="md-list-item-text">Spam</span>
          </md-list-item>
        </md-list>
      </md-app-drawer>

      <md-app-content>
         <div id="nav">
      <router-link to="/">Search</router-link> |
      <router-link to="/about">Result</router-link>
    </div>
    <router-view></router-view>
      </md-app-content>
    </md-app>
  </div>
    </div>
</template>

<style lang="scss">

@import "~vue-material/dist/theme/engine"; // Import the theme engine

@include md-register-theme("default", (
  primary: md-get-palette-color(green, A200), // The primary color of your application
  accent: md-get-palette-color(red, A200) // The accent or secondary color
));

@import "~vue-material/dist/theme/all"; 

 .md-app {
    max-height: 4000px;
    border: 1px solid rgba(#000, .12);
  }
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
