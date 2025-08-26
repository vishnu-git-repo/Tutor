data = {1,}

# Adding Elements
data.add(2)                         # {1, 2}
data.update([3, 4])                 # {1, 2, 3, 4}

# Removing Elements
data.remove(4)                      # {1, 2, 3} raises a error if not found
data.discard(4)                     # {1, 2, 3} Do nothing if not found
popped = data.pop()                 # data={2, 3}, popped=1
data.clear()                        # set()


# Set Theory Operations (Return New Sets)
A = {1, 2, 3}
B = {2, 3, 4}

C = A.union(B)                      # {1, 2, 3, 4}
C = A | B                           # Same as above

D = A.intersection(B)               # {2, 3}
D = A & B                           # Same as above

E = A.difference(B)                     # {1}
E = A - B                           # Same as above

F = A.symmetric_difference(B)       # {1, 4}
F = A ^ B 

print(C,D,E,F)


# Set Theory Operations (In-Place Updates)
A.update(B)                         # A is now {1, 2, 3, 4}
A |= B                              # Same as above

A = {1, 2, 3}                       # Reset A
A.intersection_update(B)            # A is now {2, 3}
A &= B                              # Same as above

A = {1, 2, 3}                       # Reset A
A.difference_update(B)              # A is now {1}
A -= B                              # Same as above

A = {1, 2, 3}                       # Reset A
A.symmetric_difference_update(B)    # A is now {1, 4}
A ^= B                              # Same as above



# Boolean Comparisons and Membership
A = {1, 2}
B = {2, 3, 4}
C = {1, 2, 3}

A.isdisjoint({5, 6})                # True (no common elements)
A.issubset(C)                       # True (all of A is in C)
C.issuperset(A)                     # True (C contains all of A)
2 in A                              # True


# Copying and Creation
original = {1, 2, 3}
copy1 = original.copy()
copy2 = set(original)

# Creating a set from a list with duplicates
unique_nums = set([1, 2, 2, 3, 4])  # {1, 2, 3, 4}

# Set comprehension
squares = {x*x for x in range(5)}   # {0, 1, 4, 9, 16}