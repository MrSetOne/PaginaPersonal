<center> <h1>Página personal </h1> </center>

![Revision responsive](./assets/ToReadme/banner.jpg)

## Índice
* [Sobre el proyecto](#sobre-el-proyecto)
    * [Instalación y despliegue](#instalación-y-despliegue)
    * [Tecnologías usadas](#tecnologías-usadas)
    * [Origen](#origen)
    * [Objetivo](#objetivo)
* [Recursos](#recursos)
    * [Fuentes utilizadas](#fuentes-utilizadas)
    * [Paleta de colores](#paleta-de-colores)
    * [Concepto e inspiración](#concepto-e-inspiración)
* [Retos presentados](#retos-presentados)
    * [Nav se mantiene sticky fuera de su padre](#nav-se-mantiene-sticky-fuera-de-su-padre)
    * [Dominio sobre archivos SVG](#dominio-sobre-los-svg)
    * [Uso y masterización de clamp() y min() en CSS](#uso-y-masterización-de-clamp-y-min-en-css)
    * [Práctica Emmet](#práctica-con-emmet)
    * [Sistema de tarjetas de la página knowledge](#sistema-de-tarjetas-de-la-página-knowledge)
    * [Optimización](#optimización)
        * [Implementación de preloads y prefetchs](#prefetch-y-preload)
        * [Optimización de GoogleFonts](#optimización-de-googlefonts)
    * [Responsive WatchFriendly](#responsive-watchfriendly)
    * [Primer contacto con JavaScript en el DOM](#primer-contacto-con-javascript-en-el-dom)
* [Agradecimientos](#agradecimientos)
* [Autor](https://github.com/MrSetOne)

---

## Sobre el proyecto

### Instalación y despliegue:
Para ver el proyecto simplemente tienes que entrar en [esta pagina](https://mrsetone.github.io/PaginaPersonal/) o ejecutar en la terminal `git clone https://github.com/MrSetOne/TB_09_JavaScriptMid.git` y ejecutar el archivo index.html.

### Tecnologías usadas:
Para este proyecto he usado HTML, CSS y JavaScript sin frameworks

### Origen:
Este es mi trabajo de final de rampup del bootcamp de Full Stack Developer en The Bridge.

### Objetivo:
Consiste en la maquetación y desarrollo de mi página web personal, como si fuese una especie de "currículum online" 

## Recursos
### Fuentes utilizadas:
Para esta página he utilizado fuentes de GoogleFonts, para ser más exactos he usado la fuente Montserrat y Beau Rivage.

### Paleta de colores:
La paleta de colores ha sido diseñada en la página de Coolors y la página está diseñada principalmente con colores en clave baja (Colores oscuros), la paleta de color utilizada es la siguiente:

![Captura de paleta de colores](./assets/ToReadme/paleta.png)

### Concepto e inspiración:
La idea es generar una mezcla entre diseño industrial con colores oscuros y naturaleza con tonos verdes.

Este proyecto está basado en la metodología BEM y Tiny tweaks para conseguir un buen responsive. 

El diseño principal está basado en un diseño que tenía hace tiempo realizada en AdobeXd:

![Captura del proyecto en adobexd](./assets/ToReadme/Maquetacion.png)

## Retos presentados

### Nav se mantiene sticky fuera de su padre:
En este proyecto quería hacer que en el índex hubiese un hero que ocupase el 100% de la pantalla pero que el nav quedara por encima del hero y se mantuviese así, para esto tenía pensado usar position: sticky, el problema es que se quedaba dentro del contenedor, para conseguir que se quedase fuera la solución ha sido usar `position: fixed` y debajo del hero he colacodo una embellecedo que hace de fondo real del nav en el resto de la navegación dentro de index.html, para esto he tenido que asignarle unos z-índex altos tanto al nav como a su fondo.

### Dominio sobre los SVG
Para el uso de iconos he usado la librería de FontAwesome, lo que ocurre es que para la página knowledge.html quería meter muchos logos los cuales no estaban en dicha librería, entonces he tenido que buscar los archivos SVG de distintos bancos de imagen. El problema está en que la mayoría de estos archivos llevan dentro los colores ya asignados, tras bastantes pruebas y experimentos he descubierto que los archivo SVG cuentan con las etiquetas `<style>` y `<defs>`, estas etiquetas sirven para otorgar al archivo de propiedades de estilos. El archivo tiene diversas capas, en todos los que he tocado se llamaban `cls-X`, simplemente ha que cambiar la propiedad `fill:#xxxxxx` por el color en hexadecimal que quieras colocar.

Ejemplo de estructura típica que encuentras dentro de estos archivos `<defs><style>.cls-1{fill:#xxxxxx}</style></defs>`

### Uso y masterización de clamp() y min() en CSS
En este proyecto he utilizado las funciones `clamp()` y `min()` para poder hacer responsive la página sin abusar de MediaQueries, el funcionamiento de estas funciones es la siguiente:
* `min()` => Para que funcione correctamente tienes que usar un valor absoluto y otro relativo, siempre usa el tamaño más pequeño de los dos, se usa principalmente para la propiedad `width:`.
* `clamp()` => Para esta función es necesario 3 valores, dos absolutos y uno relativo, los absolutos valen como topes (mínimo y máximo) y el relativo como valor ideal, el cuál cambia de tamaño hasta alcanzar uno de los dos topes, se usa principalmente en la propiedad `font-size:`.

### Práctica con Emmet
Esta página tiene una gran cantidad de lineas HTML y usa la metodología BEM, lo que hace que se le dedique mucho tiempo a HTML, para intentar agilizar esto he "abusado" lo máximo posible de Emmet, adjunto ejemplo de cómo esta herramienta optimiza tanto:

Código introducido en Visual Studio code:

`h1.portfolio__container+div.porfolio__container>div.portfolio__item*4>img.portfolio__imagen+div.portfolio__description>h2.description__title+p.description__text+a>img`

Lo que devuelve Emmet:

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

### Sistema de tarjetas de la página knowledge

Otro de los beneficios de la metodología BEM es la capacidad de otorgar modificaciones a algunos elementos solo usando clases, por ejemplo el sistema de tarjetas de knowledge.html, aquí he generado las clases:
* `.knowledge__item` => Conocimientos adquiridos no masterizados
* `.knowledge__item--inprogress` => Conocimientos en camino de ser aprendidos
* `.knowledge__item--dominated` => Conocimientos adquiridos y masterizados 

De esta forma logramos poder incorporar más items a la lista sin ser necesario volverse loco tocando estilos, ya que solo es necesario asignarle las clases correctas.

### Optimización

Cara a la presentación del proyecto veo que los tiempos de cargas son "lentos" a la hora de cargar la versión Web, para ello decidí implementar las siguientes mejoras.

#### Prefetch y preload

Usé preload para evitar que cargase la página HTML antes que la hoja de estilos o la imagen del hero, ya que esto provocaba una sensación de inestabilidad en la página. También usé la propiedad prefetch en la siguiente página en la que se espera que entre el usuario, de esta forma se va descargando la página antes de que el usuario llegue a entrar en el enlace.

#### Optimización de GoogleFonts
A pesar del prefecth y preload, observo que las fuentes provenientes de GoogleFonts tardan en cargar y seguía teniendo ese efecto de inestabilidad. Revisando los tiempos de descargas, veo que la descarga de dichas fuentes eran demasiado elevados, llegando a los 150ms, al parecer tenía muchos estilos de fuentes que no estaba usando, pero igualmente se descargaban. La solución fue modificar el `@import` para que cargasen solo las fuentes necesarias, así consigo optimizar el tiempo de carga para que solo tarde 30ms.


### Responsive WatchFriendly
Uno de los retos que quería afrontar con este proyecto era hacer una web que sea amigable con los smartwatch. Para ello, he estudiado las resoluciones de los mismos y he optado por hacer un MediaQuery de doble condición, usando la siguiente estructura:
```CSS
@media (max-height: 450px) and (max-width: 450px) {

}
```
Con esto puedes controlar las propiedades de los dispositivos que midan menos de 450px de alto y ancho (este es el tamaño a partir del cual se desarrollan los SmartWatch)

### Primer contacto con JavaScript en el DOM
Nunca había usado este lenguaje en el DOM y lo necesitaba para poder hacer un efecto de SPA (SinglePageAplication), el cuál consistía en bloquear el scroll y que este se desbloqueara y te moviese a raíz de un scroll. A su vez, una vez pulsado este botón cambiaría el tamaño del hero, sirviendo así de introducción al contenido real de la página.

También he usado JS en la página index.html para habilitar unas tarjetas cuando el dispositivo que se está usando no dispone de "hover".

## Agradecimientos
En primer lugar, agradecer a TheBridge por el reto impuesto. Es el primer proyecto que tengo que presentar y con tiempo tope, lo que me ha supuesto un reto en la parte buena de la palabra y me ha dado fuerzas para afrontarlo y dar el 200% de mí.

También agradecer a mis compañeros, con los que he podido contar en todo momento para cualquier microataque de "esto no funciona", aportándome un segundo punto de vista, que en algunos casos ha sido vital.

Como no, agradecer tambien a mi pareja, la cual me ha tendio que aguantar 24/7 pagado a la pantalla para poder hacer este proyecto realidad y me ha revisado las faltas de este readme. :heart:

## Pagina desarrollada por Michael Lara Sanchez (MrSetOne)
Para ver más sobre mi desarrollo [haz click aqui](https://github.com/MrSetOne)

## Próximos pasos a dar en esta web:

- [ ] Generar variables y clases de utilidades para limpiar código CSS

- [ ] Estudiar la opción de añadir efecto parallax en el header del índex

- [ ] Estudiar efecto type con librería externa

- [ ] Hacer una página de fotografía y estudiar dónde llevan las tarjetas de hobbies
