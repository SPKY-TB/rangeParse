import re

def range_parser(string):
    array = re.split(',',string)
    result = []

    for element in array:


        elements = re.split('-|:',element)

        if (len(elements) == 3) :
            result.extend(writerange(int(elements[0]), int(elements[1]), int(elements[2])))
        
        elif (len(elements) == 2) :
            result.extend(writerange(int(elements[0]), int(elements[1])))
                
        else:
             result.append(int(elements[0]))
            
    return result

def writerange(startValue, maxValue, increment = 1) :
    valueRange = []
    while (startValue<=maxValue):
        valueRange.append(startValue)
        startValue+=increment
    
    
    return valueRange