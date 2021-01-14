# Napisz Program, ktory 100 razy wypisze "Hello World"
def hello_world():
    print("hello world")


for count in range(100):
    hello_world()
# or
print("+" * 100)
print("Hello World " * 100)
print("Hello World\n" * 100)

# Napisz Program, ktory wyswietli wszystkie elementy tablicy (dowolnie zdefiniowanej)
new_list = ['polak', 'lubi', 'pic', 'alkohol', 40, '%']

print(new_list)
# or
for element in new_list:
    print(element)

# Napisz program, ktory wyliczy sume wszystkich elementow tablicy [99,98,97,96]
new_list1 = [99, 98, 97, 96]

sum_elem_list1 = new_list1[0] + new_list1[1] + new_list1[2] + new_list1[3]
print(str(sum_elem_list1))
# or
print(sum(new_list1))

# Napisz program, ktory zsumuje 2 tablice i zwroci tablice sum na kazdej pozycji [1,2,3], [3,2,1] powinno zwrocic [4,4,4]
l1 = [1, 2, 3]
l2 = [3, 2, 1]

l3 = [
    l1[0] + l2[0],
    l1[1] + l2[1],
    l1[2] + l2[2]
]
print(l3)
# or
sum_l1_l2 = [x + y for x, y in zip(l1, l2)]
print(sum_l1_l2)

# Napisz program, ktory wyswietli tylko parzyste liczby z tablicy od 1 do 100 (parzyste elementy sprawdza sie if(x%2 == 0)
for elem in range(1, 101):
    if elem % 2 == 0:
        print(elem)
    else:
        continue

# Napisz Program, ktory wyswietli elementy tablicy [1,2,3,4,5] od przodu i od tylu
new_list2 = [1, 2, 3, 4, 5]
print(new_list2)

new_list2.reverse()
print(new_list2)

# Napisz Program, ktory znajdzie najwieksza liczbe w tablicy liczb - [1,2,4,11,8,9] -> ma zwrocic 11

new_list3 = [1, 2, 4, 11, 8, 9]
print("Max value of list is: " + str(max(new_list3)))

# Napisz Program, ktory posortuje tablice : [1,5,6,7,2,4] ma zwrocic [1,2,4,5,6,7]
new_list4 = [1, 5, 6, 7, 2, 4]
new_list4.sort()
print("Sorted list: " + str(new_list4))
