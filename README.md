# Ejecución del parcial:

Al ejecutar el proyecto, lo primero que se verá será la pantalla de LogIn. Para ingresar debes escribir un correo valido, es decir con el formato algo@correo.algo, y la contraseña es de mínimo 8 caracteres. Si esto no se cumple, saldrá una alerta mencionando que no se pudo ingresar, al aceptar, saldrán los errores correspondientes. Si ingresas un formato valido, saldrá una alerta mencionando un ingreso exitoso. Al aceptar te llevará a la pestaña de Home. Podrá ver 10 sesiones de cada deporte, especificando los datos. Le podrá dar click para ampliar la sesión. Para cerrar el detalle, puedes dar click en cualquier otro lugar. En la parte inferior esta la información del usuario.

# Componentes:

El proyecto cuenta con 3 componentes: LogIn, Home y Header.

## LogIn

- Para el LogIn, la ruta es la principal, es decir la vacía, y para poder dirigirse a home, es mediante el botón de ingresar. Este componente fue creado mediante una card de boostrap. Las verificaciones se hicieron de la siguiente forma: Los datos de ingreso se guardan en una variable de estado, para poder actualizarlo cuando el usuario ingresa un valor, para así poder verificarlo. Esto mediante la función de handleChange.
- Ahora, con handleSubmit, verificaremos el formato de los inputs. Esta verifica y si hay errores y da el acceso mediante otra función, que se pasa mediante props desde App, si el acceso es correcto o no lo alerta, además llama a la función que verifica si hay errores, esta los guarda en otra variable de estado de errores, para que se puedan visualizar una vez se intente ingresar.
- La imagen de fondo se modifica con el css, al igual que la card.
- Una vez se le da al botón de ingreso, este usara la función handleSubmit, que después de enviar la alerta, usa la función enviada como prop. Esta función si se llama cambiara el valor de la variable de estado de la aplicación principal (de si está o no autenticado), y nos dirige a /home. La variable de autenticación está en App, ya que la necesitamos posteriormente en otro componente (Home).

## App

- En App, se encuentra la función de handleLogin, que es la que es pasada como prop a LogIn, que define si el usuario esta autenticado correctamente. Una vez desde LogIn se nos redirigen a /home, se envían 3 props, el valor de la varibale de estado de autenticación y las dos funciones que hacen fetch a las API’s.

## Home

- En el componente “Home” se verifica que el usuario este autenticado correctamente. Si sí, se llaman las funciones para que se haga fetch y los resultados se guardarán en los valores de dos variables de estado, carrera y selectedProfile. Usamos el Hook de useEffect ya que queremos que esto suceda solo una vez, fuera del proceso de renderizado normal, no queremos que el componente realice estas acciones cada vez que se renderiza, sino solo cuando ciertas condiciones se cumplen (como que el usuario esté autenticado), y solo sucede si alguna de las 3 variables especificadas en la función cambian.
- Posteriormente, se crean 3 arrays de cada tipo de carrera y se guardan solo 10 elementos, que serán los que se visualizaran.
- La función handleImageClick, maneja el modal que se mostrará cuando se le hace click a una tarjeta, aquí guardaremos la imagen correspondiente al tipo y la información que queremos presentar.
- Para mostrar las tarjetas, se creó una función “renderCards”, para facilitar y evitar repetir código para cada uno de los tres deportes. Este recibe el título, las carreras y la imagen correspondiente al deporte y devuelve una columna que presenta, primero el título del deporte. Luego se crea una fila donde estarán las tarjetas. Esto se hizo “mapeando” las carreras pasadas por parámetro; por cada tarjeta se crea una fila que se comporta de manera responsiva, ocupando todo el ancho en pantallas pequeñas y la mitad en pantallas medianas, con un margen inferior y un diseño flexible. Adentro de la fila están la tarjeta, con su imagen correspondiente al deporte y la información requerida, además de tener la función para mostrar el modal.
- Finalmente llamamos la función para los tres deportes con su respectiva imagen, se configura el modal y agregamos la información del usuario, que se maneja en otro componente, que recibe como prop el primer usuario de los usuarios que recibimos de la API.

## Header

- “Header” es el último componente de la aplicación. Este recibe un prop, que se mencionó anteriormente, que es el objeto con la información del usuario. Este simplemente presenta la información requerida del usuario.
