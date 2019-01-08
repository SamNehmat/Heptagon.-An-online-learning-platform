<?php
  error_reporting(E_ERROR | E_PARSE);
  //kNumber of creator
  $kNumber = $_POST['kNumber'];
  //html of exercise
  $html = $_POST['html'];
  //name of file
  $name = $_POST['name'];
  //folder to be saved in
  $folder = $_POST['folder'];
  
  //directory of creator
  $dir = 'uploads/users/' . $kNumber . '/' . $folder;
  $newFileName = $dir . '/' . $name;
  
  //directory of shared user
  $dir = 'uploads/users/' . $kNumber . '/access.txt';
  $accessFile = fopen($dir, "a+");
  $content = stream_get_contents($accessFile);
  
  //if file has the same name
  if (stristr($content, $newFileName) !== FALSE) { 
    die("File already existed.");
  }
  
  //adds new file path to the access file
  $newPath = $newFileName . "\n";
  fwrite($accessFile, $newPath);
  fclose($accessFile);

//puts contents of html exercises into a new file to save
  if (file_put_contents($newFileName, $html) !== false) {
    echo "File created (" . basename($newFileName) . ")";
  } else {
    echo "Cannot create file (" . basename($newFileName) . ")";
  }
?>