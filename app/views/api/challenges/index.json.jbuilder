
# @challenges.each do |challenge|
#   json.set! challenge.id do
#     json.extract! challenge, :title, :skeleton, :solution
#     json.tags challenge.tags.map {|tag| tag.tag }
#   end
# end

json.array! @challenges do |challenge| 
  json.extract! challenge, :title
  json.tags challenge.tags.map {|tag| tag.tag }
end