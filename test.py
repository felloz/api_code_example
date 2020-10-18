
run = True
while run:
    try:
        num = int(input("num: "))
        print(4 / num)
        dec = input("div otro num? y / n: ")
        if dec == "n":
            print("Good bye")
            run = False
    except:
        print("Solo numeros son permitidos")
    finally:
        print("Ha ocurrido un error desconocido")
