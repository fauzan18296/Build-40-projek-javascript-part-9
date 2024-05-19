const video = document.querySelector(".video-list")
const btnSwitch = document.querySelector(".switch-btn")

btnSwitch.addEventListener("click", () => {
    // jika button tidak berisi class btn-slide maka tambahkan class btn-slide disaat video pause 
  if(!btnSwitch.classList.contains("btn-slide")) {
    btnSwitch.classList.add("btn-slide")
    video.pause()
  } else {
    // kecuali saat button berisi class btn-slide maka hapus class btn-slide disaat kondisi video play  
    btnSwitch.classList.remove("btn-slide")
    video.play()
  }
})