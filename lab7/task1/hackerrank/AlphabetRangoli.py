def print_rangoli(size):
    import string
    alpha = string.ascii_lowercase

    width = 4 * size - 3
    lines = []

    for i in range(size):
        s = "-".join(alpha[i:size])
        line = (s[::-1] + s[1:]).center(width, "-")
        lines.append(line)

    print("\n".join(lines[::-1] + lines[1:]))

if __name__ == '__main__':
    n = int(input())
    print_rangoli(n)