sum = 0
# Find even numbers
# Between 1 and last number in Fib. seq.
# Less than 4 million
fibSeq = [0,1,1,2,3,5,8,13,21,34,55,89,144,
233, 377, 610, 987, 1597, 2584, 4181, 6765,
10946, 17711, 28657, 46368, 75025, 121393,
196418, 317811,514229,832040,1346269,2178309,3524578]

for no in fibSeq:
    if no % 2 == 0:
        sum += no
print (sum)

# Determine the Fibonacci sequence
# Find the even numbers in the sequence
# Add the even numbers together
sum = 0
fibSeq = [0,1]
for num in range(1,33):
    fibSeq.append(int(fibSeq[num] + fibSeq[num-1]))
for entry in fibSeq:
    if (entry % 2 == 0):
        sum += entry
print (fibSeq)
print (sum)

