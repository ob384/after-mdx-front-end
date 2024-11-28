let app = new Vue({
  el: '#app',
  data: {
    loggedIn: false,
    trendingCourses: [],
    pagesTemp: [],
    pages: [],
    currentPage: 0,
    searchMode: false,
    searchErrorMessage: "Search Something",
    searchValue :'',
    searchResult: []
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

      let criteriaSelect = document.querySelectorAll(".criteria-control")
      
      criteriaSelect.forEach((v,i)=>{
        v.classList.remove("bg-blue-500")
        v.classList.remove("text-white")

        v.classList.add("bg-gray-50")
        v.classList.add("text-gray-600")
      })
      
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
    criteriaToggle(){
      let criteriaSelect = document.querySelectorAll(".criteria-control")
      
      criteriaSelect.forEach((v,i)=>{
        v.classList.remove("bg-blue-500")
        v.classList.remove("text-white")

        v.classList.add("bg-gray-50")
        v.classList.add("text-gray-600")
      })

      event.target.classList.toggle("bg-gray-50")
      event.target.classList.toggle("text-gray-600")

      event.target.classList.toggle("bg-blue-500")
      event.target.classList.toggle("text-white")

      if (event.target.textContent ==='Course Name' && document.querySelectorAll(".order-control")[0].classList.contains("bg-red-500")) {
        this.pagesTemp = [...this.pages]
        let sortTemp = this.pages.flat()
        sortTemp.sort((a,b)=> a.name.localeCompare(b.name))
        this.pages = []

        for (let i = 0; i < sortTemp.length; i+= 12) {
          const page = sortTemp.slice(i, i+12);
          this.pages.push(page)
        }
      } else if (event.target.textContent ==='Course Name' && document.querySelectorAll(".order-control")[1].classList.contains("bg-red-500")) {
        this.pagesTemp = [...this.pages]
        let sortTemp = this.pages.flat()
        sortTemp.sort((a,b)=> b.name.localeCompare(a.name))
        this.pages = []

        for (let i = 0; i < sortTemp.length; i+= 12) {
          const page = sortTemp.slice(i, i+12);
          this.pages.push(page)
        }
      } else if (event.target.textContent ==='Location' && document.querySelectorAll(".order-control")[0].classList.contains("bg-red-500")) {
        this.pagesTemp = [...this.pages]
        let sortTemp = this.pages.flat()
        sortTemp.sort((a,b)=> a.location.localeCompare(b.location))
        this.pages = []

        for (let i = 0; i < sortTemp.length; i+= 12) {
          const page = sortTemp.slice(i, i+12);
          this.pages.push(page)
        }
      } else if (event.target.textContent ==='Location' && document.querySelectorAll(".order-control")[1].classList.contains("bg-red-500")) {
        this.pagesTemp = [...this.pages]
        let sortTemp = this.pages.flat()
        sortTemp.sort((a,b)=> b.location.localeCompare(a.location))
        this.pages = []

        for (let i = 0; i < sortTemp.length; i+= 12) {
          const page = sortTemp.slice(i, i+12);
          this.pages.push(page)
        }
      } else if (event.target.textContent ==='Price' && document.querySelectorAll(".order-control")[0].classList.contains("bg-red-500")) {
        this.pagesTemp = [...this.pages]
        let sortTemp = this.pages.flat()
        sortTemp.sort((a, b) => a.price - b.price);
        this.pages = []

        for (let i = 0; i < sortTemp.length; i+= 12) {
          const page = sortTemp.slice(i, i+12);
          this.pages.push(page)
        }
      } else if (event.target.textContent ==='Price' && document.querySelectorAll(".order-control")[1].classList.contains("bg-red-500")) {
        this.pagesTemp = [...this.pages]
        let sortTemp = this.pages.flat()
        sortTemp.sort((a, b) => b.price - a.price);
        this.pages = []

        for (let i = 0; i < sortTemp.length; i+= 12) {
          const page = sortTemp.slice(i, i+12);
          this.pages.push(page)
        }
      } else if (event.target.textContent ==='Spaces' && document.querySelectorAll(".order-control")[0].classList.contains("bg-red-500")) {
        this.pagesTemp = [...this.pages]
        let sortTemp = this.pages.flat()
        sortTemp.sort((a, b) => a.availableSpaces - b.availableSpaces);
        this.pages = []

        for (let i = 0; i < sortTemp.length; i+= 12) {
          const page = sortTemp.slice(i, i+12);
          this.pages.push(page)
        }
      } else if (event.target.textContent ==='Spaces' && document.querySelectorAll(".order-control")[1].classList.contains("bg-red-500")) {
        this.pagesTemp = [...this.pages]
        let sortTemp = this.pages.flat()
        sortTemp.sort((a, b) => b.availableSpaces - a.availableSpaces);
        this.pages = []

        for (let i = 0; i < sortTemp.length; i+= 12) {
          const page = sortTemp.slice(i, i+12);
          this.pages.push(page)
        }
      }
    },
    search(){

      fetch(`https://after-mdx-backend.onrender.com//api/search/courses?course-name=${this.searchValue}`).then(res=>res.json()).then(d => {
        // console.log(d)
        if (d.length){
          // this.searchResult = d;
          this.$set(this, 'searchResult', d);
        	console.log(`Search result length: ${this.searchResult.length}`);
          this.searchErrorMessage = '';
        } else{
          this.searchErrorMessage = 'Course Not Found';
        }
      })

    }
  },
  beforeMount() {
    fetch("https://after-mdx-backend.onrender.com/api/courses/trending").then((res)=>(res.json())).then((data)=>{this.trendingCourses = data});
    
    fetch("https://after-mdx-backend.onrender.com/api/courses/pages").then((res)=>(res.json())).then((d) => this.pages = [...d]);
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