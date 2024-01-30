<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a name="readme-top"></a>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/fisaavedrae/desafio_bd_node_i">
    <img src="https://fidatech.net/felipe/" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">Desafío - Like Me (Parte I)</h3>

  <p align="center">
    project_description
    <br />
    <a href="https://github.com/fisaavedrae/desafio_bd_node_i"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/fisaavedrae/desafio_bd_node_i">View Demo</a>
    ·
    <a href="https://github.com/fisaavedrae/desafio_bd_node_i/issues">Report Bug</a>
    ·
    <a href="https://github.com/fisaavedrae/desafio_bd_node_i/issues">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Contenido</summary>
  <ol>
    <li>
      <a href="#about-the-project">Acerca del Proyecto</a>
      <ul>
        <li><a href="#built-with">Construido con</a></li>
      </ul>
    </li>    
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## Desafío - Like Me (Parte I)

[![Product Name Screen Shot][product-screenshot]](https://fidatech.net/felipe/)

<ul>
<li>
Para realizar este desafío debes haber estudiado previamente todo el material
disponible correspondiente a la unidad.
</li>
<li>Una vez terminado el desafío, comprime la carpeta que contiene el desarrollo de los
requerimientos solicitados y sube el .zip en el LMS.</li>
<li>Puntaje total: 10 puntos</li>
<li>Desarrollo desafío:
<ul>
<li>El desafío se debe desarrollar de manera Individual.</li>
<li>Para la realización del desafío necesitarás apoyarte del archivo Apoyo Desafío - Like Me (Parte I).</li>
</li>
</ul></ul>

## Descripción
La red social “Like Me” está apenas iniciando el proceso de desarrollo, se encuentra
estudiando el mercado y analizando la competencia y ha descubierto que el éxito de esta
industria se enfoca en los likes de los posts emitidos por los usuarios, por lo que decidió
iniciar con el desarrollo de la lógica correspondiente a la creación de posts y a la interacción
de likes que este puede tener.
En este desafío serás un desarrollador full stack developer de la empresa “Like Me” y
deberás crear un servidor que disponibilice las rutas GET y POST para consultas y guardar
los posts en una base de datos PostgreSQL con el paquete pg.
Para el desarrollo de este desafío dispondrás de un Apoyo Desafío - Like Me, que contiene
una aplicación React con la interfaz que te mostramos en la siguiente imagen

Esta aplicación React de apoyo incluye las consultas HTTP a un servidor local en el puerto
3000 con las rutas correspondientes al desafío en sus diferentes interacciones.

Para iniciar con el desarrollo de este desafío, ocupa las siguientes instrucciones SQL para
crear una base de datos likeme y una tabla posts.

```sql
CREATE DATABASE likeme;
```
```sql
CREATE TABLE posts (id SERIAL, titulo VARCHAR(25), img VARCHAR(1000),
descripcion VARCHAR(255), likes INT);
```


## Requerimientos
<ul>
<li>Habilitar los cors en el servidor utilizando el paquete de npm. (2 puntos)</li>
<li>Usar el paquete pg para conectarse e interactuar con la base de datos. (2 puntos)</li>
<li>Crear una ruta GET con Express para devolver los registros de una tabla alojada en PostgreSQL. (3 puntos)</li>
<li>Crear una ruta POST con Express que reciba y almacene en PostgreSQL un  registro. (3 puntos)</li>
</ul>


<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

* [![Node][Node.js]][Node-url]
* [![Express][Express.js]][Express-url]
* [![Json][Json]][Json-url]


<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->
## Uso

Para ejecutar el proyecto se debe usar nodemon, cors y dotenv

El proyecto esta divido en dos carpetas, Backend y Frontend.

El backend tiene las siguientes rutas

<ul>
<li>GET: http://localhost:3000/posts/</li>
<li>POST: http://localhost:3000/posts/</li>
<li>PUT: http://localhost:3000/posts/id</li>
<li>DELETE: http://localhost:3000/posts/id</li>
</ul>
 

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- CONTACT -->
## Contacto

Felipe Saavedra - [@fisaavedrae](https://fidatech.net/felipe/) - fisaavedrae@gmail.com

Project Link: [https://github.com/fisaavedrae/desafio_bd_node_i](https://github.com/fisaavedrae/desafio_bd_node_i)

<p align="right">(<a href="#readme-top">back to top</a>)</p>






<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/fisaavedrae/desafio_bd_node_i.svg?style=for-the-badge
[contributors-url]: https://github.com/fisaavedrae/desafio_bd_node_i/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/fisaavedrae/desafio_bd_node_i.svg?style=for-the-badge
[forks-url]: https://github.com/fisaavedrae/desafio_bd_node_i/network/members
[stars-shield]: https://img.shields.io/github/stars/fisaavedrae/desafio_bd_node_i.svg?style=for-the-badge
[stars-url]: https://github.com/fisaavedrae/desafio_bd_node_i/stargazers
[issues-shield]: https://img.shields.io/github/issues/fisaavedrae/desafio_bd_node_i.svg?style=for-the-badge
[issues-url]: https://github.com/fisaavedrae/desafio_bd_node_i/issues
[license-shield]: https://img.shields.io/github/license/fisaavedrae/desafio_bd_node_i.svg?style=for-the-badge
[license-url]: https://github.com/fisaavedrae/desafio_bd_node_i/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/fisaavedrae
[product-screenshot]: https://github.com/fisaavedrae/desafio_bd_node_i/blob/main/frontend/src/assets/screenshot.png
[Node.js]: https://img.shields.io/badge/node.js-000000?style=for-the-badge&logo=nodedotjs&logoColor=white
[Node-url]: https://nodejs.org/en
[Express.js]: https://img.shields.io/badge/express.js-000000?style=for-the-badge&logo=express&logoColor=white
[Express-url]: https://expressjs.com/
[Json]: https://img.shields.io/badge/json-000000?style=for-the-badge&logo=json&logoColor=white
[Json-url]: https://www.json.org/json-es.html
