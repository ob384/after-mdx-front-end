let app = new Vue({
  el: "#app",
  data() {
    return {
      loggedIn: false,
      cart: JSON.parse(sessionStorage.getItem('cart')) || [],
      phone: '',
      fullname:'',
      phoneError: "",
      fullnameError: "",
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
    verifyPhone(){
      if (!/^(?:\+230)?(2\d{6}|5\d{7})$/.test(this.phone)) {
        this.phoneError ="Please enter a valid phone number"
        throw new Error("Please enter a valid phone number")
      } else{
        this.phoneError =""

      }
    },
    sendOrder(){
      fetch("https://after-mdx-backend.onrender.com/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(this.checkoutDetails)
      }).then((res)=>{
        if (res.ok) {
          alert("Order Completed")
          sessionStorage.clear();
          window.location.href = `${window.location.origin}/after-mdx-front-end`
        }else{
          alert("Order Failed")
        }
      })
    },
    checkout(){
      this.verifyPhone()
      this.sendOrder();
    },
    verifyFullName(){
      if (this.fullname.length < 6) {
        this.fullnameError = "Please enter a valid name. Name must have at least six characters"
        throw new Error("Please enter a valid name. Name must have at least six characters")
      } else {
        this.fullnameError = ""
        
      }
    }

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
    },
    checkoutDetails(){
      return {
        fullname: this.fullname,
        phone: this.phone,
        orderDetails: this.orderObj
      }
    }

  },
  
})