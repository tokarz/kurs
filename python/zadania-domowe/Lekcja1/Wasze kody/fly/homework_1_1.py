# Zadanie 1

print('Hello World \n' * 100)

print('*********************************************')

# Zadanie 2

milionerzy = ['Maciek', 'Marcin', 'Fly']
print(milionerzy)

print('*********************************************')

# Zadanie 3

liczby = [99, 98, 97, 96]

suma = 0

for liczba in liczby:
    suma = suma + liczba

print(suma)

print('*********************************************')

# Zadanie 4

arr1 = [1, 2, 3]
arr2 = [3, 2, 1]
arr3 = []

index = 0
for liczba in arr1:
    arr3.append(arr1[index] + arr2[index])

print(arr3)

print('*********************************************')

# Zadanie 5

for liczba in range(0, 100):
    if liczba % 2 == 0:
        print(liczba)

print('*********************************************')

# Zadanie 6

arr4 = [1,2,3,4,5]

print(arr4)
print(list(reversed(arr4)))

print('*********************************************')

# Zadanie 7

arr5 = [1,2,4,11,8,9]
print(max(arr5))

print('*********************************************')

# Zadanie 8

arr6 = [1,5,6,7,2,4]
print(sorted(arr6))

#Lub

arr7 = [1,5,6,7,2,4]
arr7.sort()
print(arr7)

#Bonus, odwrotna kolejność

rev_arr = [1,5,6,7,2,4]
rev_arr.sort(reverse=True)
print(rev_arr)




