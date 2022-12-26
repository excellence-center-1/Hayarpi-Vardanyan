class Matrix:
  def __init__(self,column=1,rows=1):
    self.column=column
    self.rows=rows
  def input_matrix(self):
    print("Enter the elements of Matrix:")
    self.matrix= [[int(input()) for i in range(self.column)] for i in range(self.rows)]
    print("Matrix is:")
    return self.matrix

  def print_matrix(self):
    print('\n'.join([str(i) for i in self.matrix]))

  def get_transpose(self):
    self.matrix1 = [[] for i in range(self.column)]
    for i in range(self.column):
      for j in range(self.rows):
        self.matrix1[i].append(self.matrix[j][i])
    return self.matrix1
  def print_transposed_matrix(self):
    print("Our transposed matrix : " + '\n' + '\n'.join([str(' '.join(str(j) for j in i)) for i in a.get_transpose()]))

  def add(self):
    res=[]
    self.matrix
    self.matrix1
    print("Matrix is: ")
    for i in range(len(self.matrix)):
      self.row = []
      for j in range(len(self.matrix[0])):
          self.row.append(self.matrix[i][j]+self.matrix1[i][j])
      res.append(self.row)
    return res
    for k in res:
      print(res)

  def substract(self):
    res=[]
    self.matrix
    self.matrix1
    print("matrix is: ")
    for i in range(len(self.matrix)):
      self.row = []
      for j in range(len(self.matrix[0])):
          self.row.append(self.matrix[i][j]-self.matrix1[i][j])
      res.append(self.row)
    return res
    for i in res:
      print(res)

  def mult(self):
    self.matrix
    self.matrix1
    result=[]
    print("Mult matrix: ")
    result = [[0 for row in range(len(self.matrix))] for col in range(len(self.matrix1[0]))]
    for i in range(len(self.matrix)):
        for j in range(len(self.matrix1[0])):
            for k in range(len(self.matrix1)):
                result[i][j] += self.matrix[i][k]*self.matrix1[k][j]
    return result

a = Matrix(2, 2)
a.input_matrix()
a.print_matrix()
a.print_transposed_matrix()
#a.add()
#a.substract()
a.mult()
