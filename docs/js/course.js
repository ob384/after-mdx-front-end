let app = new Vue({
  el: '#app',
    data() {
      return {
        loggedIn: false,
        courseDetails : {},
        cartMessage: "Add to Cart"
    }
  },
  methods: {
    
  },
  
  mounted() {
    fetch(`https://after-mdx-backend.onrender.com/api/courses/${window.location.href.split("=")[1]}`).then((res)=>(res.json())).then((data) => { this.$set(this, 'courseDetails', data); });
    
  }, 
})
