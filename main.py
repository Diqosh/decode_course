if __name__ == '__main__':
    age = int(input('Enter age: '))
    sex = input('Enter sex:\n M = Male F = Female\n ')
    marital_st = input('Are u married?\n Y = yes N = No\n')

    if sex == "F":
        print(' she will work only in urban areas')
        exit(0)
    if sex == "M" and 20 <= age < 40:
        print('he may work in anywhere')
        exit(0)
    if sex == "M" and 40 <= age < 60:
        print('he will work in urban areas only.')
        exit(0)
    print('ERROR')
