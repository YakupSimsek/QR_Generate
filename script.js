const btn = document.querySelector("#btn");
const qrImage = document.querySelector("#qrI")
const qrText = document.querySelector("#qrT")
const imgBox = document.querySelector("#imgBox")

QRgenerate = () =>{
  if(qrText.value.length > 0  ){
      qrImage.src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+qrText.value
      console.log("Başarılı");
    }else{
      qrText.classList.add("error")
      setTimeout(()=>{
        qrText.classList.remove("error")
      },1000)
    }
 
}
btn.addEventListener("click",QRgenerate)