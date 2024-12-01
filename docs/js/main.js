let app = new Vue({
  el: '#app',
  data: {
    loggedIn: false,
    trendingCourses: [], 
    username: '',
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