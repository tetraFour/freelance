import Vue from "vue";
import "./assets/styles/index.scss";

new Vue({
  el: "#root",
  data: {
    message: "hello from vue",
  },
  mounted() {
    console.log("hello from vue");
  },
});
