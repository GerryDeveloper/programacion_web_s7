print("Hola Mundo, que calor hace")
import threading
import time


# Función para contar del 1 al 10
def contar():
    for i in range(1, 11):
        print(f"Contador: {i}")
        time.sleep(0.9)  # Simula un pequeño retraso

# Función para imprimir cadenas de (*)
def imprimir_asteriscos():
    for i in range(1, 11):
        print("*" * i)
        time.sleep(0.5)

# Función para imprimir cadenas de hash (#)
def imprimir_almohadillas():
    for i in range(1, 11):
        print("#" * i)
        time.sleep(0.5)

# Creación de los hilos
hilo1 = threading.Thread(target=contar)
hilo2 = threading.Thread(target=imprimir_asteriscos)
hilo3 = threading.Thread(target=imprimir_almohadillas)

# Iniciar los hilos
hilo1.start()
hilo2.start()
hilo3.start()


# Esperar a que los hilos terminen, sino el mensaje sale antes
hilo1.join()
hilo2.join()
hilo3.join()


print("Todas las tareas han finalizado. :D")