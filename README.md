# Pagina personal

## Indice
* Sobre este proyecto
    * Instalacion y despliegue
    * Tecnologias usadas
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
    * Optimizacion
        * Implementacion de preloads y prefetchs
        * Optimizacion de GoogleFonts
    * Responsive WatchFriendly
    * Boton de autoscroll (Primer contacto con JavaScript en el DOM)
* Agradecimientos
* Autor
    
---

## Sobre el proyecto

### Instalacion y despliegue:
Para ver el proyecto simplemente tienes que entrar en [esta pagina](https://mrsetone.github.io/PaginaPersonal/) o ejecutar en la terminal `git clone https://github.com/MrSetOne/TB_09_JavaScriptMid.git` y ejecutar el archivo index.html.

### Tecnologias usadas:
Para este proyecto he usado HTML, CSS y JavaScript sin frameworks

### Origen:
Este es mi trabajo de final de rampup del bootcamp de Full Stack Developer en The Bridge.

### Objetivo:
Consiste en la maquetacion y desarrollo de mi pagina web personal, como si fuese una especie de "curriculum online" 

## Recursos
### Fuentes utilizadas:
Para esta pagina he utilizado fuentes de GoogleFonts, para ser mas exactos he usado la fuente Montserrat y Beau Rivage.

### Paleta de colores:
La paleta de colores ha sido diseñada en al pagina de Coolors y la pagina esta diseñada principalmente con colores en clave baja (Colores oscuros), la paleta de color utilizada es la siguiente:

![Captura de paleta de colores](./assets/ToReadme/paleta.png)

### Concepto e inspiracion:
La idea es generar una mezcla entre diseño industrial con colores oscuros y naturaleza con tonos verdes.

Este protecto está basado en la metodología BEM y Tiny tweaks para conseguir un buen responsive. 

La el diseño principal está basado en un diseño que tenia hace tiempo realizada en AdobeXd:

![Captura del proyecto en adobexd](./assets/ToReadme/Maquetacion.png)

## Retos presentados

### Nav se mantiene sticky fuera de su padre:
En este proyecto queria hacer que en el index hubiese un hero que ocupase el 100% de la pantalla pero que el nav quedara por encima del hero y se mantuviese así, para esto tenia pensado usar position: sticky, el problemas es que se quedaba dentro del contenedor, para conseguir que se quedase fuera la solucion ha sido usar `position: fixed` y debajo del hero he colacodo una embellecedo que hace de fondo real del nav en el resto de la navegacion dentro de index.html, para esto he tenido que asignarle unos z-index altos tanto al nav como a su fondo.

### Dominio sobre los SVG
Para el uso de iconos he usado la libreria de FontAwesome, lo que ocurre es que para la pagina knowledge.html queria meter muchos logos los cual no estaban en dicha libreria, entonces he tenido que buscar los archivos SVG de distintos bancos de imagen, el problema está en que la mayoria de estos archivos llevan dentro los colores ya asignados, tras bastantes pruebas y experimentos he descubierto que los archivo SVG cuentan con las etiquetas `<style>` y `<defs>`, estas etiquetas sirven para otorgar al archivo de propiedades de estilos. El archivo tiene diversas capas, en todos los que he tocado se llamabas `cls-X`, simplemente ha que cambiar la propiedad `fill:#xxxxxx` por el color en hexadecimal que quieras colocar.

Ejemplo de estructura tipica queencuentras dentro de estos archivos `<defs><style>.cls-1{fill:#xxxxxx}</style></defs>`

### Uso y masterizacion de clamp() y min() en CSS
En este proyecto he utilizado las funciones `clamp()` y `min()` para poder hacer responsive la pagina sin abusar de MediaQueries, el funcionamiento de estas funciones es la siguiente:
* `min()` => Para que funcione correctamente tienes que usar un valor absoluto y otro relativo, siempre usa el tamaño mas pequeño de los dos, se usa principalmente para la propiedad `width:`.
* `clamp()` => Para esta funcion es necesario 3 valores, dos absolutos y uno relativo, los absolutos valen como topes (minimo y maximo) y el relativo como valor ideal, el cual cambia de tamaño hasta alcanzar uno de los dos topes, se usa principalmente en la propiedad `font-size:`.

### Practica con Emmet
En esta página tiene una gran cantidad de lineas HTML y usa la metodologia BEM, lo que hace que se le dedique mucho tiempo a HTML, para intentar agilizar esto he "abusado" lo maximo posible de Emmet, adjunto ejemplo de como esta herramienta optimiza tanto:

Codigo introducido en Visual Studio code:

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

### Sistema de tarjetas de la pagina knowledge

Otro de los beneficios de la metodologia BEM es la capacidad de otorgar modificaciones a algunos elementos solo usando clases, por ejemplo el sistema de tarjetas de knowledge.html, aqui he generado las clases:
* `.knowledge__item` => Conocimientos adquiridos no masterizados
* `.knowledge__item--inprogress` => Conocimientos en camino de ser aprendidos
* `.knowledge__item--dominated` => Conocimientos adquiridos y masterizados 

De esta forma logramos poder incorporar mas items a la lista sin ser necesario volverse loco tocando estilos, ya que solo es necesario asignarle las clases correctas.

### Optimizacion

Cara a la presentacion del proyecto veo que los tiempos de cargas son "lentos" a la hora de cargar la version Web, para ello decidí implementar las siguientes mejoras.

#### Prefetch y preload

Usé preload para evitar que cargase la pagina HTML antes que la hoja de estilos o la imagen del hero, ya que esto provocaba una sensacion de inestabilidad en al pagina, tambien usé la propiedad prefetch en la siguiente pagina en la que se espera que entre el usuario, de esta forma se va descargando la pagina antes de que el usuario llegue a entrar en el enlace

#### Optimizacion de GoogleFonts
A pesar del prefecth y preload observo que las fuentes provenientes de GoogleFonts tardan en cargar y seguia teniendo ese efecto de inestabilidad, revisando los tiempos de descargas veo que la descargas de dichas fuentes eran demasiado elevados, llegando a los 150ms, al parecer tenia muchos estilos de fuentes que no estaba usando, pero igualmente se descargaban, la solucion fue modificar el `@import` para que cargasen solo las fuentes necesarias, así consigo optimizar el tiempo de carga para que solo tarde 30ms.


### Responsive WatchFriendly
Uno de los retos que queria afrontar con este proyecto era hacer una web que sea amigable con los smartwatch, para ello he estudiado las resoluciones de los mismos y he optado por hacer un MediaQuery de doble condicion, usando la siguiente estructura:
```CSS
@media (max-height: 450px) and (max-width: 450px) {

}
```
Con esto puedes controlar las propiedades de los dispositivos que midan menos de 450px de alto y ancho (este es el tamaño a partir del cual se desarrollan los SmartWatch)

### Primer contacto con JavaScript en el DOM
Nunca habia usado este lenguaje en el DOM y lo necesitaba para poder hacer un efecto de SPA (SinglePageAplication), el cual consistia en bloquear el scroll y que este se desbloqueara y te moviese a raiz de un scroll, a su vez una vez pulsado este boton cambiaria el tamaño del hero, sirviendo así de introduccion al contenido real de la pagina.

Tambien he usado JS en la pagina index.html para habilitar unas tarjetas cuando el dispositivo que se está usando no dispone de "hover".

## Agradecimmientos
En primer lugar agradecer a TheBridge por el reto impuesto, es el primer proyecto que tengo que presentar y con tiempo tope, esto me ha supuesto un reto en la parte buena de la palabra y me ha dado fuerzas para afrontarlo y dar el 200% de mi.

Tambien agradecer a mis compañeros, con los que he podido contar en todo momento para cualquier microataque de "esto no funciona", aportandome un segundo punto de vista, que en algunos casos ha sido vital.

## Pagina desarrollada por Michael Lara Sánchez(MrSetOne)
Para ver mas sobre mi desarrollo [haz click aqui](https://github.com/MrSetOne)

## Proximos pasos a dar en esta web:

- [ ] Generar variables y clases de utilidades para limpiar codigo CSS

- [ ] Estudiar la opcion de añadir efecto parallax en el header del index

- [ ] Estudiar efecto type con libreria externa

- [ ] Hacer una página de fotografía y estudiar donde llevan las tarjetas de hobbies

- [ ] Retocar el archivo JavaScript para que sea mas "inteligente" añadiendo objeto de control y optimizando las 4 funciones de las tarjetas en 1 sola con if/else y dicho objeto.
