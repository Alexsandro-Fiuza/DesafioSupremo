function ToggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-lightzero.png")
  } else {
    img.setAttribute("src", "./assets/zertwoavatar.png")
  }


  const trd = document.querySelector("a#yt")

    if (html.classList.contains("light")) {
    trd.setAttribute("href", "https://www.instagram.com/fiuza.10/")
    } 
    else {
    trd.setAttribute(
      "href",
      "https://www.youtube.com/channel/UCs5uwfKbgCSB-12-VwWNq4g"
    )
    }



  const gen = document.querySelector("ion-icon#gen1")

  if (html.classList.contains("light")) {
    gen.setAttribute("name", "logo-youtube")
  }

  else {
  gen.setAttribute("name", "logo-instagram")
  }


  const trd2 = document.querySelector("a#ig")

    if (html.classList.contains("light")) {
      trd2.setAttribute(
        "href",
        "https://www.youtube.com/channel/UCs5uwfKbgCSB-12-VwWNq4g"
      )
    }
    else{
      trd2.setAttribute("href", "https://www.instagram.com/fiuza.10/")
    }

  
  const gen1 = document.querySelector("ion-icon#gen")

  if (html.classList.contains("light")) {
    gen1.setAttribute("name", "logo-instagram")
  } 
  
  else {
    gen1.setAttribute("name", "logo-youtube")
  }
}
