let app = new Vue({
  el: "#app",
  data() {
    return {
      loggedIn: false,
      cart: JSON.parse(sessionStorage.getItem('cart')) || []
    }
  },
})