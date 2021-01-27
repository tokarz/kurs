from Bar import Bar
from Barman import Barman

def zatrudnijBarmanow():
    barmanMaciek = Barman("Maciek")
    barmanMarcin = Barman("Marcin")
    barmanFly = Barman("Fly")
    bar.zatrudnijBarmana(barmanMaciek)
    bar.zatrudnijBarmana(barmanMarcin)
    bar.zatrudnijBarmana(barmanFly)


bar = Bar()
zatrudnijBarmanow()
for barman in bar.barmani:
    barman.zrobKoktajl('Jablko', 'Vodka', 'Sok')
        
