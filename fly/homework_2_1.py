# Zadanie 1

class Owoc:

    def __init__(self, smak):
        self.smak = smak
        pass

    def Smak(self):
        return self.smak

class Cytryna(Owoc):
    def __init__(self):
        Owoc.__init__(self, 'kwaśny')

class Mango(Owoc):
    def __init__(self):
        Owoc.__init__(self, 'słodki')


smakCyt = Cytryna()
print(smakCyt.Smak())
smakMan = Mango()
print(smakMan.Smak())

print('*************************************************')

# Zadanie 2

class Auto:

    def __init__(self, silnik, waga, VIN):
        self.silnik = silnik
        self.waga = waga
        self.vin = VIN

    wlaczone = False

    def WlaczAuto(self):
        self.wlaczone = True

    def Jedz(self, predkosc):
        if self.wlaczone == True:
            return predkosc
        else:
            print('Włącz auto debilu')

    def Stop(self):
        if self.wlaczone == True:
            self.wlaczone = False
        else:
            print('Włącz auto debilu')

    def ZatrabKlaksonem(self):
        pass

    def WstawSilnik(self, silnik):
        return silnik

class Silnik:

    wlaczony = False

    def __init__(self, pojemnosc, iloscKoni, predkosc):
        self.pojemnosc = pojemnosc
        self.iloscKoni = iloscKoni
        self.predkosc = predkosc

    def Start(self):
        self.wlaczony = True
        return self.predkosc

    def UstawBieg(self):
        pass

    def DodajGazu(self, limit):
        self.predkosc = limit
        return limit

    def Zahamuj(self):
        self.wlaczony = False
        self.predkosc = 0

class Mazda(Silnik):
    def __init__(self):
        Silnik.__init__(self, 2400, 20, 90)

    tempomat = False
    tempomatSpeed = 0

    def WlaczTempomat(self, predkosc):
        self.tempomat = True
        predkosc = self.DodajGazu(predkosc)
        self.tempomatSpeed = predkosc
        return self.tempomatSpeed


    def Start(self):
        self.wlaczony = True
        if self.tempomat == False:
            return self.predkosc
        else:
            self.predkosc = self.tempomatSpeed
            return self.predkosc


