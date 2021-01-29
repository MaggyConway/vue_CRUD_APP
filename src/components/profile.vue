<template>
  <div id="profile">
    <h1>{{ welcome }}</h1>
  </div>
</template>
<script>
	export default {
	  data () {
	    return {
	    welcome: 'Profile',
	    msg: 'Welcome to Your Profile'
	    }
	  }
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>