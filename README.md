# VelaioFrontTest

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.16.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.




Aplicacion web con Angular 16 

La aplicacion debe: 
- Crear tareas
- Listar tareas creadas
- Marcar tareas como completadas
- Filtrar tareas por estado (completadas o pendientes)
- Asignas personas a tareas, con nombre completos, edades y habilidades
- Añadir y Eliminar personas de las tareas (usando botones de agregar y eliminar)
- Añadir y eliminar habilidades para cada persona utilizando botones de agregar y eliminar
- Implementar un formulario reactivo con validaciones, incluyendo la validacion de arreglos y arreglos anindados (?)


Personas
Nombre Completo (> 5 caracteres)
Edad ( > 18)
Habilidad

Array de personas ({}) con un array anidado de sus habilidades

Mobile First
Standalone (al menos un componente)
Servicio de Angular para gestinar estado de tareas, personas y habilidades
las tareas deben ser guardadas en un arreglo de objetos
opcional: usar NGRX para gestionar estado de tareas, personas y habilidades

Opcional. Usar Backend y consumir una api rest