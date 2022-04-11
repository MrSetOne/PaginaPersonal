# Indice
* Sobre este proyecto
    * Origen
    * Objetivo
* Recursos
    * Fuentes utilizadas
    * Paleta de colores
    * Concepto e inspiracion
* Retos presentados
    * Nav se mantiene sticky fuera de su padre
    * Dominio sobre archivos SVG
    * Uso y masterizacion de clamp() y min() en CSS
    * Practica Emmet
    * Sistema de tarjetas de la pagina knowledge
    * Implementacion de preloads y prefetchs
    * Optimizacion de GoogleFonts
    * Reto de WatchFriendly
    * Boton de autoscroll (Primer contacto con JavaScript en el DOM)
    
# Sobre el proyecto

## Origen:
Este es mi trabajo de final de rampup del bootcamp de Full Stack Developer en The Bridge.

## Objetivo:
Consiste en la maquetacion y desarrollo de mi pagina web personal, como si fuese una especie de "curriculum online" 


# Recursos
## Fuentes utilizadas:
Para esta pagina he utilizado fuentes de GoogleFonts, para ser mas exactos he usado la fuente Montserrat y Beau Rivage.

## Paleta de colores:
La paleta de colores ha sido diseñada en al pagina de Coolors y la pagina esta diseñada principalmente con colores en clave baja (Colores oscuros), la paleta de color utilizada es la siguiente:

![Captura de paleta de colores](./assets/ToReadme/paleta.png)

## Concepto e inspiracion:
La idea es generar una mezcla entre diseño industrial con colores oscuros y naturaleza con tonos verdes.

La el diseño principal está basado en un diseño que tenia hace tiempo realizada en AdobeXd:

![Captura del proyecto en adobexd](./assets/ToReadme/Maquetacion.png)

# Retos presentados

## Nav se mantiene sticky fuera de su padre:
En este proyecto queria hacer que en el index hubiese un hero que ocupase el 100% de la pantalla pero que el nav quedara por encima del hero y se mantuviese así, para esto tenia pensado usar position: sticky, el problemas es que se quedaba dentro del contenedor, para conseguir que se quedase fuera la solucion ha sido usar `position: fixed` y debajo del hero he colacodo una embellecedo que hace de fondo real del nav en el resto de la navegacion dentro de index.html, para esto he tenido que asignarle unos z-index altos tanto al nav como a su fondo.

## Dominio sobre los SVG
Para el uso de iconos he usado la libreria de FontAwesome, lo que ocurre es que para la pagina knowledge.html queria meter muchos logos los cual no estaban en dicha libreria, entonces he tenido que buscar los archivos SVG de distintos bancos de imagen, el problema está en que la mayoria de estos archivos llevan dentro los colores ya asignados, tras bastantes pruebas y experimentos he descubierto que los archivo SVG cuentan con las etiquetas `<style>` y `<defs>`, estas etiquetas sirven para otorgar al archivo de propiedades de estilos. El archivo tiene diversas capas, en todos los que he tocado se llamabas `cls-X`, simplemente ha que cambiar la propiedad `fill:#xxxxxx` por el color en hexadecimal que quieras colocar.

Ejemplo de estructura tipica queencuentras dentro de estos archivos `<defs><style>.cls-1{fill:#xxxxxx}</style></defs>`

## Uso y masterizacion de clamp() y min() en CSS



- [x] Revisar proyecto en AdobeXd para poder orientarte

- [x] Estudiar hacer el nav sticky junto a un falso negro para que se quede ahí pillado (Jugar con los z-index)

- [x] Estudiar algun texto bonito para el hero

- [x] Logotipo de Emmet y añadirlo a la lista

- [X] Ordenar logos y meterlos en carpetas

- [x] Mejorar el nav usando grid

- [x] Añadir margin al footer

- [x] Upgrade de las tarjetas de conocimientos 

- [x] Revisar como iba el tema del preload y la siguiente pagina a cargar

- [x] Actualizar importacion de google fonts y limpiar head

- [x] Optimizacion de imagenes pesadas

- [x] Revisar y limpiar "Spanglish"

- [x] Mejorar el responsive para whatch con MQ combinadas

- [x] Botton de autoscroll

- [ ] Añadir hovers compuestos

- [ ] Generar variables y clases de utilidades para limpiar codigo

- [ ] Comprimir el css y generar su version "lite"

- [ ] Estudiar la opcion de añadir efecto parallax en el header del index

- [ ] Estudiar efecto type con libreria externa

Investigacion sobre el codigo de los SVGs y como modificarlo bajo las etiquetas de `<defs><style>.cls-1{fill:#xxxxxx}</style></defs>` en este caso añadiendole la clase cls-1 bajo la misma sintaxis que html

Micropractica con emmet, he usado el codigo:

`h1.portfolio__container+div.porfolio__container>div.portfolio__item*4>img.portfolio__imagen+div.portfolio__description>h2.description__title+p.description__text+a>img`

para obtener el siguiente codigo:

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