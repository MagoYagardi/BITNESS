Cliente
La aplicación deberá permitir realizar las siguientes funcionalidades:
1. Registro en la aplicación: se ingresará usuario (email), contraseña, altura del usuario y el
entrenador asignado. Se devolverá el éxito o el error en caso que corresponda. En caso de
éxito se devolverá la información del usuario.
2. Login en la aplicación (email y contraseña). En caso de éxito se devolverá la información
del usuario.
3. Dashboard de Entrenamiento:
3.1. Agregar entrenamiento: Se creará un campo de texto para los minutos, se
deberá seleccionar un entrenamiento de los disponibles en la Base de Datos, se
agregará el peso actual del usuario y se dará el alta el entrenamiento. Con cada
ingreso se debe actualizar automáticamente toda la información presente.
3.2. Lista de entrenamientos: Se listarán todos los entrenamientos hechos por el
usuario, detallando tipo de entrenamiento, minutos y calorías quemadas (información
disponible en la base de datos, al obtener entrenamientos). Cada entrenamiento
debe tener un botón para poder eliminar ese entrenamiento.
3.3. Cantidad de entrenamientos: En un componente aparte se listará la cantidad de
entrenamientos que ha hecho el usuario hasta el momento.
3.4. Minutos por tipo de entrenamiento: Listar en una tabla todos los tipos de
entrenamiento en los que el usuario haya hecho registros y el total de minutos
acumulado de ese tipo de entrenamiento.
3.5. Estado de salud: Se deberá mostrar un mensaje que indique al usuario su
estado de salud actual, dependiendo del último ingreso que haya hecho de peso y
su IMC actual (Se valora el uso de gráfica).
3.6. Variación de peso: Se mostrará en un componente la variación de peso entre los
últimos dos registros de entrenamientos.
4. Suscripción a clases:
Se debe listar las clases disponibles y los cupos de las mismas, sus horarios y
entrenadores a cargo. Al concretar una suscripción se debe permitir el pago de la misma y
mostrar la factura correspondiente al realizar el pago.
5. Venta de productos:
Seleccionar productos, agregarlos al carrito y permitir el pago, al pagar se debe
mostrar o enviar la factura.
Administrador
ABML Usuarios, Productos, Entrenadores, Clases, Sucursales, Clientes y Factura de
venta o suscripción.
