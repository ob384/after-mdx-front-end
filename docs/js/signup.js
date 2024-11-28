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
    verifyFNmae(){
      if (this.fname.length <=2) {
        this.fnameError = "Please enter a valid name. Name must have at least three characters"
        throw new Error("Please enter a valid name. Name must have at least three characters")
      } else {
        this.fnameError = ""
        
      }
    },
    verifyLNmae(){},
    verifyEmail(){},
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