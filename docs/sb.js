let app = new Vue({
  el: '#app',
  data() {
    return {
      courseDetails : {
        name: 'demo',
        subcategory: 'something'
      }
    }
  },
  mounted() {
    fetch(`localhost:3001/api/courses/6733d4cbfec9b003a7c837b9`).then((res)=>(res.json())).then((data)=>{Object.assign(this.courseDetails, data)});
  },
});