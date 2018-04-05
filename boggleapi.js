//Karina Dorantes

$("#button").on("click", function(e){
  var letters = $("#solver").val();
  var proxy = "https://cors-anywhere.herokuapp.com/"
  var Url = proxy + "https://api.codebox.org.uk/boggle/" + letters;
  $.ajax({
    url:Url,
    dataType:"json",//return format//had to include this because was getting an error in console
    success:function(response){
      console.log(response);
      // response.forEach(e){
      //   $("#solutions").append(JSON.stringify(response))
      }
    },
    error:function(er){
      console.log("error");
    }
  })
})
