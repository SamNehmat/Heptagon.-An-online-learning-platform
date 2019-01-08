<?php
  $kNumber = $_POST['kNumber']; //get username (knumber)

  $output = "";
  
  $dir = $_POST['dir']; //get the directory
  if ($handle = opendir($dir)) { //open the directory
    while (false !== ($file = readdir($handle))) { //read directory and if file exists then enter this condition
      if ($file != "." && $file != ".." && $file != "css" && $file != "js" && $file != "access.txt") { //restricts file types
        $file_path = $dir . DIRECTORY_SEPARATOR . $file; //split the directory into files and folders
        if (file_exists($file_path) && is_dir($file_path)) {
          if ($file == "Default" || $file == "Shared") {
            $output = $output.'<tr><td class="unselected"><input class="unselected dir" type="button" value="'.$file.'" data-dir="'.$file_path.'"/></td></tr>';
          } else {
            $output = $output.'<tr><td class="unselected"><input class="unselected dir" type="button" value="'.$file.'" data-dir="'.$file_path.'"/></td>
                      <td class="editDeleteIcon"><input type="button" class="iconFont rightAlign deleteButton" value="delete"
                      data-knumber="'.$kNumber.'" data-foldername="'.$file.'" data-filepath="'.$dir.'"/></td></tr>';
          }
        } else {
          $output = $output.'<tr><td><input class="selectExercise" type="button" href="'.$dir.'/'.$file.'" value="'.$file.'"/></td>
                    <td class="editDeleteIcon"><input type="button" class="iconFont rightAlign deleteButton" value="delete"
                    data-knumber="'.$kNumber.'" data-filename="'.$file.'" data-filepath="'.$dir.'"/></td>
                    <td class="editDeleteIcon"><input type="button" class="iconFont rightAlign shareButton" value="person_add"
                    data-knumber="'.$kNumber.'" data-filename="'.$file.'" data-filepath="'.$dir.'"/></td></tr>';
        }
      }
    }
    //close directory
    closedir($handle); 
  }
  
  echo $output;
?>