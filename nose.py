a = 5
b = "7"

def suma(a,b):
    return a+b

def resta(a,b):
    return a-b

def multiplicación(a,b):
    return a*b

def división(a,b):
    return a/b

funciones = [suma, resta, multiplicación, división]
variables = [a,a,b,b]
for i in range(len(variables)-1):
    var1 = variables[i]
    var2 = variables[i+1]
    for funcion in funciones:
        try:
            print(f"El resultado de la {funcion.__name__} de {var1}({type(var1)}) y {var2}({type(var2)}) es {funcion(var1,var2)}({type(funcion(var1,var2))})")
        except:
          print(f"No es posible hacer la {funcion.__name__} de {type(var1)} y {type(var2)}")