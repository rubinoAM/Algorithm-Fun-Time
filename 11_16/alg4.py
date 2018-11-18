# What is the 10,001st Prime Number?
listPrime = []

def isItPrime(num):
	for i in range(2, num):
		if num % i == 0:
			return False
	return True

for i in range(2,120000):
	while len(listPrime) < 10001:
		if isItPrime(i):
			listPrime.append(i)
			break
		else:
			break
			
print (listPrime[-1]) # Prints 104743
