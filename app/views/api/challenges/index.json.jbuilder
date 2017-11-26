
@challenges.each do |challenge|
  json.set! challenge.id do
    json.extract! challenge, :id, :title
    json.tags challenge.tags.map {|tag| tag.tag }
  end
end

# json.array! @challenges do |challenge| 
#   json.extract! challenge, :title, :id
#   json.tags challenge.tags.map {|tag| tag.tag }
# end