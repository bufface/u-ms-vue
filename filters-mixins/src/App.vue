<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Filters & Mixins</h1>
        {{ text | toUppercase | to-lowercase }}
        <hr />
        <input v-model="filterText" />
        <ul>
          <li :key="fruit" v-for="fruit in filteredFruits">{{ fruit }}</li>
        </ul>

        <hr />
        <app-list></app-list>
      </div>
    </div>
  </div>
</template>

<script>
import List from "./components/List";
import { fruitMixin } from './mixins/fruit'

export default {
  mixins: [ fruitMixin ],
  data() {
    return {
      text: "Some random text",
    };
  },
  filters: {
    toUppercase(val) {
      return val.toUpperCase();
    }
  },
  components: {
    appList: List
  }
};
</script>