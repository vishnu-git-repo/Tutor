lst = [1, 2, 3]

# Append
lst.append(4)                   # [1, 2, 3, 4]

# Extend
lst.extend([5, 6])              # [1, 2, 3, 4, 5, 6]
lst.extend((7, 8))              # [1, 2, 3, 4, 5, 6, 7, 8]
lst.extend({9, 10})             # [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

# Insert
lst.insert(0, 0)                # [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

# Remove
lst.remove(0)                   # [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

# Pop
x= lst.pop(9)                   # x=10, lst=[1, 2, 3, 4, 5, 6, 7, 8, 9]
lst.clear()                     # []

# Sort
lst = [13, 8, 10, 5, 14]
_sorted = sorted(lst)           # _sorted=[5, 8, 10, 13, 14], lst=[13, 8, 10, 5, 14]
_reversed = list(reversed(lst)) # _reversed=[14, 5, 10, 8, 13], lst=[13, 8, 10, 5, 14]
lst.sort()                      # [5, 8, 10, 13, 14]
lst.reverse()                   # [14, 13, 10, 8, 5]

# Count
lst = ['a', 'b', 'c', 'a', 'b']
lst.index("b")                  # 1
lst.count("b")                  # 2
len(lst)                        # 5

# Copy
original = [1, 2, 3]
copy1 = original.copy()         # [1, 2, 3]
copy2 = list(original)          # [1, 2, 3]
copy3 = original[:]             # [1, 2, 3]





