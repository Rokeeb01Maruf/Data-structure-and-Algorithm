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
    print(double)
check_duplications = duplicated_value([1,2,5,8,2,5,0,9,8])
