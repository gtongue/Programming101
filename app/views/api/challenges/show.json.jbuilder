json.set! @challenge.id do 
  if(!@saved_file)
    json.extract! @challenge, :id, :title, :skeleton, :solution, :tests, :steps
  else
    json.extract! @challenge, :id, :title, :solution, :tests, :steps
    json.skeleton @saved_file.content
  end
  json.tags @challenge.tags.map {|tag| tag.tag }
end
