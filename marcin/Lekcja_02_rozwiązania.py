
def suma_2_arg(l1,l2):
    #liczy sumę dwóch arg.
    suma=l1+l2
    return suma

print('*************************************************')

def ilocz_2_arg(l1,l2):
    #liczy iloczyn dwóch arg.
    iloczyn=l1*l2
    return iloczyn

print('*************************************************')

def iloraz_2_arg(l1,l2):
    #liczy iloraz dwóch arg.
    iloraz=l1/l2
    return iloraz

print('*************************************************')

def obliczTo(a,b,c):
    #liczy 2*(a+b) / (a+b+c)
    suma_a_b=suma_2_arg(a,b)
    mnoż=ilocz_2_arg(2,suma_a_b)
    
    suma_a_b=suma_2_arg(a,b)
    suma_a_b_c=suma_2_arg(suma_a_b, c)
    
    wynik= iloraz_2_arg(mnoż, suma_a_b_c)
    return wynik

print(obliczTo(12, 13, 19))

print('*************************************************')

def find_maks(lista):
    # znajduje maksymalną wartość na liście
    maks=0
    for i in lista:
        if i > maks:
            maks = i
    return maks

lista_1 = [1,4,5,6,989]
print(find_maks(lista_1))

print('*************************************************')

def suma_arg_tablic(tab1,tab2):
    #sumuje  elementy tablicy addMatrix
    tab_sum=[]
    index=0
    for i in range(len(tab1)):
        tab_sum.append(tab1[index]+tab2[index])
        index=index+1
    return tab_sum

a=[2,4,5]
b=[5,1,8]
print(suma_arg_tablic(a, b))

#lub

def suma_arg_tablic1(tab1,tab2):
    #sumuje  elementy tablicy addMatrix
    tab_sum=[]
    index=0
    for i in range(len(tab1)):
        tab_sum.append(suma_2_arg(tab1[index],tab2[index]))
        index=index+1
    return tab_sum

a=[2,4,5]
b=[5,1,8]
print(suma_arg_tablic1(a, b))
    
print('*************************************************')

def slownik(**kwargs):
    return print('Witaj: {0:s} {1:s}, toaleta dla: {2:s} jest na 2 piętrze'.format(kwargs['imie'], kwargs['nazwisko'], kwargs['gender']))

slownik(imie="Jan", nazwisko='Kowalski', gender='reptilian')


print('*************************************************')
def zrob_zupe():
    #robi zupę
    return print('krupnik')

def zrob2danie():
    #robi 2 danie
    return print('pierogi')

def zrob_deser():
    #robi deser
    return print('sernik')

def zrobObiad():
    return zrob_zupe(),zrob2danie(),zrob_deser()

while True:
    print('''Menu: 1: zupa, 2: drugie, 3: deser
    By dokonać wyboru wpisz 1,2 lub 3
    --------> by zatrzymać wciśnij: 0''')
    wybor = input('''Co byś zjadł?''')

    if wybor == '1':
        print('dzisiejsza zupa to:'), zrob_zupe()
        input('press enter')
        continue
    if wybor == '2':
        print('dzisiejsze drugie to:'), zrob2danie()
        input('press enter')
        continue
    if wybor == '3':
        print('dzisiejszy deser to:'), zrob_deser()
        input('press enter')
        continue
    if wybor == '1,2':
        print('dzisiejsza zupa to:'), zrob_zupe()
        print('dzisiejsze drugie to:'), zrob2danie()
        input('press enter')
        continue
    if wybor == '2,3':
        print('dzisiejsze drugie to:'), zrob2danie()
        print('dzisiejszy deser to:'), zrob_deser()
        input('press enter')
        continue
    if wybor == '1,3':
        print('dzisiejsza zupa to:'), zrob_zupe()
        print('dzisiejszy deser to:'), zrob_deser()
        input('press enter')
        continue
    if wybor == '1,2,3':
        print('dzisiejszy obiad to:'),zrobObiad()
        input('press enter')
        continue
    if wybor == '0':
        break





