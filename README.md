 ## Playwright Challenge!



### Dependencias:
    * Node.js (version 16 or higher)

    * npm (comes with Node.js)

    * Git

    * A code editor, preferably Visual Studio Code


### Configurando ambiente:

#### NPM
     npm init

#### Typescript
      npm install typescript --save-dev
      npm  install ts-node --save-dev

#### Playwright
      npm install playwright --save-dev

#### Cucumber
     npm install @cucumber/cucumber --save-dev


#### Reporte en Cucumber:
     npm install cucumber-html-reporter --save-dev

#### Gestión de varibles de ambiente:
     npm i dotenv --save-dev


#### Generando archivo de configuración typescript:
      npx tsc --init  (creates a ts-config. file)


#### Ejecución básica de features:
     npx cucumber-js


#### Ejecución por tags: 
     npx cucumber-js --tags "@tagName"


#### Patrón de Diseño: 
El patrón que se ha utilizado para este proyecto es Page Object Model (POM), debido a su mayor sencilles y adaptación a proyectos pequeños

#### Estructura del proyecto:

          +node_modules
          -orangehrm
          +helpers
          -tests
               -data
                    +employees
                    +session
               -features
                    +login
                    +employees
               -pages
                    +employees
                    LoginPage.ts
                    Page.ts
               -resources
                    +files
                    +imgs
                    +videos
               -steps
                    -AddEmployeeSteps.E2E.ts
                    -AddEmployeeSteps.ts
                    -LoginSteps.ts
               +playwright-report
               -reports
                    cucumber-report.html
               +test-results
               .gitignore
               cucumber.report-html
               cucumber.json
               generate-report.js
               package.json
               package-lock.json
               playwright.config.ts
               README.md
               tsconfig.json




#### Especificaciones de las pruebas:

#### Modulos:


##### Login 
###### Técnica de diseño de pruebas: 
       Para este módulo se utilizo la técnica de diseño "Tabla de decisión" teniendo como entradas las credenciales del usuario, teniendo como output las combinaciones de V-F, donde la regla para que se realice login exitoso es la combinación (usuario: V, password: V), obteniendo el resto de combinaciones con resultado fallido (Mensaje de error en la correspondiente caja de texto "input element").

          | Condición | Contraseña tiene mayúsculas | Contraseña tiene 8 caracteres| Resultado esperado |
          | 1         | Si                          | Si                           | Válido             | 
          | 2         | No                          | Si                           | No válido          |  
          | 3         | Si                          | No                           | No válido          |   
          | 4         | No                          | No                           | No válido          |   
       


##### Empleados 
###### Técnica de diseño de pruebas: 
       Para este módulo se tuvieron en cuenta varias técnicas de diseño de casos de prueba, como los siguientes:

       1. Pruebas exploratorias: se tuvo como primera instancia este tipo de técnica ya que permitió poder conocer más sobre los componentes y la funcionalidad, tanto mediante validaciones de campos (longitud de valores, formatos, entre otros).

       2. Análisis de Valor Limite: Esto debido a que se observó validaciones de en la longitud de varios campos como username, password y confirmar password
          * Valor mínimo (7 caracteres): Ingresar una contraseña de 7 caracteres.
          * Valor máximo (64 caracteres): Ingresar una contraseña de 64 caracteres.
          * Exceder el límite superior (65 caracteres): Ingresar una contraseña de 65 caracteres.
          *Exceder el límite inferior (6 caracteres): Ingresar una contraseña de 6 caracteres



       3. Tabla de decisión: esto debido a lo ya mencionado sobre las validaciones y formatos existentes dentro del sistema, como por ejemplo las reglas de validación de contraseñas que incluyen varias condiciones.

          p.e.:  
          | Condición | Contraseña tiene mayúsculas | Contraseña tiene 8 caracteres| Contraseña tiene número | Resultado esperado |
          | 1         | Si                          | Si                           | Si                      | Válido             | 
          | 2         | No                          | Si                           | Si                      | No válido          |  
          | 3         | Si                          | No                           | Si                      | No válido          |   
          | 4         | Si                          | Si                           | No                      | No válido          |   
          |.          | .                           |  .                           |   .                     |           .        |
          |.          | .                           |  .                           |   .                     |           .        |
          |.          | .                           |  .                           |   .                     |           .        |
          | 8         | No                          | No                           | No                      | No válido          |  




### Especificaciones para descargar el proyecto y ejecutarlo:

###### Clonar el repositorio: 
          git clone <URL_DEL_REPOSITORIO>

###### Acceder a la ruta del repositorio descargado: 
          cd nombre-del-repositorio



###### Instalar dependencias: 
          * Descarga e instala Node.js desde Node.js Official Website.
          * Validar versiones descargadas (node.js y npm).
          * ejecutar -> npm install


###### Configurar TypeScript (De ser requerido): 
     * Asegúrate de que el archivo tsconfig.json esté configurado correctamente. Este archivo define cómo TypeScript compila el código.
     * Verifica la configuración básica en el archivo tsconfig.json (ya debería estar en el repositorio).
     * Si necesitas compilar manualmente los archivos TypeScript, utiliza: npx tsc


###### Ejecuciones: 
          Tener en cuenta que la rama actualizada es Feature/RetoPlaywright_JeanColonia


###### Para ejecutar todas las pruebas, usa el comando:
          npm run test


###### En caso desee ejecutar el e2e tiene varias opciones como tags:
          npx cucumber-js --tags '@employee_e2e'

###### Ejecutar el siguiente comando para visualizar el reporte en Cucumber
          npm run test:report



###### Some execution results:

###### Login feature
######     Credentials
[![login-1.png](https://i.postimg.cc/Y28mhnbr/login-1.png)](https://postimg.cc/z3bfQks6)

######     Relocate to Dashboard page
[![login-success.png](https://i.postimg.cc/QdKBYXsC/login-success.png)](https://postimg.cc/yDBYkCDC)


###### Employee feature
##### Login
[![1.png](https://i.postimg.cc/DyTn3nqm/1.png)](https://postimg.cc/Z0V1rksh)


##### Dashboard
[![2.png](https://i.postimg.cc/sgnrWWbZ/2.png)](https://postimg.cc/sMZqdMjV)


##### Creating Employee
[![3.png](https://i.postimg.cc/nhVxM2SJ/3.png)](https://postimg.cc/svLqNYR6)



###### Employees E2E feature

##### Login
[![1.png](https://i.postimg.cc/DyTn3nqm/1.png)](https://postimg.cc/Z0V1rksh)


##### Dashboard
[![2.png](https://i.postimg.cc/sgnrWWbZ/2.png)](https://postimg.cc/sMZqdMjV)


##### Creating Employee
[![3.png](https://i.postimg.cc/nhVxM2SJ/3.png)](https://postimg.cc/svLqNYR6)


##### Searching previously created Employee (Employee List Page)
[![4.png](https://i.postimg.cc/3wdHFRHf/4.png)](https://postimg.cc/3y56K3N2)




