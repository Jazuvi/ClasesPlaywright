Feature: Text Input
    Yo como usuario de la pagina Sample App
    Quiero iniciar sesion
    Para poder acceder a la aplicacion
    # I / Want / So Tha I can

    Scenario: Agregar texto al input cambia el boton
        Given el usuario esta en la pagina de text input
        When el usuario ingresa su nombre
        Then se espera ver el boton cambie al nombre ingresado