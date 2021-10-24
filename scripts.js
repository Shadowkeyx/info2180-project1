/* Add your JavaScript to this file */

function Mailprompt(){

    let button = document.getElementsByClassName("email")[0];
    button.setAttribute("onclick","myFunction");



}

function myFunction() {
    document.getElementById("email").submit();
  }
  
