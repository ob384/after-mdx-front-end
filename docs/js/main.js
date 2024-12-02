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
      // Check if the course is already in the cart
      if (course.space > 0) {
        course.space -= 1;
        const inCart = this.cart.find(item => item.id === course.id);
        
        if (inCart) {
          inCart.quantity += 1;
        } else {
          this.cart.push({ ...course, quantity: 1 });
        }
        
        // Store cart in sessionStorage
        sessionStorage.setItem('cart', JSON.stringify(this.cart));
        alert("Added to cart!");
      }
    }
  },
  beforeMount(){
    fetch("https://after-mdx-backend.onrender.com/api/courses/trending").then((res)=>(res.json())).then((d) => this.trendingCourses = [...d]);
    fetch('https://after-mdx-backend.onrender.com/api/username', {
      method: 'GET',
      credentials: 'include', // Include cookies in the request
    })
      .then(response => response.text())
      .then(data => console.log('Username:', data))
      .catch(error => console.error('Error:', error));
  }
});