
class AmericanDate():
	def __init__(self,year,month,day):
		self.year=year
		self.month=month
		self.day=day

	def set_year(self):
		input(self.year)
	def set_month(self):
		input(self.month)
	def set_day(self):
		input(self.day)

	def get_year(self):
		return self.year
	def get_month(self):
		return self.month
	def get_day(self):
		return self.day
	def format(self):
		if self.day<10 :
			print("Date is: ",self.month,'.0',self.day,'.',self.year)
		if self.month<10:
			print("Date is: ",'0',self.month,'.',self.day,'.',self.year)
		else:
			print("Date is: ",self.month,'.',self.day,'.',self.year)

class EuropeanDate(AmericanDate):
	def format(self):
		if self.day<10:
			print("Date is: ",'0',self.day,'.',self.month,'.',self.year)
		if self.month<10:
			print("Date is: ",self.day,'.0',self.month,'.',self.year)
		else:
			print("Date is: ",self.day,'.',self.month,'.',self.year)

Am_Date=AmericanDate(2000,4,10)
Am_Date.format()
Eu_Date=EuropeanDate(2000,4,10)
Eu_Date.format()





