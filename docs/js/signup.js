let app = new Vue({
  el: "#app",
  data: {
    fname: "",
    fnameError: "",
    lname: "",
    lnameError: "",
    email: "",
    emailError: "",
    password: "",
    passwordError: "",
  },
  methods: {
    verifyFName(){
      if (this.fname.length <=2) {
        this.fnameError = "Please enter a valid name. Name must have at least three characters"
        throw new Error("Please enter a valid name. Name must have at least three characters")
      } else {
        this.fnameError = ""
        
      }
    },
    verifyLName(){
      if (this.lname.length <=2) {
        this.lnameError = "Please enter a valid name. Name must have at least three characters"
        throw new Error("Please enter a valid name. Name must have at least three characters")
      } else {
        this.lnameError = ""
        
      }
    },
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
    signUp(){
      this.verifyFName();
      this.verifyLName();
      this.verifyEmail();
      this.verifyPassword();
      alert("Your username would be the be the first part of your email e.g ab123 if email is ab123@live.mdx.uk")
      event.target.submit(); 
    }
  },
})