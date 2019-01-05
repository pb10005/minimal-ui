<template>
  <div id="app">
    <h1>Minimal UI</h1>
    <p>Vue UI components for minimalists</p>
    <h2>Button</h2>
    <v-button>Button(default)</v-button><br />
    <v-button class="danger">Button(danger)</v-button><br />
    <h2>Input</h2>
    <v-input placeholder="input" /><br />
    <h2>Select</h2>
    <v-select>
      <option selected>item1</option> <option>item2</option>
      <option>item3</option> <option>item4</option>
    </v-select>
    <h2>Modal</h2>
    <v-button @click="isModalActive = true">Open</v-button>
    <v-modal :isActive="isModalActive" @clickModal="isModalActive = false">
      <div>
        a<br />
        <v-button>OK</v-button>
        <v-button class="danger">Cancel</v-button>
      </div>
    </v-modal>
    <h2>Message</h2>
    <p>Dismissible message</p>
    <v-message
      content="The quick brown fox jumps over the lazy dog."
    ></v-message>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      isModalActive: false
    };
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
