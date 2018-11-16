# THE FIRST TWO CONSTANTS IN THE FIBONACCI SEQUENCE
fib1 = 1
fib2 = 1
sumTotal = 0
userAnswer = int(input("What's your maximum: "))
for num in range(1,userAnswer):
    if(fib1 % 2 == 0):
        sumTotal += fib1
    temp = fib1 + fib2 #Temporary storage for new value
    fib1 = fib2
    fib2 = temp
print (sumTotal)