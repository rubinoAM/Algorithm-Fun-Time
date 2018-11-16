#What is the largest prime factor of 600851475143?

#1. Determine factors of 600851475143
#2. Determine which factors are prime
#3. Determine which prime factor is largest

number = 600851475143
factors = []
primes = []

def findLargestPrime(num):
    for no in range(1,num+1):
        if num % no == 0:
            factors.append(no)
        print (no)

findLargestPrime(number)