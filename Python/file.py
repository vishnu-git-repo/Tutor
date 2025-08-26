
with open('test/example.txt', 'w') as f:
    f.write("Hello, World!\n")
    lines = ["Line 1\n", "Line 2\n", "Line 3\n"]
    f.writelines(lines)
    f.flush() 
with open('test/example.txt', 'r+') as f:
    content = f.read()
    print('Current position:', f.tell())
    print('Current character:', f.read(1))
    f.seek(0,)
    print('Current position:', f.tell())
    print('Current character:', f.read(1))
    f.truncate()


print(content)