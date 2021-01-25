def func(**params):
   print(params['a'])
   print(params['b'])
   print(params['c'])

#func(a='Doink', b='Yoink', c='Zoink')




plik = open('./kurswalut.txt')

def Kwota():
    x = input("Ile zł chcesz przeliczyć?")
    return x

def Waluta():
    y = input("Na jaką walutę chcesz przeliczyć kwotę? (euro lub dolar)")
    return y

def Kurs():
    fail = True
    while fail == True:
        z = input("Czy chcesz poznać kurs walut? (tak/nie)")
        if str(z) == 'tak':
            print(plik.read())
            fail = False

        elif str(z) == 'nie':
            fail = False

        else:
            print('Error. Try Again.')


def Kantor ():

    Kurs()

    x = 0
    while x == 0 or x != int:
        try:
            x = int(Kwota())
        except:
            print('Error! Try Again')
        if x > 0:
            break

    failure = True
    while failure == True:
        y = str(Waluta())
        if y == 'euro':
            failure == False
            return int(x) * 4
        elif y == 'dolar':
            failure == False
            return int(x) * 3
        else:
            print('Error. Try Again')

print(Kantor())
plik.close()