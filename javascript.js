  //Regex Email Validering
  let mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  function validate() {
 
    if (!document.myForm.email.value.match(mailFormat)) {
      alert("Indtast venligst en gyldig email");
      return false;
    } else {  
      alert("Du et nu tilmeldt");
    }
  }