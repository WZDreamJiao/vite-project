<template>
  <codemirror
      v-model="code"
      placeholder="Code gose here..."
      :style="{ height: '400px' }"
      :autofocus="true"
      :indent-with-tab="true"
      :tabSize="2"
      :extensions="extensions"
      @ready="log('ready', $event)"
      @change="log('change', $event)"
      @focus="log('focus', $event)"
      @blur="log('blur', $event)"
  />
</template>

<script setup>
import {Codemirror} from "vue-codemirror";
import {javascript} from "@codemirror/lang-javascript";
import {oneDark} from "@codemirror/theme-one-dark";

const code = ref(`console.log('Hello, world!')`);
const extensions = [javascript()];
const log = (type, $event) => {
  console.log(type, $event)
}
</script>

<style scoped>

</style>
