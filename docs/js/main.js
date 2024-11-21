let app = new Vue({
  el: '#app',
  data: {
    loggedIn: false,
    trendingCourses: [], 
  },
  beforeMount(){
    fetch("api/courses/trending").then((res)=>(res.json())).then((d) => this.trendingCourses = [...d]);
  }
});