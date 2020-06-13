<template>
  <div>
    <h1>Filters & Mixins</h1>

    <input v-model="filterText" />
    <ul>
      <li :key="fruit" v-for="fruit in filteredFruits">{{ fruit }}</li>
    </ul>
  </div>
</template>

<script>
import { fruitMixin } from "../mixins/fruit";

export default {
  mixins: [fruitMixin]
};
</script>