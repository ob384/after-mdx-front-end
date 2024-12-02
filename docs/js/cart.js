let app = new Vue({
  el: "#app",
  data() {
    return {
      cart: JSON.parse(sessionStorage.getItem('cart')) || []
    }
  },
})