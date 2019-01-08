<?php
  error_reporting(E_ERROR | E_PARSE);
  //kNumber of owner of the file
  $owner = $_POST['owner'];
  //kNumber of user to be shared with
  $kNumber = $_POST['kNumber'];
  //file path of file to be shared
  $fileName = $_POST['fileName'];
  //folder name of file to be shared
  $folderName = $_POST['folderName'];
  
  //directory of owner
  $ownerDir = 'uploads/users/' . $owner . '/' . $folderName . '/';
  //directory of shared user
  $shareDir = 'uploads/users/' . $kNumber . '/Shared/';
  //directory to check if shared user exists
  $dir = 'uploads/users/' . $kNumber . '/access.txt';
  
  //if kNumber does not exist then stop the script
  $accessFile = fopen($dir, "a+") or die("User does not exist.");

  fclose($accessFile);
  
  //copies shared file to the user's shared folder
  if (copy($ownerDir.$fileName, $shareDir.$fileName)) {
    echo "File $fileName successfully shared.";
  } else {
    echo "File $filename cannot be shared. $folderName";
  }
?>