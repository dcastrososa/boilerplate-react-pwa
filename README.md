# boilerplate-react-pwa

## Descripcion de la estructura de carpetas

### business
  En caso de que la app necesita conectarse a una API externa, este es lugar para colocar la logica de negocio.

  ### dao
    Este es el lugar donde colocar los objetos que mapean la base de datos.

  ### api
    Este es el lugar en donde colocar los requets.
    
### components
  Componentes que son usados en toda la aplicacion.
  
### const
  Constantes que son usadas en toda la aplicacion.

### hocs
  Hocs que son usados en toda la aplicacion.

### hooks
  Hooks que son usados en toda la aplicacion.

### pages
  #### Paginas de la aplicacion.
    ##### Los nombres de la carpetas deben ser separados por "-".
    ##### Los nombres de los archivos deben ser camelcase>
    ##### Cada carpeta, correspondiente a cada pagina debe tener un: index.js y style.sass
    ##### Los componentes que usa solo esa pagina deben ir dentro de la carpeta "component", dentro de la carpeta de la pagina.

### providers
  Context y Providers.
  
### system
  Variables o alguna logica de configuracion de la aplicacion.
