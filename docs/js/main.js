let app = new Vue({
  el: '#app',
  data: {
    loggedIn: false,
    trendingCourses: [], 
    username: '',
  },
  beforeMount(){
    fetch("https://after-mdx-backend.onrender.com/api/courses/trending").then((res)=>(res.json())).then((d) => this.trendingCourses = [...d]);
    fetch("https://after-mdx-backend.onrender.com/api/username",{credentials: 'include',}).then((res)=>(res.json())).then((d) => {this.username = d.username; console.log(`Username is ${this.username}`)});
  }
});