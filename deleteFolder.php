<?php
  $kNumber = $_POST['kNumber'];
  $folder = $_POST['filePath'];

  array_map('unlink', glob("$folder/*.*"));
  
  //if remove folder is not successful
  if (!rmdir($folder)) {
    echo ("Folder cannot be deleted.");
  } else {
    echo ("Folder deleted."); //once folder is removed
  }
?>