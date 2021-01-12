window.addEventListener('scroll', function(){
var header = document.querySelector('header');
header.classList.toggle('sticky', window.scrollY > 0);
});

function toggleMenu(){
    var menuToggle = document.querySelector('.toggle');
    var menu = document.querySelector('.menu');
    menuToggle.classList.toggle('active')
    menu.classList.toggle('active')
}

// Read More
var i = 0;
var readmore = document.getElementById('readmore');
var dots = document.getElementById('dots');
var btn = document.getElementById('Read');
function Read()
{
  if(i==0){
    readmore.style.display="block";
    dots.style.display="none";
    btn.innerHTML="Read Less";
    i=1;
  }
  else{
    readmore.style.display="none";
    dots.style.display="block";
    btn.innerHTML="Read More";
    i=0;
  }
}


// Comment

$(document).ready(function () {
    $("#commentForm").on("submit", function (event) {
      event.preventDefault();
  
      const comment = $("#comment").val();
      const name = $("#name").val();
  
      const templateKomentar = `<p><strong>${name} </strong>mengatakan bahwa: ${comment}</p><br>`;
      $(this).before(templateKomentar);
  
      if (name.length <= 3) {
        $("#commentForm").append("INVALID NAME");
        $("#name").addclass("invalidInput");
      } else {
        $("#commentForm").append();
        $("#name").val("");
        $("#comment").val("");
      }
    });
  });

  // Notification

  
  var alert_items = document.querySelectorAll(".alert_item");
  var alert_btns = document.querySelectorAll(".btn");
  var close_btns = document.querySelectorAll(".close");
  var alert_wrapper = document.querySelector(".alert_wrapper");

  alert_btns.forEach(function(btn, btn_index){
      btn.addEventListener("click", function(){
          alert_wrapper.classList.add("active");

          alert_items.forEach(function(alert_item, alert_index){
              if(btn_index == alert_index){
                  alert_item.style.top = "50%"
              }else{
                  alert_item.style.top = "-100%"
              }
          })
      })
  })

  close_btns.forEach(function(close_btn, close_index){
      close_btn.addEventListener("click", function(){
          alert_wrapper.classList.remove("active");

          alert_items.forEach(function(alert_item, alert_index){

                  alert_item.style.top = "-100%"
              
          })

      })
  })








