
@challenges.each do |challenge|
  json.set! challenge.id do
    json.extract! challenge, :title, :skeleton, :solution
    json.tags challenge.tags.map {|tag| tag.tag }
  end
end