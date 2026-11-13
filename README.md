# 🌱 EcoKit Universitario
### Transformando el campus con propósito sostenible

**EcoKit Universitario** es un proyecto académico desarrollado en el marco del curso de Innovación y Emprendimiento de la Universidad Privada del Norte (UPN). Nace con el propósito de fomentar hábitos de consumo responsable, reducir el uso de productos descartables y promover la economía circular dentro de la comunidad universitaria.

El proyecto combina una propuesta ecológica con una plataforma web interactiva que permite conocer el diagnóstico ambiental, explorar los componentes del kit, calcular el impacto de los hábitos de consumo y participar en una iniciativa piloto de sostenibilidad.

🔗 **Demo en vivo:** [EcoKit Universitario](https://angelcaldasdev.github.io/EcoKIT-Universitario/)

💻 **Repositorio:** [GitHub - EcoKIT-Universitario](https://github.com/angelcaldasdev/EcoKIT-Universitario)

---

## 🎯 Objetivo del proyecto

Promover una cultura de sostenibilidad dentro de la comunidad universitaria mediante alternativas reutilizables, herramientas digitales y acciones de concientización ambiental.

La iniciativa busca demostrar que pequeñas modificaciones en los hábitos cotidianos pueden contribuir a disminuir la generación de residuos y fortalecer el compromiso ambiental de los estudiantes.

## 🌎 Problemática identificada

El proyecto parte de un diagnóstico socioambiental enfocado en la generación de residuos y el consumo de productos descartables dentro del entorno universitario.

Entre los principales datos identificados se encuentran:

| Indicador | Resultado |
|---|---:|
| Residuos generados semanalmente en el campus | 480 kg |
| Materiales potencialmente reciclables | 62 % |
| Estudiantes que utilizan productos descartables diariamente | 74 % |

Estos resultados permiten identificar oportunidades para implementar alternativas sostenibles y fomentar una mayor conciencia ambiental en la comunidad universitaria.

---

## 🎒 ¿Qué contiene el EcoKit?

El EcoKit Universitario está compuesto por cuatro elementos que buscan reemplazar productos de un solo uso y facilitar la adopción de hábitos responsables.

| Componente | Descripción |
|---|---|
| 🥤 Botella reutilizable | Alternativa para reducir el consumo de botellas plásticas descartables. |
| 🛍️ Bolsa ecológica | Permite transportar productos y materiales evitando el uso de bolsas plásticas. |
| 🍴 Cubiertos reutilizables | Disminuyen el consumo de cubiertos descartables. |
| 📖 Guía de sostenibilidad | Material informativo con recomendaciones para adoptar prácticas responsables. |

---

## ✨ Funcionalidades de la plataforma web

La plataforma cuenta con diferentes secciones diseñadas para presentar la propuesta y facilitar la interacción con los usuarios.

### 🏠 Inicio
- Presentación general de EcoKit Universitario.
- Mensaje principal enfocado en la sostenibilidad.
- Indicadores ambientales destacados.
- Accesos directos a las principales secciones.
- Principios de economía circular: reutilizar, reparar y reducir.

### 📊 Diagnóstico ambiental
- Presentación de la problemática identificada.
- Información sobre la generación de residuos.
- Indicadores relacionados con el consumo de productos descartables.
- Concientización sobre la importancia del reciclaje y la reutilización.

### 🎒 El Kit
- Presentación de los cuatro componentes del EcoKit.
- Imágenes individuales de los productos.
- Descripción de sus características y beneficios.
- Información orientada a promover alternativas reutilizables.

### 🧮 Calculadora de impacto
- Herramienta interactiva para explorar el impacto de los hábitos de consumo.
- Interacción mediante JavaScript.
- Presentación de resultados relacionados con las prácticas sostenibles.

### 🌿 Únete al piloto
- Sección orientada a promover la participación de la comunidad universitaria.
- Espacio de interacción para las personas interesadas en la iniciativa.
- Integración con el sistema de almacenamiento de información del proyecto.

---

## 🛠️ Tecnologías utilizadas

El proyecto fue desarrollado utilizando tecnologías web para construir una plataforma interactiva y conectar la aplicación con servicios externos.

| Tecnología | Aplicación |
|---|---|
| HTML5 | Estructura semántica y organización del contenido de la página. |
| CSS3 | Diseño visual, estilos, distribución y adaptación de la interfaz. |
| JavaScript | Funcionalidades interactivas, lógica y manipulación del DOM. |
| Node.js | Entorno de ejecución para las funcionalidades del servidor. |
| Turso | Base de datos SQLite distribuida para el almacenamiento de información. |
| Render | Plataforma de alojamiento del servicio backend. |
| GitHub Pages | Publicación y alojamiento de la página web. |
| Git y GitHub | Control de versiones y gestión del código fuente. |

---

## 🏗️ Arquitectura del proyecto

La solución utiliza diferentes servicios para separar la interfaz web, el procesamiento del servidor y el almacenamiento de información.

```text
       USUARIO
          |
          v
  +------------------+
  |   GitHub Pages   |
  |   HTML + CSS     |
  |   JavaScript     |
  +------------------+
          |
          | Solicitudes HTTP
          v
  +------------------+
  |      Render      |
  |  Node.js / API   |
  +------------------+
          |
          | Conexión a BD
          v
  +------------------+
  |      Turso       |
  |   SQLite Cloud   |
  +------------------+
```

**¿Qué función cumple cada servicio?**

- **GitHub Pages:** permite publicar y acceder a la interfaz web del proyecto.
- **Render:** aloja el servicio backend y procesa las solicitudes de la aplicación.
- **Turso:** permite almacenar y consultar información mediante una base de datos SQLite en la nube.

Esta arquitectura permite separar las responsabilidades de cada componente y facilita el mantenimiento y crecimiento de la aplicación.

---

## 🗄️ Base de datos

Para el almacenamiento de información se utiliza **Turso**, un servicio de base de datos basado en SQLite que permite trabajar con información persistente en la nube.

Su incorporación permite conectar la aplicación con una base de datos independiente del alojamiento de la página web.

El proyecto utiliza esta integración para gestionar la información que requiere el funcionamiento de sus funcionalidades dinámicas.

---

## 📂 Estructura del proyecto

La organización principal del repositorio es la siguiente:

```text
EcoKIT-Universitario/
│
├── imagenes/
│   ├── bolsa.jpg.jfif
│   ├── botella.png
│   ├── cubiertos.jpg.jfif
│   └── guia.jpg.jfif
│
├── node_modules/
│
├── .gitignore
├── favicon.svg
├── funciones.js
├── index.html
├── package.json
├── package-lock.json
├── server.js
└── style.css
```

**Descripción de los principales archivos:**

| Archivo | Descripción |
|---|---|
| `index.html` | Contiene la estructura principal de la página web. |
| `style.css` | Define los estilos, diseño y presentación visual. |
| `funciones.js` | Contiene la lógica e interacciones desarrolladas con JavaScript. |
| `server.js` | Contiene la implementación del servidor backend. |
| `package.json` | Define las dependencias y configuración del proyecto. |
| `favicon.svg` | Icono que identifica la página en el navegador. |
| `imagenes/` | Almacena los recursos gráficos utilizados en la plataforma. |
| `.gitignore` | Define los archivos y carpetas excluidos del control de versiones. |

---

## 🚀 Ejecución del proyecto

Para trabajar con el proyecto en un entorno local, sigue estos pasos:

**1. Clonar el repositorio**

```bash
git clone https://github.com/angelcaldasdev/EcoKIT-Universitario.git
```

**2. Ingresar a la carpeta**

```bash
cd EcoKIT-Universitario
```

**3. Instalar las dependencias**

```bash
npm install
```

**4. Configurar el servidor y la conexión con Turso**

Revisar la configuración del archivo `server.js` y los parámetros de conexión necesarios para utilizar la base de datos.

Las credenciales deben mantenerse en variables de entorno y nunca publicarse directamente en GitHub.

**5. Ejecutar la aplicación**

Para visualizar la página, puedes utilizar la extensión Live Server de Visual Studio Code y abrir `index.html`.

Para las funcionalidades que requieren backend, inicia también el servidor:

```bash
node server.js
```

La disponibilidad de las funcionalidades conectadas a la base de datos dependerá de que el servidor y su conexión estén correctamente configurados.

---

## ☁️ Despliegue

El proyecto utiliza servicios en la nube para mantener disponible la aplicación y gestionar la información.

| Componente | Servicio | Función |
|---|---|---|
| Frontend | GitHub Pages | Publicación de la interfaz web. |
| Backend | Render | Alojamiento del servidor. |
| Base de datos | Turso | Almacenamiento de información en la nube. |

**Demo publicada:**

https://angelcaldasdev.github.io/EcoKIT-Universitario/

---

## 🔐 Consideraciones de seguridad

Para el funcionamiento de una aplicación conectada a servicios externos, es importante considerar buenas prácticas de desarrollo:

- Mantener las credenciales de acceso a la base de datos fuera del repositorio.
- Utilizar variables de entorno para configurar los servicios.
- Evitar publicar tokens y contraseñas en archivos de código.
- Realizar validaciones de los datos recibidos por el servidor.
- Mantener separada la lógica de presentación de la lógica del backend.
- Excluir archivos sensibles y dependencias innecesarias mediante `.gitignore`.

---

## 🗺️ Próximas mejoras

EcoKit Universitario tiene potencial para seguir creciendo mediante nuevas funcionalidades:

- Incorporar un panel administrativo para gestionar los registros del piloto.
- Mejorar el seguimiento de los indicadores de impacto ambiental.
- Ampliar las funcionalidades de la calculadora de impacto.
- Implementar gráficos interactivos para visualizar resultados.
- Incorporar nuevas herramientas de participación para la comunidad universitaria.
- Optimizar la experiencia de usuario en dispositivos móviles.
- Ampliar la plataforma hacia una solución Full Stack más completa.

---

## 📚 ¿Qué aprendí desarrollando este proyecto?

El desarrollo de EcoKit Universitario permitió reforzar conocimientos técnicos y comprender mejor el proceso de construcción de una aplicación web.

Entre los principales aprendizajes destacan:

- Desarrollo de interfaces web utilizando HTML5 y CSS3.
- Manipulación del DOM y gestión de eventos mediante JavaScript.
- Organización de archivos y recursos de un proyecto web.
- Integración de una aplicación con servicios backend.
- Comprensión del funcionamiento de una base de datos SQLite en la nube mediante Turso.
- Despliegue de aplicaciones utilizando GitHub Pages y Render.
- Uso de Git y GitHub para el control de versiones.
- Aplicación de herramientas tecnológicas para abordar una problemática real mediante una propuesta de innovación.

Este proyecto también permitió comprender que el desarrollo de software no consiste únicamente en construir una interfaz visual, sino en integrar diferentes tecnologías para ofrecer una solución funcional y con propósito.

---

## 🎓 Contexto académico

- **Universidad:** Universidad Privada del Norte (UPN).
- **Carrera:** Ingeniería de Sistemas Computacionales.
- **Curso:** Innovación y Emprendimiento.
- **Proyecto:** EcoKit Universitario.
- **Enfoque:** Innovación, sostenibilidad y economía circular.
- **Tecnologías:** HTML, CSS, JavaScript, Node.js, Turso y Render.

---

## 👨‍💻 Autor

**Angel Caldas**

Estudiante de Ingeniería de Sistemas Computacionales | Desarrollador en formación Full Stack.

Interesado en el desarrollo de software, tecnologías web, soluciones digitales y construcción de aplicaciones que generen valor.

Actualmente enfocado en fortalecer mis conocimientos en Java, Spring Boot, Angular, TypeScript y bases de datos.

### 🔗 Conecta conmigo

- 💼 **LinkedIn:** [Mi perfil profesional](# 🌱 EcoKit Universitario
### Transformando el campus con propósito sostenible

**EcoKit Universitario** es un proyecto académico desarrollado en el marco del curso de Innovación y Emprendimiento de la Universidad Privada del Norte (UPN). Nace con el propósito de fomentar hábitos de consumo responsable, reducir el uso de productos descartables y promover la economía circular dentro de la comunidad universitaria.

El proyecto combina una propuesta ecológica con una plataforma web interactiva que permite conocer el diagnóstico ambiental, explorar los componentes del kit, calcular el impacto de los hábitos de consumo y participar en una iniciativa piloto de sostenibilidad.

🔗 **Demo en vivo:** [EcoKit Universitario](https://angelcaldasdev.github.io/EcoKIT-Universitario/)

💻 **Repositorio:** [GitHub - EcoKIT-Universitario](https://github.com/angelcaldasdev/EcoKIT-Universitario)

---

## 🎯 Objetivo del proyecto

Promover una cultura de sostenibilidad dentro de la comunidad universitaria mediante alternativas reutilizables, herramientas digitales y acciones de concientización ambiental.

La iniciativa busca demostrar que pequeñas modificaciones en los hábitos cotidianos pueden contribuir a disminuir la generación de residuos y fortalecer el compromiso ambiental de los estudiantes.

## 🌎 Problemática identificada

El proyecto parte de un diagnóstico socioambiental enfocado en la generación de residuos y el consumo de productos descartables dentro del entorno universitario.

Entre los principales datos identificados se encuentran:

| Indicador | Resultado |
|---|---:|
| Residuos generados semanalmente en el campus | 480 kg |
| Materiales potencialmente reciclables | 62 % |
| Estudiantes que utilizan productos descartables diariamente | 74 % |

Estos resultados permiten identificar oportunidades para implementar alternativas sostenibles y fomentar una mayor conciencia ambiental en la comunidad universitaria.

---

## 🎒 ¿Qué contiene el EcoKit?

El EcoKit Universitario está compuesto por cuatro elementos que buscan reemplazar productos de un solo uso y facilitar la adopción de hábitos responsables.

| Componente | Descripción |
|---|---|
| 🥤 Botella reutilizable | Alternativa para reducir el consumo de botellas plásticas descartables. |
| 🛍️ Bolsa ecológica | Permite transportar productos y materiales evitando el uso de bolsas plásticas. |
| 🍴 Cubiertos reutilizables | Disminuyen el consumo de cubiertos descartables. |
| 📖 Guía de sostenibilidad | Material informativo con recomendaciones para adoptar prácticas responsables. |

---

## ✨ Funcionalidades de la plataforma web

La plataforma cuenta con diferentes secciones diseñadas para presentar la propuesta y facilitar la interacción con los usuarios.

### 🏠 Inicio
- Presentación general de EcoKit Universitario.
- Mensaje principal enfocado en la sostenibilidad.
- Indicadores ambientales destacados.
- Accesos directos a las principales secciones.
- Principios de economía circular: reutilizar, reparar y reducir.

### 📊 Diagnóstico ambiental
- Presentación de la problemática identificada.
- Información sobre la generación de residuos.
- Indicadores relacionados con el consumo de productos descartables.
- Concientización sobre la importancia del reciclaje y la reutilización.

### 🎒 El Kit
- Presentación de los cuatro componentes del EcoKit.
- Imágenes individuales de los productos.
- Descripción de sus características y beneficios.
- Información orientada a promover alternativas reutilizables.

### 🧮 Calculadora de impacto
- Herramienta interactiva para explorar el impacto de los hábitos de consumo.
- Interacción mediante JavaScript.
- Presentación de resultados relacionados con las prácticas sostenibles.

### 🌿 Únete al piloto
- Sección orientada a promover la participación de la comunidad universitaria.
- Espacio de interacción para las personas interesadas en la iniciativa.
- Integración con el sistema de almacenamiento de información del proyecto.

---

## 🛠️ Tecnologías utilizadas

El proyecto fue desarrollado utilizando tecnologías web para construir una plataforma interactiva y conectar la aplicación con servicios externos.

| Tecnología | Aplicación |
|---|---|
| HTML5 | Estructura semántica y organización del contenido de la página. |
| CSS3 | Diseño visual, estilos, distribución y adaptación de la interfaz. |
| JavaScript | Funcionalidades interactivas, lógica y manipulación del DOM. |
| Node.js | Entorno de ejecución para las funcionalidades del servidor. |
| Turso | Base de datos SQLite distribuida para el almacenamiento de información. |
| Render | Plataforma de alojamiento del servicio backend. |
| GitHub Pages | Publicación y alojamiento de la página web. |
| Git y GitHub | Control de versiones y gestión del código fuente. |

---

## 🏗️ Arquitectura del proyecto

La solución utiliza diferentes servicios para separar la interfaz web, el procesamiento del servidor y el almacenamiento de información.

```text
       USUARIO
          |
          v
  +------------------+
  |   GitHub Pages   |
  |   HTML + CSS     |
  |   JavaScript     |
  +------------------+
          |
          | Solicitudes HTTP
          v
  +------------------+
  |      Render      |
  |  Node.js / API   |
  +------------------+
          |
          | Conexión a BD
          v
  +------------------+
  |      Turso       |
  |   SQLite Cloud   |
  +------------------+
```

**¿Qué función cumple cada servicio?**

- **GitHub Pages:** permite publicar y acceder a la interfaz web del proyecto.
- **Render:** aloja el servicio backend y procesa las solicitudes de la aplicación.
- **Turso:** permite almacenar y consultar información mediante una base de datos SQLite en la nube.

Esta arquitectura permite separar las responsabilidades de cada componente y facilita el mantenimiento y crecimiento de la aplicación.

---

## 🗄️ Base de datos

Para el almacenamiento de información se utiliza **Turso**, un servicio de base de datos basado en SQLite que permite trabajar con información persistente en la nube.

Su incorporación permite conectar la aplicación con una base de datos independiente del alojamiento de la página web.

El proyecto utiliza esta integración para gestionar la información que requiere el funcionamiento de sus funcionalidades dinámicas.

---

## 📂 Estructura del proyecto

La organización principal del repositorio es la siguiente:

```text
EcoKIT-Universitario/
│
├── imagenes/
│   ├── bolsa.jpg.jfif
│   ├── botella.png
│   ├── cubiertos.jpg.jfif
│   └── guia.jpg.jfif
│
├── node_modules/
│
├── .gitignore
├── favicon.svg
├── funciones.js
├── index.html
├── package.json
├── package-lock.json
├── server.js
└── style.css
```

**Descripción de los principales archivos:**

| Archivo | Descripción |
|---|---|
| `index.html` | Contiene la estructura principal de la página web. |
| `style.css` | Define los estilos, diseño y presentación visual. |
| `funciones.js` | Contiene la lógica e interacciones desarrolladas con JavaScript. |
| `server.js` | Contiene la implementación del servidor backend. |
| `package.json` | Define las dependencias y configuración del proyecto. |
| `favicon.svg` | Icono que identifica la página en el navegador. |
| `imagenes/` | Almacena los recursos gráficos utilizados en la plataforma. |
| `.gitignore` | Define los archivos y carpetas excluidos del control de versiones. |

---

## 🚀 Ejecución del proyecto

Para trabajar con el proyecto en un entorno local, sigue estos pasos:

**1. Clonar el repositorio**

```bash
git clone https://github.com/angelcaldasdev/EcoKIT-Universitario.git
```

**2. Ingresar a la carpeta**

```bash
cd EcoKIT-Universitario
```

**3. Instalar las dependencias**

```bash
npm install
```

**4. Configurar el servidor y la conexión con Turso**

Revisar la configuración del archivo `server.js` y los parámetros de conexión necesarios para utilizar la base de datos.

Las credenciales deben mantenerse en variables de entorno y nunca publicarse directamente en GitHub.

**5. Ejecutar la aplicación**

Para visualizar la página, puedes utilizar la extensión Live Server de Visual Studio Code y abrir `index.html`.

Para las funcionalidades que requieren backend, inicia también el servidor:

```bash
node server.js
```

La disponibilidad de las funcionalidades conectadas a la base de datos dependerá de que el servidor y su conexión estén correctamente configurados.

---

## ☁️ Despliegue

El proyecto utiliza servicios en la nube para mantener disponible la aplicación y gestionar la información.

| Componente | Servicio | Función |
|---|---|---|
| Frontend | GitHub Pages | Publicación de la interfaz web. |
| Backend | Render | Alojamiento del servidor. |
| Base de datos | Turso | Almacenamiento de información en la nube. |

**Demo publicada:**

https://angelcaldasdev.github.io/EcoKIT-Universitario/

---

## 🔐 Consideraciones de seguridad

Para el funcionamiento de una aplicación conectada a servicios externos, es importante considerar buenas prácticas de desarrollo:

- Mantener las credenciales de acceso a la base de datos fuera del repositorio.
- Utilizar variables de entorno para configurar los servicios.
- Evitar publicar tokens y contraseñas en archivos de código.
- Realizar validaciones de los datos recibidos por el servidor.
- Mantener separada la lógica de presentación de la lógica del backend.
- Excluir archivos sensibles y dependencias innecesarias mediante `.gitignore`.

---

## 🗺️ Próximas mejoras

EcoKit Universitario tiene potencial para seguir creciendo mediante nuevas funcionalidades:

- Incorporar un panel administrativo para gestionar los registros del piloto.
- Mejorar el seguimiento de los indicadores de impacto ambiental.
- Ampliar las funcionalidades de la calculadora de impacto.
- Implementar gráficos interactivos para visualizar resultados.
- Incorporar nuevas herramientas de participación para la comunidad universitaria.
- Optimizar la experiencia de usuario en dispositivos móviles.
- Ampliar la plataforma hacia una solución Full Stack más completa.

---

## 📚 ¿Qué aprendí desarrollando este proyecto?

El desarrollo de EcoKit Universitario permitió reforzar conocimientos técnicos y comprender mejor el proceso de construcción de una aplicación web.

Entre los principales aprendizajes destacan:

- Desarrollo de interfaces web utilizando HTML5 y CSS3.
- Manipulación del DOM y gestión de eventos mediante JavaScript.
- Organización de archivos y recursos de un proyecto web.
- Integración de una aplicación con servicios backend.
- Comprensión del funcionamiento de una base de datos SQLite en la nube mediante Turso.
- Despliegue de aplicaciones utilizando GitHub Pages y Render.
- Uso de Git y GitHub para el control de versiones.
- Aplicación de herramientas tecnológicas para abordar una problemática real mediante una propuesta de innovación.

Este proyecto también permitió comprender que el desarrollo de software no consiste únicamente en construir una interfaz visual, sino en integrar diferentes tecnologías para ofrecer una solución funcional y con propósito.

---

## 🎓 Contexto académico

- **Universidad:** Universidad Privada del Norte (UPN).
- **Carrera:** Ingeniería de Sistemas Computacionales.
- **Curso:** Innovación y Emprendimiento.
- **Proyecto:** EcoKit Universitario.
- **Enfoque:** Innovación, sostenibilidad y economía circular.
- **Tecnologías:** HTML, CSS, JavaScript, Node.js, Turso y Render.

---

## 👨‍💻 Autor

**Angel Caldas**

Estudiante de Ingeniería de Sistemas Computacionales | Desarrollador en formación Full Stack.

Interesado en el desarrollo de software, tecnologías web, soluciones digitales y construcción de aplicaciones que generen valor.

Actualmente enfocado en fortalecer mis conocimientos en Java, Spring Boot, Angular, TypeScript y bases de datos.

### 🔗 Conecta conmigo

- 💼 **LinkedIn:** [AngelCaldasLinkedIn](https://www.linkedin.com/in/angel-rafael-caldas-ocmin-930b1a151/)
- 🐙 **GitHub:** [angelcaldasdev](https://github.com/angelcaldasdev)
- 🌐 **Proyecto:** [EcoKit Universitario](https://angelcaldasdev.github.io/EcoKIT-Universitario/)
---

🌱 **Pequeñas acciones, grandes cambios. La sostenibilidad también se construye desde la tecnología.**

*Proyecto académico desarrollado con innovación, tecnología y compromiso ambiental.*)
- 🐙 **GitHub:** [angelcaldasdev](https://github.com/angelcaldasdev)
- 🌐 **Proyecto:** [EcoKit Universitario](https://angelcaldasdev.github.io/EcoKIT-Universitario/)

---

🌱 **Pequeñas acciones, grandes cambios. La sostenibilidad también se construye desde la tecnología.**

*Proyecto académico desarrollado con innovación, tecnología y compromiso ambiental.*