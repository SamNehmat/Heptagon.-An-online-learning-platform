<?php
  error_reporting(E_ERROR | E_PARSE);
  //kNumber of creator
  $kNumber = $_POST['kNumber'];
  //name of folder
  $name = $_POST['name'];
  
  //directory of creator
  $dir = 'uploads/users/' . $kNumber;
  $newFileName = $dir . '/' . $name;
  
  //directory of access file
  $dir = 'uploads/users/' . $kNumber . '/access.txt';
  $accessFile = fopen($dir, "a+");
  $content = stream_get_contents($accessFile);
  
  //if there is a folder that already has the same name
  if (stristr($content, $newFileName) !== FALSE) {
    die("Folder already existed.");
  }
 
  $newPath = $newFileName . "\n";
  fwrite($accessFile, $newPath);
  fclose($accessFile);

  //create folder at directory
  if (mkdir($newFileName) !== false) {
    echo "Folder created (" . basename($newFileName) . ")";
  } else {
    echo "Cannot create folder (" . basename($newFileName) . ")";
  }
?>