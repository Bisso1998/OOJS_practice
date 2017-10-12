var Course = {};
var count = 0;
$(document ).ready(function() {
    console.log( "ready!" );
    var i=0;
    var courseName = "NULL", courseCode = "NULL";
    $('.addData > input').addClass('courseData');
    $( '#showAll' ).click(function() {
      var allInputs = $( "input.courseData" );
      courseName = allInputs[0].value;
      courseCode = allInputs[1].value;
      Course[i]  = {
        name : courseName,
        code : courseCode,
      };
      count++;
      $( "#addCards" ).append( "<span><p id=" +i+"p"+  "> Added " + Course[i].name + " with course code "+ Course[i].code + "  <button id="+ i +  " "+'onClick="deleteMe('+ i +')"' +'> Delete </button>'   + "  <button id="+ i +  " "+'onclick="editMe('+ i +')"' +'> Edit </button>'+  "<br> </p></span>");
      i++;
    });

});
function deleteMe(i) {
    // Course.splice(i,1);
  delete Course[i];
  // Course.splice(0,1);
  // Course.splice(i,1);
  $('#'+i+"p").parent().remove();

  count--;
};
function editMe(i) {
  var name = prompt("Enter name....");
  Course[i].name = name;
  $( "#"+i+"p" ).html( "<span><p id=" +i+ "p"+ "> Added " + "<cname>"+ Course[i].name + "</cname>" + " with course code "+ Course[i].code + "  <button id="+ i + "p" + " "+'onClick="deleteMe('+ i +')"' +'> Delete </button>'   + "  <button id="+ i + "p" +  " "+'onClick="editMe('+ i +')"' +'> Edit </button>'+  "<br> </p><span>");
}

function searchAll() {
  console.log("Input keyup");
  var input, filter, div, span, p, i;
  input = document.getElementById('inputTake');
  filter = input.value.toUpperCase();
  div = document.getElementById("addCards");
  span = div.getElementsByTagName('span');
  for (i = 0; i < span.length; i++) {
      p = span[i].getElementsByTagName("p")[0];
      // console.log(p.innerHTML);
      // a =  li[i].getElementById('searchMe');
      if (p.innerHTML.toUpperCase().indexOf(filter) > -1) {
          span[i].style.display = "";
      } else {
          span[i].style.display = "none";
      }
  }
}
