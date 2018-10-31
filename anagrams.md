# Anagrams Problem

### Anagrams are two words with the exact same letters.

### Write a function that take two strings and returns true if they are anagrams and false if they are not.

```
def anagrams?(str1, str2)
  if str1.length != str2.length
    return false
  end

  letters1 = str1.split("")
  letters2 = str2.split("")

  str1_hash = Hash.new(0)
  str2_hash = Hash.new(0)

  letters1.each{|character| str1_hash[character]+=1}
  letters2.each{|character| str2_hash[character]+=1}

  return str1_hash==str2_hash  
end

puts "-------Anagrams-------"
puts anagrams?("alert", "alter") == true
puts anagrams?("desert", "rested") == true
puts anagrams?("banana", "fofanna") == false
puts anagrams?("meat master", "team stream") == true
```
