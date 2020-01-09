def reverse_complement_string(dnaString):
  reversed_complement_string = ""

  paired_nucleotides = {
    "A": "T",
    "T": "A",
    "C": "G",
    "G": "C"
  }

  for nucleotide in dnaString:
    try:
      reversed_complement_string += paired_nucleotides.get(nucleotide)
    except:
      raise Exception(f"invalid nucleotide in string: {nucleotide}")

  return reversed_complement_string
  