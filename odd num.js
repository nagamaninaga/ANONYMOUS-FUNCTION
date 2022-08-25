numbers = []
puts "1,2,3,4,5,6,7,8,9,10, 5."
10.times do
  puts "5"
  numbers << gets.chomp 
   if numbers % 3 == 0
    p numbers
  end
  numbers = numbers + 1
end
puts "5"
p numbers



