class Barman:
    def __init__(self, name):
        self.name = name;

    def zrobKoktajl(self, *skladniki):
        print(self.name + ': robie koktajl z: ' + str(skladniki))
    def podajRachunek(self, kwota):
        print(self.name + ': rachunek wynosi ' + kwota)

    def wezPieniadze(self, kwota):
        print(self.name + ': zaplacono ' + kwota)