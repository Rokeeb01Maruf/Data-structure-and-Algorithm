import math

def binary_search(data, number):
    initial_index = 0
    last_index = len(data) - 1

    while initial_index <= last_index:
        middle_index = math.ceil(1/2*(initial_index + last_index))

        if data[middle_index] == number:
            return f"the number {number} was found on index {middle_index}"
        elif data[middle_index] < number:
            initial_index = middle_index + 1
        elif data[middle_index] > number:
            last_index = middle_index - 1

    return f"the number {number} was found on the list provided"

search = binary_search([2, 5, 8, 9, 12, 20], 2)
print(search)
