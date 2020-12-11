# [Cervro api](https://cerevro.app)

Web Service para la gestión de datos para Cervro App, Cerevro Web App y Cerevro WebSite
__________

## Index

- [Cervro api](#cervro-api)
  - [Index](#index)
  - [Descripcion del proyecto](#descripcion-del-proyecto)
  - [Ambientes](#ambientes)
    - [Comenzar servidor de pruebas](#comenzar-servidor-de-pruebas)
    - [Desplegar servicio Web](#desplegar-servicio-web)
      - [Despliegue pruebas : alias **staging**](#despliegue-pruebas--alias-staging)
      - [Despliegue producción : alias **prod**](#despliegue-producción--alias-prod)
    - [Url servicios Web](#url-servicios-web)

__________

## Descripcion del proyecto

El proyecto esta construido con [node.js](https://nodejs.org/es/) V10 utilizando librerias de instaladas con **npm** los cuales se pueden ver en el [**packages.json**](functions/package.json).

Utilizamos el ecositema de [Firebase](https://firebase.google.com) para desplegar nuestros desarrollos, apoyandonos en las cloud functions, realtime database, firestore y el hosting que nos proporciona

__________

## Ambientes

### Comenzar servidor de pruebas

1) Ubicados en el directorio del proyecto en un **cmd** ejecutar

        firebase emulators:start --only functions

### Desplegar servicio Web

Depende del ambiente al cual se quiera deplegar

    firebase deploy --only functions:[ALIAS]

- **ALIAS**:
  - staging : Servicio que se conecta a **BD** de pruebas
  - api : Servicio ejecutado para ambiente productivo

#### Despliegue pruebas : alias **staging**

1) Asegurar que la variable **EXECUTE_PROFILE** en el archivo [config.js](./functions/config.js) sea **dev**
2) Añadir los cambios a git y enviarlos a la rama de desarrollo
3) Ejecutar

        firebase deploy --only functions:staging

#### Despliegue producción : alias **prod**

1) Cambiar la variable **EXECUTE_PROFILE** en el archivo [config.js](./functions/config.js) por **prod**
2) Añadir los cambios en git
3) Hacer un pull request a la rama master de git
4) Ejecutar

        firebase deploy --only functions:api

### Url servicios Web

1) URL servicio de producción

        https://us-central1-cerevro-cf50f.cloudfunctions.net/api/

2) URL servicio de pruebas

        https://us-central1-cerevro-cf50f.cloudfunctions.net/staging/

3) URL servicio en desarrollos

        http://localhost:5001/cerevro-cf50f/us-central1/dev/
