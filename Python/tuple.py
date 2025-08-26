tpl = (1, 2, 2, 3, 4, 2, 5)
count_of_2 = tpl.count(2)               # Returns 3
index_of_3 = tpl.index(3)               # Returns 3
index_of_2_after_2 = tpl.index(2, 2)    # Starts search at index 2, returns 2

# Access and Iteration
print(2 in tpl)                         # True      
print(6 not in tpl)                     # True

print(len(tpl))                         # 7

print(tpl.index(2))                     # 1
print(tpl.index(2,3))                   # 5
print(tpl.index(2,2,-1))                # 2

print(tpl[1])                           # 2
print(tpl[1:-1])                        # (2, 2, 3, 4, 2)
print(tpl[::-1])                        # (5, 2, 4, 3, 2, 2, 1)
print(tpl[::-2])                        # (5, 4, 2, 1)
print(tpl[0:len(tpl):])                 # (1, 2, 2, 3, 4, 2, 5)
print(tpl[0:len(tpl):2])                # (1, 2, 4, 5)

print((1,2)+(2,3))                      # (1, 2, 2, 3)
print((1,2)*3)                          # (1, 2, 1, 2, 1, 2)
print(min(tpl))                         # 1
print(max(tpl))                         # 5

print(sorted(tpl))                      # [1, 2, 2, 2, 3, 4, 5]
for i in reversed(tpl):
    print(i, end="")                    # 5243221
