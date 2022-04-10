const todown = (t) => {
    document.getElementById("cuerpo").style.overflowY = "scroll";
    setTimeout(() => {
        document.getElementById("all__hero").style.height = "20rem";
        document.getElementById("text__hero").style.display = "none";
        document.getElementById("btn__container").style.display = "none";
    }, t)
}