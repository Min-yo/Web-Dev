def string_splosion(str):
    nstr = ""
    for x in range(1,len(str)+1):
        nstr += str[:x]
    return nstr