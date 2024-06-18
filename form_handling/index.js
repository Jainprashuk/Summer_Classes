

const handlesubmit = (e) => {
  e.preventDefault();
  // console.log(e);
  const formele = document.getElementById("formid");
console.log(formele);

  let UserName = document.getElementById("username").value;
  let Email = document.getElementById("email").value;
  let PhoneNumber = document.getElementById("number").value;
  let Age = document.getElementById("age").value;
  let errorbox = document.getElementById("errorbox");
  let sucessbox = document.getElementById("success")
  let usernamebox = document.getElementById("usernamelelo")

  let obj = {
    
  }

  if (UserName == "") {
    errorbox.innerText = "UserName is Required";
  } else if (Email == ""  ) {
    errorbox.innerText = "Email is Required";
  }else if (PhoneNumber == ""  ) {
    errorbox.innerText = "PhoneNumber is Required";
  }else if (Age == "") {
    errorbox.innerText = "Age is Required";
  }
  else {
    if (Age < 18) {
      errorbox.innerText = "Your Age is less then 18 so you are not eligible";
    }
    let regex = /^(\\+91|91|0)?[6-9][0-9]{9}$/;
    if (regex.test(PhoneNumber)) {
        obj.name = UserName
      formele.style.display = "none"
      usernamebox.innerText= obj.name
      sucessbox.style.display = "block"
      
      
    } else {
      errorbox.innerText = "You are not eligible as u are not indian citizen";
    }
  }
};



