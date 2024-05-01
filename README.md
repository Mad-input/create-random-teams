# Aplicación para Crear Equipos Aleatoriamente <img src="./shuffle-random-svgrepo-com.svg" width="35">

Esta aplicación proporciona una manera fácil y rápida de crear equipos aleatorios a partir de una lista de ítems. Ya sea para organizar grupos de trabajo, equipos deportivos, o cualquier otro tipo de división en grupos, esta aplicación te permite generar equipos de forma automática y aleatoria.

## Características Principales:

- **Creación de Equipos:** Permite crear equipos aleatorios a partir de una lista de ítems ingresados por el usuario.
- **Visualización Interactiva:** Los equipos generados se muestran de forma visual en la interfaz de usuario, facilitando su identificación y gestión.

- **Personalización de Equipos:** Los usuarios pueden establecer el número deseado de integrantes por equipo, así como visualizar y modificar la composición de los equipos según sea necesario.

- **Almacenamiento Local:** La aplicación utiliza el almacenamiento local del navegador para guardar los equipos generados y la lista de ítems, lo que permite retomar la sesión en cualquier momento sin perder los datos.

## Uso:

1. **Ingresar Ítems:** El usuario ingresa una lista de ítems, ya sea nombres de personas, tareas a asignar, o cualquier otro tipo de elementos que desee dividir en equipos.

2. **Configurar Parámetros:** El usuario puede especificar el número deseado de integrantes por equipo.

3. **Generar Equipos:** Al hacer clic en el botón correspondiente, la aplicación generará automáticamente los equipos de forma aleatoria a partir de la lista de ítems ingresada.

4. **Visualizar y Gestionar Equipos:** Los equipos generados se muestran en la interfaz de usuario, donde el usuario puede visualizar la composición de cada equipo, así como eliminar o modificar equipos según sea necesario.

5. **Guardar y Retomar Sesión:** Los equipos generados y la lista de ítems se guardan automáticamente en el almacenamiento local del navegador, lo que permite retomar la sesión en cualquier momento sin perder los datos.

Con esta aplicación, crear equipos aleatorios nunca ha sido más sencillo. Ya sea para actividades laborales, eventos sociales, o cualquier otro contexto que requiera la formación de equipos, esta aplicación te ofrece una solución práctica y eficiente.

---

# Clase `utilsApp`

La clase `utilsApp` proporciona una serie de métodos utilitarios para la aplicación, que incluyen la creación de elementos HTML, la gestión de equipos, y la manipulación de datos en el almacenamiento local del navegador.

## Métodos Estáticos:

### 1. `createItem(element, title, items)`

Este método se utiliza para crear un nuevo ítem y agregarlo al DOM.

- **Parámetros:**
  - `element` (HTMLElement): El elemento DOM donde se agregará el nuevo ítem.
  - `title` (string): El título del ítem a crear.
  - `items` (Array): Un array que contiene los ítems.

### 2. `ResItem(title)`

Este método estático se utiliza para generar un elemento de lista HTML con un título dado.

- **Parámetros:**
  - `title` (string): El título del ítem.

### 3. `deleteItem(id, items)`

Elimina un ítem específico del array de ítems.

- **Parámetros:**
  - `id` (string): El identificador del ítem a eliminar.
  - `items` (Array): El array que contiene los ítems.

### 4. `createTeams(teams, items, limit)`

Crea equipos a partir de los ítems disponibles.

- **Parámetros:**
  - `teams` (Array): El array que contiene los equipos.
  - `items` (Array): El array que contiene los ítems.
  - `limit` (Number): El límite de ítems por equipo.

### 5. `renderTeamsHTML(teams)`

Renderiza los equipos en el DOM.

- **Parámetros:**
  - `teams` (Array): El array que contiene los equipos.

### 6. `renderItems(items)`

Renderiza los ítems en el DOM.

- **Parámetros:**
  - `items` (Array): El array que contiene los ítems.

### 7. `showAlert(message, type)`

Muestra una alerta en la interfaz de usuario.

- **Parámetros:**
  - `message` (string): El mensaje que se mostrará en la alerta.
  - `type` (string): El tipo de alerta, puede ser "error" o "ok".

### 8. `saveInStorge(item, value)`

Guarda datos en el almacenamiento local del navegador.

- **Parámetros:**
  - `item` (string): La clave bajo la cual se guardará el valor.
  - `value` (any): El valor que se guardará en el almacenamiento local.

## Uso:

Para utilizar la clase `utilsApp`, simplemente importa la clase y llama a los métodos estáticos según sea necesario. Por ejemplo:

```javascript
import { utilsApp } from "./utilsApp.js";

// Crear un nuevo ítem
utilsApp.createItem(element, title, items);

// Eliminar un ítem
utilsApp.deleteItem(id, items);

// Crear equipos
utilsApp.createTeams(teams, items, limit);
```
