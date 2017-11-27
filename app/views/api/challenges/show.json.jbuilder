json.set! @challenge.id do 
  json.extract! @challenge, :id, :title, :skeleton, :solution, :tests, :steps
  json.tags @challenge.tags.map {|tag| tag.tag }
end
