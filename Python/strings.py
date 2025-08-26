# String Methods
a = "Hello World" 
p = "Python is fun and Python is powerful"
tabstr = "a\tb\tc"
arr = ["1","2","3","4","5"]
tpl = (1,2,3,4,5)
Set = {"1","2","3","4","5"}
dic = {"name":"vishnu", "age":23, "profession":"FullStack"}
whited_txt = "      txt     "


print(len(a))                       # 11

print("hii".capitalize())           # Hii
print("hii".upper())                # HII
print("HiHello".casefold())         # hihello
print("HiHello".lower())            # hihello
print("HiHello".swapcase())         # hIhELLO
print("Hi hello".title())           # Hi Hello

print("H".center(10))               #     H
print("H".center(10,"*"))           # ****H*****
print("H".ljust(10,"*"))            # H*********
print("H".rjust(10,"*"))            # *********H

print(p.count("n"))                 # 4
print(a.encode())                   # b'Hello World'
print(tabstr.expandtabs(4))         # a   b   c

print(a.endswith("d"))              # True
print(a.endswith("d",2,-1))         # False
print(a.startswith("d"))              # False

print(p.find("o"))                  # 4
print(p.find("o",5))                # 22
print(p.find("o",23,-1))            # 29
print(p.index("o"))                 # 4
print(p.index("o",5))               # 22
print(p.index("o",23,-1))           # 29
# find returns -1 if substring not found, but index gives error
print(p.rfind("u"))                 # 34
print(p.rfind("u",0,-2))            # 11
print(p.rindex("u"))                # 34
print(p.rindex("u",0,-2))           # 11

print("p123".isalnum())             # True
print("p 123".isalnum())            # False
print("pqrst".isalpha())            # True
print("p123".isalpha())             # False
print("123".isdecimal())            # True
print("-123".isdecimal())           # False
print("123".isdigit())              # True
print("my_var".isidentifier())      # True
print("my_var".islower())           # True
print("9.00".isnumeric())           # False
print("`".isprintable())            # True
print(" ".isspace())                # True
print("Is title".istitle())         # False
print("Is Title".istitle())         # True
print("HEllo".isupper())            # False

print("*".join(arr))                # 1*2*3*4*5
# print("*".join(tpl))                # Error due to int concats
print("*".join(Set))                # 4*1*5*3*2
print("*".join(dic))                # name*age*profession

print(whited_txt.strip())           # txt
print(whited_txt.lstrip())          # txt      .
print(whited_txt.rstrip())          #       txt.
print("/* hihello */".strip("/* ")) # hihello

print(a.replace("l","L"))           # HeLLo WorLd
print(p.partition("and"))           # ('Python is fun ', 'and', ' Python is powerful')
print(p.rpartition(" "))            # ('Python is fun and Python is', ' ', 'powerful')

print("a-b-c-d".split("-"))         # ['a', 'b', 'c', 'd']
print("a-b-c-d".split("-", 2))      # ['a', 'b', 'c-d']
print("a-b-c-d".rsplit("-"))        # ['a', 'b', 'c', 'd']
print("a-b-c-d".rsplit("-", 2))     # ['a-b', 'c', 'd']
print("a\nb\nc".splitlines())       # ['a', 'b', 'c']

print("42".zfill(5))                # 00042
print("-42".zfill(5))               # -0042
print("12345".zfill(5))             # 12345




# =============================================================
x,y = "Vishnu", 23
print("My name is {0} and I am {1} years old.".format(x, y))
# My name is Vishnu and I am 23 years old.

dict = {'fName':'John', 'lName':'Wick'}
print("{fName}'s last name is {lName}".format_map(dict))
# John's last name is Wick

target="hello World"
str1="hW"       # replaced
str2="Hw"       # replaced by
str3=" "        # removed
table=target.maketrans(str1, str2, str3)
print(target.translate(table))          
# Helloworld
