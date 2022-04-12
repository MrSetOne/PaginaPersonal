const todown = (t) => {
    document.getElementById("cuerpo").style.overflowY = "scroll";
    setTimeout(() => {
        document.getElementById("all__hero").style.height = "0";
        document.getElementById("text__hero").style.display = "none";
        document.getElementById("btn__container").style.display = "none";
    }, t);
};

const showme = (site, status) => {
    if (site === "frontend") {
        if (status === 'on') {
            document.getElementById("card__frontend").style.top = "50%";
            document.getElementById("card__frontend").style.opacity = "1";
        } else if (status === 'off') {
            document.getElementById("card__frontend").style.top = "30%";
            document.getElementById("card__frontend").style.opacity = "0";
        }
    } else if (site === 'backend') {
        if (status === 'on') {
            document.getElementById("card__backend").style.top = "50%";
            document.getElementById("card__backend").style.opacity = "1";
        } else if (status === 'off') {
            document.getElementById("card__backend").style.top = "30%";
            document.getElementById("card__backend").style.opacity = "0";
        }
    };
    console.log(`La seccion de ${site} está en ${status}`)
}