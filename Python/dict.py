credentials = {"name": "vishnu", "age":23, "profession": "IT"}

# Accessing Elements
print(credentials.get("name"))              # vishnu
print(credentials.keys())                   # dict_keys(['name', 'age', 'profession'])
print(credentials.values())                 # dict_values(['vishnu', 23, 'IT'])
print(credentials.items())                  # dict_items([('name', 'vishnu'), ('age', 23), ('profession', 'IT')])
print(credentials.setdefault("age", 30))    # 23
print(credentials.setdefault("a", "b"))     # Kallakurichi
print(credentials)                          # {'name': 'vishnu', 'age': 23, 'profession': 'IT', 'city': 'Kallakurichi'}


# Update Elements
data = {"a":1, "b":2}
data.update({"b":20, "c":3})                # {'a': 1, 'b': 20, 'c': 3}
data.update([("d",4),("e",5)])              # {'a': 1, 'b': 20, 'c': 3, 'd': 4, 'e': 5}

# Removing Elements
data.pop("e")                               # {'a': 1, 'b': 20, 'c': 3, 'd': 4}
key,value = data.popitem()                  # data={'a': 1, 'b': 20, 'c': 3}, key="d", value=4
data.clear()                                # {}

# Information and Checking
data = {'name': 'Bob', 'age': 25}
has_name = 'name' in data                   # True
has_email = 'email' not in data             # True
size = len(data)                            # 2

# Copy the originals
original = {'a': 1, 'b': 2}
copy1 = original.copy()                     # {'a': 1, 'b': 2}
copy2 = dict(original)                      # {'a': 1, 'b': 2}


defaults = dict.fromkeys(['name', 'age', 'city'], 'Unknown')
print(copy1, copy2, defaults)