let wiev = document.getElementById("wiev");
let password = document.getElementById("password");


wiev.addEventListener("click", function () {
  if (password.type === "password") {
    password.type = "text";
  } else {
    password.type = "password";
  }
});
let phonenumber =document.querySelector("#phone_number")
let btn =document.querySelector("#btn");

btn.addEventListener('click' , function(e){
    e.preventDefault();
    let data = new FormData()
    data.append('phone_number',phonenumber?.value)
    data.append('password' , password?.value)
    fetch('https://realauto.limsa.uz/api/auth/signin',{ 
        method: 'POST',
        body: data
    }).then(res=>{
        if(res.ok){
          Swal.fire({
            title: "Yuborildi!",
            text: "Malumotlar yuborildi!",
            icon: "success"
          });
        } else{
          Swal.fire({
            title: "Yuborilmadi!",
            text: "Malumotlar yuborilmadi!",
            icon: "error"
          });
        }
    }).catch(err=>{
        alert('Error')
    });
});