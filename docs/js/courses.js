let app = new Vue({
  el: '#app',
  data: {
    loggedIn: false,
    trendingCourses: [],
    pagesTemp: [],
    pages: [],
    currentPage: 0,
    searchMode: false
  },
  methods: {
    previousCoursePage(){
      this.currentPage= this.currentPage>=1 && this.currentPage<= this.pages.length-1 ? this.currentPage-=1 : this.currentPage;
    },
    nextCoursePage(){
      this.currentPage= this.currentPage>=0 && this.currentPage<= this.pages.length-2 ? this.currentPage+=1 : this.currentPage;
    },
    searchModeToggle(){
      this.searchMode = !this.searchMode
    },
    orderToggle(){
      let orderSelect = document.querySelectorAll(".order-control")
      let e_target =event.target
      orderSelect.forEach((v,i)=>{
        v.classList.remove("bg-red-500")
        v.classList.remove("text-white")
      })
      event.target.classList.toggle("text-white")
      event.target.classList.toggle("bg-red-500")

      this.pagesTemp = [...this.pages]
      let sortTemp = this.pages.flat()

      if (event.target.textContent === "Ascending") {
        sortTemp.sort((a,b)=> a.name.localeCompare(b.name))
        
        this.pages = []

        for (let i = 0; i < sortTemp.length; i+= 12) {
          const page = sortTemp.slice(i, i+12);
          this.pages.push(page)
        }
      } else {
        sortTemp.sort((a,b)=> b.name.localeCompare(a.name))
        
        this.pages = []

        for (let i = 0; i < sortTemp.length; i+= 12) {
          const page = sortTemp.slice(i, i+12);
          this.pages.push(page)
        }
      }
    },

  },
  beforeMount() {
    fetch("api/courses/trending").then((res)=>(res.json())).then((data)=>{this.trendingCourses = data});
    
    fetch("api/courses/pages").then((res)=>(res.json())).then((d) => this.pages = [...d]);
  },
  mounted() {
    
  },

});


const people = [
  { name: 'Charlie', age: 20 },
  { name: 'Bob', age: 30 },
  { name: 'Alice', age: 25 },
];

// Sort by name in alphabetical order
people.sort((a, b) => {
  return a.name.localeCompare(b.name);
});