def countApplesAndOranges(s, t, a, b, apples, oranges)
  tot_apples = 0
  tot_oranges = 0

    apples.each do |apple|
      if (a+apple).between?(s, t)
        tot_apples += 1
      end
    end

    oranges.each do |orange|
      if (b+orange).between?(s, t)
        tot_oranges += 1
      end
    end

  puts tot_apples
  puts tot_oranges 
end

countApplesAndOranges(7, 10, 4, 12, [2, 3, -4], [3, -2, -4])

# https://www.hackerrank.com/challenges/apple-and-orange/problem?isFullScreen=true
