let app = new Vue({
  el: '#app',
  // data: {
    //   courseDetails: new Object()
    // },
    data() {
      return {
        loggedIn: false,
        courseDetails : {} 
    }
  },
  methods: {
    
  },
  
  mounted() {
    fetch(`api/courses/${window.location.href.split("=")[1]}`).then((res)=>(res.json())).then((data) => { this.$set(this, 'courseDetails', data); });
    // fetch(`api/courses/${window.location.href.split("=")[1]}`).then((res)=>(res.json())).then((data) => { this.courseDetails = { ...data } });
    
  }, 
})

let notLoggeIn  = !app._data.loggedIn

// app._data.loggedIn = notLoggeIn

// app._data.loggedIn = !notLoggeIn

// eval(`app._data.loggedIn = ${notLoggeIn}`);