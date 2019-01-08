<?php
  function createUser($kNumber) {
    $dir = 'uploads/users/' . $kNumber;
    $shared = 'uploads/users/' . $kNumber . '/Shared';
    $default = 'uploads/users/' . $kNumber . '/Default';

    //creates user's server storage folder
    if (is_dir($dir) === false) {
      mkdir($dir);
    }

    //creates user's shared folder to store shared files
    if (is_dir($shared) === false) {
      mkdir($shared);
    }
    
    //creates user's default folder to store files that are not saved in a particular folder
    if (is_dir($default) === false) {
      mkdir($default);
    }

    //writes an access text file that contains sharing permissions
    $file_to_write = 'access.txt';
    $file = fopen($dir . '/' . $file_to_write,"w");
    fwrite($file, "");
    fclose($file);
  }

  if (isset($_POST['createUser'])) {
    echo createUser($_POST['createUser']);
  }
?>