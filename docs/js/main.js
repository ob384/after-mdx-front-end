let app = new Vue({
  el: '#app',
  data: {
    loggedIn: false,
    trendingCourses: [], 
    username: '',
    cart: JSON.parse(sessionStorage.getItem('cart')) || [],
    // cartSize: this.cart.length
  },
  methods: {
    addToCart(course) {
      
      if (!course) return;
  
      if (course.availableSpaces > 0) {
        const existingCartItem = this.cart.find(item => item._id === course._id);
  
        if (existingCartItem) {
          existingCartItem.quantity += 1;
        } else {
          this.cart.unshift({
            _id: course._id,
            name: course.name,
            price: course.price,
            quantity: 1,
            location: course.location,
            availableSpaces: course.availableSpaces
          });
        }
  
        course.availableSpaces -= 1;
  
        sessionStorage.setItem('cart', JSON.stringify(this.cart));
  
        alert(`${course.name} added to cart!`);
      } else {
        alert('Sorry, no spaces available for this course.');
      }
    }  
  },
  beforeMount(){
    fetch("https://after-mdx-backend.onrender.com/api/courses/trending").then((res)=>(res.json())).then((d) => this.trendingCourses = [...d]);
  }
});