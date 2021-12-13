
def reverse_words(text):
    txt = []
    for word in text.split():
        txt.append(word[::-1] )
    return " ".join(txt)
if __name__ == '__main__':
    print(reverse_words('asdf'))