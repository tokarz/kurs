class Bar:
    def __init__(self):
        self.barmani = [];
        self.barmaniNaZmianie = [];

    def zatrudnijBarmana(self, barman):
        self.barmani.append(barman)
    
    def zwolnijBarmana(self, barman):
        self.barmani.remove(barman)

        