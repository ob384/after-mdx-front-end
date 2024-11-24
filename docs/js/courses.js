let app = new Vue({
  el: '#app',
  data: {
    loggedIn: false,
    trendingCourses: [],
    pages: [],
    currentPage: 1,
    searchMode: false
  },
  methods: {
    searchModeToggle(){
      this.searchMode = !this.searchMode
    }
  },
  beforeMount() {
    fetch("api/courses/trending").then((res)=>(res.json())).then((data)=>{this.trendingCourses = data});
    
    fetch("api/courses/pages").then((res)=>(res.json())).then((d) => this.pages = [...d]);
  },
  mounted() {
    
  },

});
