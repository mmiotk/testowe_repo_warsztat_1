# src/app.py
def hello(name="World"):
    return f"Hello, {name}!"

def add(a, b):
    return a + b

if __name__ == "__main__":
    print(hello("Python"))
    print(f"2 + 3 = {add(2, 3)}")
