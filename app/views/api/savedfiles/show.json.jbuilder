json.set! @saved_file.challenge_id do 
  json.extract! @saved_file, :id, :user_id, :challenge_id, :content
end