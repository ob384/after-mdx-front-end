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
      // Ensure we're working with a valid course
      if (!course) return;
  
      // Check if spaces are available
      if (course.availableSpaces > 0) {
        // Find if the course is already in cart
        const existingCartItem = this.cart.find(item => item._id === course._id);
  
        if (existingCartItem) {
          // If course exists, increment quantity
          existingCartItem.quantity += 1;
        } else {
          // If course is not in cart, add new item
          this.cart.unshift({
            _id: course._id,
            name: course.name,
            price: course.price,
            quantity: 1,
            location: course.location,
            availableSpaces: course.availableSpaces
          });
        }
  
        // Decrease available spaces
        course.availableSpaces -= 1;
  
        // Update cart in session storage
        sessionStorage.setItem('cart', JSON.stringify(this.cart));
  
        // Optional: Provide feedback
        alert(`${course.name} added to cart!`);
      } else {
        // No spaces available
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