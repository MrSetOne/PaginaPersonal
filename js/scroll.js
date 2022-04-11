const todown = (t) => {
    document.getElementById("cuerpo").style.overflowY = "scroll";
    setTimeout(() => {
        document.getElementById("all__hero").style.height = "0";
        document.getElementById("text__hero").style.display = "none";
        document.getElementById("btn__container").style.display = "none";
    }, t);
};

const showme__front = () => {
    document.getElementById("card__frontend").style.top = "50%";
    document.getElementById("card__frontend").style.opacity = "1";
}

const hideme__front = () => {
    document.getElementById("card__frontend").style.top = "30%";
    document.getElementById("card__frontend").style.opacity = "0";
}

const showme__back = () => {
    document.getElementById("card__backend").style.top = "50%";
    document.getElementById("card__backend").style.opacity = "1";
}

const hideme__back = () => {
    document.getElementById("card__backend").style.top = "30%";
    document.getElementById("card__backend").style.opacity = "0";
}