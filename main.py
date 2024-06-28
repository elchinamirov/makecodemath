a = 0
b = 0
c = 0
D = 0
x1 = 0

def on_forever():
    global a, b, c, D, x1
    a = 1
    b = 4
    c = 4
    D = b ** 2 - 4 * a * c
    if D > 0:
        x1 = (-1 * b + Math.sqrt(D)) / (2 * a)
    elif D == 0:
        x1 = -1 * b / (2 * a)
    else:
        pass
basic.forever(on_forever)
