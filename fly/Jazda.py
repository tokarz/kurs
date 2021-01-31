from homework_2_1 import Auto
from homework_2_1 import Silnik
from homework_2_1 import Mazda

autko = Auto('diesel', 20, '345345345')
print(autko.vin)
silniczek = Silnik(2400, 20, 90)
autko.WstawSilnik('fajny')
autko.WlaczAuto()
assert autko.wlaczone == True
print(autko.Jedz(70))
autko.Stop()
assert autko.wlaczone == False

print('********************************')

mazda = Mazda()
print(mazda.Start())
mazda.WlaczTempomat(100)
assert mazda.predkosc == 100
mazda.Zahamuj()
assert mazda.predkosc == 0
print(mazda.Start())
print(mazda.predkosc)
#assert mazda.predkosc == mazda.tempomatSpeed

