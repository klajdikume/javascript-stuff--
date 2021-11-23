from fractions import Fraction

def rounding_floats(number1, places):
    return round(number1, places)

def convert_to_decimal(number, base):
    multiplier, result = 1, 0
    while number > 0:
        result += number%10*multiplier
        multiplier *= base
        number = number // 10
    return result

# mutability

