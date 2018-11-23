""" Prompt:
	The user should input a number and be given
	an amount of change that is made up with the
	smallest number of coins possible."""
	
coin_types = [25,10,5,1]
change = []
change_literals = {
	"Quarters":0,
	"Dimes":0,
	"Nickels":0,
	"Pennies":0
}

def make_change(cents):
	count = 0
	for coin in coin_types:
		while cents >= coin:
			count += 1
			change.append(coin)
			cents -= coin
	return (count)
	
def change_to_strings(change):
	quarter_count = 0
	dime_count = 0
	nickel_count = 0
	penny_count = 0
	
	quarter_amount = ""
	dime_amount = ""
	nickel_amount = ""
	penny_amount = ""

	for coin in change:
		if (coin == 25):
			change_literals['Quarters'] += 1
			quarter_count += 1
		elif (coin == 10):
			change_literals['Dimes'] += 1
			dime_count += 1
		elif (coin == 5):
			change_literals['Nickels'] += 1
			nickel_count += 1
		elif (coin == 1):
			change_literals['Pennies'] += 1
			penny_count += 1
	
	if (quarter_count > 0):
		if (quarter_count > 1):
			quarter_amount = str(change_literals['Quarters']) + " Quarters"
		elif (quarter_count == 1):
			quarter_amount = "1 Quarter\n"
	if (dime_count > 0):
		if (dime_count > 1):
			dime_amount = str(change_literals['Dimes']) + " Dimes"
		elif (dime_count == 1):
			dime_amount = "1 Dime\n"
	if (nickel_count > 0):
		if (nickel_count > 1):
			nickel__amount = str(change_literals['Nickels']) + " Nickels"
		elif (dime_count == 1):
			nickel__amount = "1 Nickel\n"
	if (penny_count > 0):
		if (penny_count > 1):
			penny_amount = str(change_literals['Pennies']) + " Pennies"
		elif (penny_count == 1):
			penny_amount = "1 Penny\n"
			
	return "Here are the totals for each type of coin:\n" + str(quarter_amount) + str(dime_amount) + str(nickel_amount) + str(penny_amount) + "Thank you."

user_input = int(input("Please insert an amount of change in cents: "))
change_made = make_change(user_input)	
print (str(change_made) + " different coins is the smallest possible amount.")
print (change_to_strings(change))