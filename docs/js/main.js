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
      if (course.availableSpaces > 0) {
        // Find if the course is already in cart
        const inCart = this.cart.find(item => item.id === course.id);
        
        if (inCart) {
          // If in cart, increase quantity
          inCart.quantity += 1;
        } else {
          // If not in cart, add new item with quantity 1
          this.cart.push({ 
            ...course, 
            quantity: 1 
          });
        }
        
        // Decrease available spaces
        course.availableSpaces -= 1;
        
        // Store updated cart in sessionStorage
        sessionStorage.setItem('cart', JSON.stringify(this.cart));
        
        // Optional: Show success message
        alert(`${course.name} added to cart!`);
      } else {
        // Optional: Show error if no spaces available
        alert('Sorry, no spaces available for this course.');
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