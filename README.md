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



