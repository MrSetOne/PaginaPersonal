# PaginaPersonal

![Captura de fuentes disponibles](./assets/ToReadme/Montserrat.png)
![Captura de paleta de colores](./assets/ToReadme/Captura%20de%20pantalla%202022-04-07%20153313.png)

- [ ] Estudiar la opcion de añadir efecto parallax en el header del index

- [ ] Revisar como iba el tema del preload y la siguiente pagina a cargar

- [x] Revisar proyecto en AdobeXd para poder orientarte

- [x] Estudiar hacer el nav sticky junto a un falso negro para que se quede ahí pillado (Jugar con los z-index)

- [x] Hacer un degradado negro con photoshop en el hero

- [x] Estudiar algun texto bonito para el hero

- [ ] Estudiar efecto type con libreria externa

- [ ] Botton de autoscroll

- [ ] Logotipo de Emmet y añadirlo a la lista

- [ ] Ordenar logos y meterlos en carpetas

Investigacion sobre el codigo de los SVGs y como modificarlo bajo las etiquetas de `<defs><style>.cls-1{fill:#xxxxxx}</style></defs>` en este caso añadiendole la clase cls-1 bajo la misma sintaxis que html

Micropractica con emmet => he usado el codigo `h1.portfolio__container+div.porfolio__container>div.portfolio__item*4>img.portfolio__imagen+div.portfolio__description>h2.description__title+p.description__text+a>img` para obtener el siguiente codigo:

```html
<h1>Portfolio</h1>
<div class="porfolio__container">
    <div class="portfolio__item">
        <img src="" alt="" class="portfolio__imagen">
        <div class="portfolio__description">
            <h2 class="description__title"></h2>
            <p class="description__text"></p>
            <a href=""><img src="" alt=""></a>
        </div>
    </div>
    <div class="portfolio__item">
        <img src="" alt="" class="portfolio__imagen">
        <div class="portfolio__description">
            <h2 class="description__title"></h2>
            <p class="description__text"></p>
            <a href=""><img src="" alt=""></a>
        </div>
    </div>
    <div class="portfolio__item">
        <img src="" alt="" class="portfolio__imagen">
        <div class="portfolio__description">
            <h2 class="description__title"></h2>
            <p class="description__text"></p>
            <a href=""><img src="" alt=""></a>
        </div>
    </div>
    <div class="portfolio__item">
        <img src="" alt="" class="portfolio__imagen">
        <div class="portfolio__description">
            <h2 class="description__title"></h2>
            <p class="description__text"></p>
            <a href=""><img src="" alt=""></a>
        </div>
    </div>
</div>

```