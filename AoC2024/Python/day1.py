with open('./AoC2024/data/day1.txt') as file:
  data = file.read()

lines = data.split('\n')

leftCol = []
rightCol = []

for i in range(len(lines)):
  line = lines[i].split('   ')
  leftCol.append(line[0])
  rightCol.append(line[1])

leftCol.sort()
rightCol.sort()

distance = 0

for i in range(len(leftCol)):
  distance += abs(int(leftCol[i]) - int(rightCol[i]))

print(distance)

similarity = 0
for i in range(len(leftCol)):
  same = 0
  for j in range(len(rightCol)):
    if leftCol[i] == rightCol[j]:
      same += 1
  
  similarity += int(leftCol[i]) * same

print(similarity)