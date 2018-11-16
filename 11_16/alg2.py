sum = 0
i = 0
fibSeq = [0,1]
while fibSeq[-1] <= 4000000:
    i += 1
    fibSeq.append(fibSeq[i] + fibSeq[i-1])
del fibSeq[-1]
for entry in fibSeq:
    if (entry % 2 == 0):
        sum += entry
print (sum)