# Zadanie 1

def Hello(name):
    print("Hello {}" .format(name))

Hello("Maciek")

print('*********************************************')

# Zadanie 2

def Suma(a, b):
    return a + b

print(Suma(3, 5))

#Zadanie 3

print('*********************************************')

#Zadanie 4

def Iloczyn(a, b):
    return a * b

print(Iloczyn(4, 5))

print('*********************************************')

#Zadanie 5

def Iloraz (a, b):
    return a / b

print(Iloraz(10, 2))

print('*********************************************')

# Zadanie 6

def obliczTo(a, b, c):
    return 2*(a+b) / (a + b +c )

print(obliczTo(6, 2, 4))

print('*********************************************')

# Zadanie 7

def findMax(list):
    max = list[0]
    for liczba in list:
        if liczba > max:
            max = liczba
    return max

print(findMax([1, 2, 3, 4]))

print('*********************************************')

# Zadanie 8

def addMatrix(list1, list2):
    list3 = []
    index = 0
    for liczba in list1:
        list3.append(list1[index] + list2[index])
    return list3

print(addMatrix([1, 2, 3], [3, 2, 1]))

print('*********************************************')

# Zadanie 9

def zrobZupe(zupa = 'żadną'):
    return zupa

def zrobDanie(danie = 'nic'):
    return danie

def zrobDeser(deser = 'nic'):
    return deser

def zrobObiad(zupa, danie, deser):

    return "Najpierw zjesz zupkę {}, na drugie danie będzie {} a jak wszystko zjesz to na deser dostaniesz {}" .format(zupa, danie, deser)

a = zrobZupe('rosół')
b = zrobDanie("schabowy")
c = zrobDeser("tiramisu")


print(zrobObiad(a, b, c))

print('*********************************************')

# Zadanie 10
# Zrobione z dużą pomocą internetów

def Kibel(**name):
    print("Cześć {} {}, toaleta dla {} jest na 3 piętrze." .format(name["fname"], name["lname"], name["gender"]))

Kibel (fname ="John",
       lname= "Kennedy",
       gender ="reptillian")


#To zrobiłem sam
def Kibel2(fname, lname, gender):
    print("Cześć {} {}, toaleta dla {} jest na 3 piętrze." .format(fname, lname, gender))

Kibel2(fname='Maciej', lname='Tokarz', gender='Volvo')


