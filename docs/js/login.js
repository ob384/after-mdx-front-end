let app = new Vue({
  el: '#app',
  data() {
    return {
      email: "",
      emailError: "",
      password: "",
      passwordError: "",
    }
  },
  methods: {
    verifyEmail(){
      if (!/([a-z]{2})\d{3}@live.mdx.ac.uk/g.test(this.email)) {
        this.emailError = "Please enter a Valid MDX email"
        throw new Error("Please enter a Valid MDX email")  
      } else {
        this.emailError = ""
      }
    },
    verifyPassword(){
      if (this.password.length <=7) {
        this.passwordError = "Password is too short. Must be at least 8 characters long"
        throw new Error("Password is too short. Must be at least 8 characters long")
      } else {
        this.passwordError = ""
        
      }
    },
  },
})