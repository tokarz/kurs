from Owoce import GetFruits;
import Alkohole;

owoce = GetFruits();
alkohole = Alkohole.Get();

for owoc in owoce:
    for alkohol in alkohole:
        print('Mieszamy ' + str(alkohol) + ' z ' + str(owoc));


