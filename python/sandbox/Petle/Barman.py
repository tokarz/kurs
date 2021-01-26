lista1 = [1, 3, 5]
lista2 = [2, 4, 6]

suma = 0

for liczba in lista1:
    suma = suma + liczba

for liczba in lista2:
    suma = suma + liczba

print(suma)

print('*********************************')

index = 0
for liczba in lista1:
    print(lista1[index])
    index = index + 1

lista3 = [1, 2, 3]
lista4 = [3, 2, 1, 6]

# 4, 4, 4, 6

length = len(lista3)
result = []
index1 = 0

# for numer in lista4:
#    if length < index1 - 1:
#        result.append(lista4[index1])
#    else:
#        result.append(lista3[index1] + lista4[index1])
#        index1 = index1 + 1
# print(result)
print('***********************************')
index1 = 0

for licz in lista4:
    if index1 >= len(lista3):
        print(lista4[index1] + 0)
    else:
        print(lista4[index1] + lista3[index1])
    index1 += 1
