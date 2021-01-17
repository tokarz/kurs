#wyświetl 100x
for i in range(1,101):
    print(i,'Hello World')
    
print('######################################################################')
#wyświetl elementy
tab1 = [1,2,3,4,5,6,7,8,9]

for i in tab1:
    print(i)

print('######################################################################')

#suma 
tab2= [99,98,97,96]
print(sum(tab2))
#lub
tab_2=[99,98,97,96]
suma=0
for liczba in tab_2:
    suma=suma+liczba
print(suma)


print('######################################################################')
#suma pionowo w osobnej tablicy
tabA = [1,2,3]
tabB = [2,3,4]

index=0
tabC=[]

for i in tabA:
    tabC.append(tabA[index]+tabB[index])
    index=index+1
    
print(tabC)


print('######################################################################')
#wyswietl liczby parzyste
for i in range(1,101):
    if i %2 == 0:
        print(i,'is even' )


print('######################################################################') 
#wyświetl i w odwrotnej kolejności
tab = [1,2,3,4]

index =0
for i in tab:
    print(tab[index])
    index=index+1
index =3   
for i in tab:
    print(tab[index])
    index=index-1

print('######################################################################') 
#największy element
List_01 = [1,2,4,11,8,9]
print(max(List_01))
#lub
List_01 = [1,2,4,11,8,9]

maks=0
for liczba in List_01:
    if maks < liczba: 
        maks=liczba  
print(maks)        

print('######################################################################')
#sortowanie
List_02 = [1,5,6,7,2,4]
print(sorted(List_02))