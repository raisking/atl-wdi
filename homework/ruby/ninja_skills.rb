a = true
puts a
b = false
puts b

puts a & b 
puts a | b 

apple = nil
puts apple 
puts "#{apple} nil was here "


d = 2 ** 3
puts d
e = 2.00
puts e
d == e 
puts d


christine = "Hi, I'm Christine"
puts christine
likesTo = "long walks on the beach, kinda"
puts likesTo
puts "#{christine} and I am #{likesTo}"



g = '2'
gToNumber = 2
puts "#{g} + #{gToNumber}"



puts = "Sir, What is your name?"
name = gets
puts = "Sir, What do you like to do?"
like = gets
puts "He is " + name + "and he lkes " + like 



myFirstArray = ["apple","mango","orange","banana","grape",4,5,2,1]
puts myFirstArray.last
puts myFirstArray.first

myFirstArray.insert(1, "Joe")
puts myFirstArray

myFirstArray.insert(2, "3")
puts myFirstArray

myFirstArray.push(true)
puts myFirstArray

puts myFirstArray.take(3)