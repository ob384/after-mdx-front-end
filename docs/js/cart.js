let app = new Vue({
  el: "#app",
  data() {
    return {
      loggedIn: false,
      cart: JSON.parse(sessionStorage.getItem('cart')) || [],
      phone: '',
      fullname:'',

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

    removeFromCart(course) {
      this.cart = this.cart.filter(item => item.id !== course.id);
      sessionStorage.setItem('cart', JSON.stringify(this.cart)); // Update session storage
    },
  },
  computed: {
    totalPrice(){
      let total = 0;
      this.cart.forEach((v) => {
        total += v.price * v.quantity; // Considering the quantity of each item
      });
      return total;
    },
    orderObj(){
      // let obj = {}
      let order = []
      this.cart.forEach((v,i)=>{
        order[i] = {
          course: v.name ,
          price: v.price, 
          space: v.quantity, 
          totalPrice: v.quantity*v.price
          }
      })
      console.log(order)
      return JSON.stringify(order)
    }

  },
  
})