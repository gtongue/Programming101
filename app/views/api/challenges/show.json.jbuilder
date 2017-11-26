json.set! @challenge.id do 
  json.extract! @challenge, :id, :title, :skeleton, :solution
  json.tags @challenge.tags.map {|tag| tag.tag }
end
