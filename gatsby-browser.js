import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import AOS from "aos"
import "aos/dist/aos.css"

AOS.init()

const $ = require("jquery")

export const onInitialClientRender = () => {
  $(document).ready(function () {
    /*----------------------------------------------------*/
    /*	    Contact form
    ------------------------------------------------------*/

    var sendbttn = document.querySelector("#sendbttn")

    sendbttn.addEventListener("click", EnviarMensaje)

    function EnviarMensaje() {
      let name = document.querySelector("#name").value
      let email = document.querySelector("#email").value
      let subject = document.querySelector("#subject").value

      let url =
        "https://api.whatsapp.com/send?phone=525626076270&text=Nombre: %0A" +
        name +
        "%0A%0AEmail: %0A" +
        email +
        "%0A%0AAsunto: %0A" +
        subject +
        "%0A"
      window.open(url)
    }
  })
}
