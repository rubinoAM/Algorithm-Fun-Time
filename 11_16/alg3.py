#What is the largest prime factor of 600851475143?

#1. Determine factors of 600851475143
#2. Determine which factors are prime
#3. Determine which prime factor is largest

# A function that will find if a number's prime or not.
known_primes = [2,3]
def is_prime(n):
    total_known_primes = len(known_primes)
    for i in range(0,total_known_primes):
        if(n % known_primes[i] == 0):
            #This is divisible by a prime number, meaning it can't be prime.
            return False
    known_primes.append(n)
    return True

print(is_prime(47))