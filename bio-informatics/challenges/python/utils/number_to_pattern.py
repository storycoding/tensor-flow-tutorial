import math
from utils import get_nucleotide_by_index

def number_to_pattern(number, patternLength):
  pattern = []

  for x in range(patternLength):
    remainder = number % 4
    nucleotide = get_nucleotide_by_index(remainder)
    pattern.insert(0, nucleotide)
    number = math.floor(number / 4)

  return "".join(pattern)