<?php
	
  $kNumber = $_POST['kNumber'];
  
  $file = $_POST['filePath'];

 //if file cannot be deleted 
  if (!unlink($file)) {
    echo ("File cannot be deleted.");
  } else {
    echo ("File deleted."); // once file is deleted
  }
?>