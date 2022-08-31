Write a program that takes a set of Roman numerals, as a string, and converts it to an integer.

How Roman Numerals Work

Roman numerals map to standard integers like so:

I = 1
V = 5 
X = 10
L = 50
C = 100
D = 500 
M = 1000

When numerals are listed from largest size to smallest size, they are additive. When smaller numerals are listed before larger numerals, they are subtractive.

Examples:

Input: VIII
V = 5, I = 1
5 + 1 + 1 + 1 = 8

Input: IX
X = 10, I = 1
10 - 1 = 9

Input: MMXXI
M = 1000, X = 10, I = 1
1000 + 1000 + 10 + 10 + 10 + 1 = 2021

Input: MCMXIX
M = 1000, C = 100, X = 10, I = 1
1000 - 100 + 1000 + 10 - 1 + 10 = 1919
