<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
      <input type="text" v-model="text"/>
      {{text}}

      <button @click="restHandle">清除</button>
      <SearchResults :text="text"></SearchResults>
  </div>
</template>

<script>
import {ref} from "vue";
import SearchResults from '../components/search-results.vue'

export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
    components: {
        SearchResults,
    },
    setup() {
      const text = ref('');

      console.log(text);
      const restHandle = (e) => {
          console.log(e)
          text.value = '';
      }
      return {
          text,
          restHandle,
      }
    }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
