'''
1) Ask:
Given the total number of rows and columns in the theater (nRows and nCols, respectively), 
and the row and column you're sitting in, 
return the number of people who sit strictly behind you and in your column or to the left, assuming all seats are occupied.

2) Examples
nCols = 16, nRows = 11, col = 5, and row = 3, output = 96
'''

def solution(nCols, nRows, col, row):
    # find the columns that you occupy
    # find the rows that you occupy
    
    xColumns = nCols - col + 1 # to the left
    yRows = nRows - row
    
    area = xColumns * yRows
    
    return area 
    
