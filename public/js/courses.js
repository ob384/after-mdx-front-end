let app = new Vue({
  el: '#app',
  data: {
    loggedIn: false,
    trendingCourses: []
  },
  mounted(){
    fetch("api/courses/trending").then((res)=>(res.json())).then((data)=>{this.trendingCourses = data});
  }

});