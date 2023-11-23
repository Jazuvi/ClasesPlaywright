Feature: Sample App Login
    Yo como usuario de la pagina Sample App
    Quiero iniciar sesion
    Para poder acceder a la aplicacion
    # I / Want / So Tha I can

    Scenario: Login exitoso con contraseña
        Given el usuario esta en la pagina de inicio de sesion
        When el usuario ingresa su nombre de usuario y contraseña valida
        Then se espera ver un mensaje de exito en color verde