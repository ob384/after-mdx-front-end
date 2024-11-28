let app = new Vue({
  el: '#app',
  data: {
    loggedIn: false,
    trendingCourses: [], 
  },
  beforeMount(){
    fetch("https://after-mdx-backend.onrender.com/api/courses/trending").then((res)=>(res.json())).then((d) => this.trendingCourses = [...d]);
  }
});