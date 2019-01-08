$(document).ready(function() {
    var kNumber = localStorage.getItem('kNumber');
    localStorage.setItem('currentFolder', 'Default');

    $.ajax({
      url: 'download.php',
      type: 'POST',
      data: {"kNumber": kNumber, "dir": 'uploads/users/' + kNumber},
      success: function(res) {
        $(".projects").empty();
        $(".projects").append('<tr><td><input id="addNew" data-toggle="modal" data-target="#myModalNorm" type="button" value="Add New"/></td></tr>');
        $(".projects").append(res);
        $("[value='Default']").click();
      }
    });

    $(document).on('click', '#addNewFolder', function(event) {
      event.stopPropagation();
      event.stopImmediatePropagation();
      var kNumber = localStorage.getItem('kNumber');
      var name = document.getElementById("folderName").value;

      if (name !== null) {
        $.ajax({
          url: 'createFolder.php',
          type: 'POST',
          data: {"kNumber": kNumber, "name": name},
          success: function(res) {
            alert(res);
          }
        });

        $(document).ajaxStop(function(){
          window.location.reload();
        });
      }
    });

    $(document).on('click', '.dir',function(event) {
      event.stopPropagation();
      event.stopImmediatePropagation();
      $('.dir').removeClass('selected').addClass('unselected');
      $('.dir').parent().removeClass('selected').addClass('unselected');
      $(this).removeClass('unselected').addClass('selected');
      $(this).parent().removeClass('unselected').addClass('selected');
      var folderName = $(this).val();
      var dir = $(this).data("dir");

      $.ajax({
        url: 'download.php',
        type: 'POST',
        data: {"kNumber": kNumber, "dir": dir},
        success: function(res) {
          $(".myExercises").empty();
          $(".myExercises").append(res);
        }
      });

      $(document).ajaxStop(function(){
        localStorage.setItem('currentFolder', folderName);
        if (localStorage.getItem('currentFolder') == "Shared") {
          $('#createNew').hide();
        } else {
          $('#createNew').show();
        }
      });
    });

    $(document).on('click', '.selectExercise',function(event) {
      event.stopPropagation();
      event.stopImmediatePropagation();
      window.location.href = $(this).attr('href');
    });

    $(document).on('click', '.deleteButton',function(event) {
      event.stopPropagation();
      event.stopImmediatePropagation();
      var name = $(this).data("foldername");
      
      if (name == undefined) {
        var kNumber = $(this).data("knumber");
        var fileName = $(this).data("filename");
        var filePath = $(this).data("filepath");
        var result = confirm("You are trying to delete this file:\n" + fileName);

        if (result) {
          $.ajax({
            url: 'deleteFile.php',
            type: 'POST',
            data: {"kNumber": kNumber, "filePath": filePath + "/" + fileName},
            success: function(res) {
              alert(res);
            }
          });

          $(document).ajaxStop(function(){
            window.location.reload();
          });
        }
      } else {
        var kNumber = $(this).data("knumber");
        var folderName = $(this).data("foldername");
        var filePath = $(this).data("filepath");
        var result = confirm("You are trying to delete this folder:\n" + folderName);

        if (result) {
          $.ajax({
            url: 'deleteFolder.php',
            type: 'POST',
            data: {"kNumber": kNumber, "filePath": filePath + "/" + folderName},
            success: function(res) {
              alert(res);
            }
          });

          $(document).ajaxStop(function(){
            window.location.reload();
          });
        }
      }
    });

    $(document).on('click', '.shareButton',function(event) {
      event.stopPropagation();
      event.stopImmediatePropagation();
      var kNumber = prompt("Please enter user you wish to share this file with.");
      var owner = $(this).data("knumber");
      var fileName = $(this).data("filename");
      var filePath = $(this).data("filepath");
      var arrStr = filePath.split(/[/]/);
      var folderName = arrStr.slice(-1)[0];

      if (kNumber !== null) {
        var result = confirm("Share " + fileName + " with " + kNumber + "?");
      }

      if (result) {
        $.ajax({
          url: 'shareFile.php',
          type: 'POST',
          data: {"owner": owner, "kNumber": kNumber, "fileName": fileName, "folderName": folderName},
          success: function(res) {
            alert(res);
          }
        });

        $(document).ajaxStop(function(){
          window.location.reload();
        });
      }
    });
});

function openCreateExercise(form) {
    if (document.getElementById('MCQRadio').innerHTML == true) {
        window.open("MCQ.html","_self")
    } else if (document.getElementById('matcherRadio').innerHTML == true) {
        window.open("matcher.html","_self")
    } else if (document.getElementById('hangmanRadio').innerHTML == true) {
        window.open("hangman.html","_self")
    } else if (document.getElementById('blanksRadio').innerHTML == true) {
        window.open("blank.html","_self")
    } else {
        document.getElementById('modalText').innerHTML = "Please select an exercise type."
        modal1.style.display = "block";
        $('#myModal1').delay(2000).fadeOut('slow');
        setTimeout(function(){modal1.style.display = "none";}, 2500);
    }
}

var chooseExercise = document.getElementById('createNew'); //Button to open exercise modal
chooseExercise.onclick = function() {
    modal.style.display = "block";
}

function displayModal(){
    modal.style.display = "block";
}

function closeExerciseModal(){
    modal.style.display = "none";
}

var modal1 = document.getElementById('myModal1');// Get the modal
var btn1 = document.getElementById("myBtn1");// Get the button that opens the modal

window.onclick = function(event) {// When the user clicks anywhere outside of the modal, close it
    if (event.target == modal1) {
        modal1.style.display = "none";
    }
}

var modal = document.getElementById('myModal');
$(document).mouseup(function (e)
{
    var container = $(myModal);

    if (!container.is(e.target) // if the target of the click isn't the container...
        && container.has(e.target).length === 0) // ... nor a descendant of the container
    {
        container.hide();
    }
});
