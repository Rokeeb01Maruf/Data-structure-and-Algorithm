# Finding the largest number
def get_largest_number():
    numbers = [5,2,9,1,7]
    largest = 0
    for number in numbers:
        if number-largest > 0:
            largest = number
    return(largest)
largest = get_largest_number()

# Reversing a string

def reverse_string(string):
    data = ""
    for i in range(len(string)-1, -1, -1):
        data += string[i]
    return data
reverse = reverse_string("python")

# const = "data"
# print(const[::-1])
#check the number of vowel found in a string
def count_vowels(string):
    vowels = ["a", "e", "i", "o", "u"]
    vowel_found = 0
    for letter in string.lower():
        if letter in vowels:
            vowel_found += 1
    return(vowel_found)

vowel_count = count_vowels("Alleluyah")

#Returning the duplicated values

def duplicated_value(value):
    single = []
    double = []
    for letter in value:
        if letter in single and not letter in double:
            double.append(letter)
        else:
            single.append(letter)
    return(double)
check_duplications = duplicated_value([1,2,5,8,2,5,0,9,8])


#Check for character frequency
def character_frequency(values):
    characters = {}
    for value in values:
        if value not in characters:
            characters[value] = 1
        else:
            characters[value] += 1
    return(characters)
check_frequency =  character_frequency("banana")

# Palindrome checker

def check_palindrome(values):
    for index, value in enumerate(values):
        if value != values[len(values)-index-1]:
            return(False)
        else:
            return(True)

is_palindrome = check_palindrome("madam")

#Sum of a list

def sum_of_list(values):
    sum = 0
    for value in values:
        sum += value
    return sum

check_sum = sum_of_list([2,4,6,8])

#Remove duplicates

def remove_duplicates(values):
    newList = []
    for value in values:
        if value not in newList:
            newList.append(value)
    return newList

unique = remove_duplicates([1,2,2,3,1,4])

# find the second largest number

def second_largest(values):
    large_numbers = []