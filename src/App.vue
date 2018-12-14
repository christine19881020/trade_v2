<template>
 <div id="app" :class="{'pagehidden':hidden}">
		<router-view/>
	</div>
</template>

<script>
export default {
  name: 'App',
  data(){
  	return{
  		hidden:true
  	}
  },
  mounted(){
//	if(sessionStorage.getItem('hidden')){
//		this.hidden=true
//	}else{
//		this.hidden=false
//	}
  }
}
</script>

<style>
#app {
  width: 100%;height:100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.pagehidden{
	/*overflow:hidden;*/
}
</style>
