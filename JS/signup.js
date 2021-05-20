const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

function Validate(){
  var username = document.querySelector('#us');
  var password = document.querySelector('#ps');

  if(username.value=="sha" && password.value=='sha'){
    window.location="index.html"
   
  }
  else{
    alert("Please enter correct Username or password")
  }
}
function sValidate() {
  var user=document.querySelector('#um');
  var email=document.querySelector('#em');
  var pass=document.querySelector('#pm');

  if(user.value==""){
    alert('please ent')
    user.focus()
  }
  if(email.value==""){
    alert('please ent')
    email.focus()
  }

}