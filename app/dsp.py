class BankAccount:
    def __init__(self,balance):
        self.balance=balance

    def deposit(self,amt):
        if amt <=0:
            raise "Amlount must be greater than 0"
        self.balance+=amt
    
    def widthdraw(self,amt):
        if amt >= self.balance:
            raise "Insufficient Funds"
        self.balance-=amt
        print("withdrawn ->",amt)

    def getBalance(self):
        print("Account Balance:",self.balance)
    



user=BankAccount(100)
user.deposit(24)
print(user.balance)
user.widthdraw(20)
print(user.balance)
user.getBalance()