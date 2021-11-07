def ex1():
    dic = {
        "S": 15,
        "M": 20,
        'L': 25
    }

    sumi = 0
    for i in range(3):
        s = input()

        if 'size' in s:
            sumi += dic[s[8]]

        if 'add' in s:
            a = s[17]
            if s[17] == 'Y':
                if sumi == 15:
                    sumi += 2
                else:
                    sumi += 3

        if 'extra' in s:
            if s[16] == 'Y':
                sumi += 1
    print(sumi)


def ex2():
    year = int(input("enter year:\n"))
    if (year % 4) == 0:
        if (year % 100) == 0:
            if (year % 400) == 0:
                print("{0} is porject_on_class leap year".format(year))
            else:
                print("{0} is not porject_on_class leap year".format(year))
        else:
            print("{0} is porject_on_class leap year".format(year))
    else:
        print("{0} is not porject_on_class leap year".format(year))


def ex3():
    w = int(input('weight = '))
    h = float(input('height = '))
    index = w / h ** 2
    if index <= 18.5:
        print('underweight')
    if 18.5 < index < 25:
        print('normal')
    if 25 < index < 30:
        print('overweight')
    if 30 < index < 35:
        print('obese')
    if index >= 35:
        print(' clinically obese')


def ex4():
    year = int(input('how many year you worked:\n'))
    salary = int(input('enter your current salary:'))
    print(salary * 1.05) if year > 5 else print(year)


def ex5():
    a = int(input('len:'))
    b = int(input('breadth'))
    print('yes') if a == b else print('no')


def ex6():
    count = int(input('count:'))
    print(count * 100 * 0.9) if count * 100 > 1000 else print(count * 100)


def ex7():
    a = int(input('enter grade'))
    if a < 25:
        print('F')
    elif 25 <= a <= 45:
        print('E')
    elif 45 < a <= 50:
        print('D')
    elif 50 < a <= 60:
        print('C')
    elif 60 < a <= 80:
        print('B')
    elif 80 < a:
        print('A')


def ex8():
    ages = list(map(int, input().split()))
    print(max(ages))
    print(min(ages))


def ex9():
    a = int(input('Number of classes held'))
    b = int(input('Number of classes attended.'))
    print('no') if b / a < 0.75 else print('yes')


def ex10():
    print('yes') if (int(input()) % 10) % 3 == 0 else print('no')


if __name__ == '__main__':
    ex10()
