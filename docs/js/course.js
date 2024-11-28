let app = new Vue({
  el: '#app',
  // data: {
    //   courseDetails: new Object()
    // },
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
    fetch(`api/courses/${window.location.href.split("=")[1]}`).then((res)=>(res.json())).then((data) => { this.$set(this, 'courseDetails', data); });
    // fetch(`api/courses/${window.location.href.split("=")[1]}`).then((res)=>(res.json())).then((data) => { this.courseDetails = { ...data } });
    
  }, 
})
