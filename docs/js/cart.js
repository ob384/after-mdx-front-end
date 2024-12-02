let app = new Vue({
  el: "#app",
  data() {
    return {
      loggedIn: false,
      cart: JSON.parse(sessionStorage.getItem('cart')) || []
    }
  },
  methods: {
    increaseQuantity(course){
      if(course.availableSpaces > course.quantity){
        course.quantity +=1 
      }
    },

    reduceQuantity(course){
      if(course.quantity>0){
        course.quantity -=1 
      }
    },

    removeFromCart(course){
      this.cart = cart.filter((value,index) => cart[index] !== value);
    },
  },
})