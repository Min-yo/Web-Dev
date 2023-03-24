def string_bits(str):
    new_str =""
    for x in range(0,len(str),2):
        new_str += str[x]
    return new_str