export const postFile = file => (
  $.ajax({
    url: "/api/savedfiles",
    method: "POST",
    data: file
  })
);
export const getFile = id => (
  $.ajax({
    url: "/api/savedfiles/"+ id,
    method: "GET"
  })
);