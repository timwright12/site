<?php

$spreadsheet_url="https://docs.google.com/spreadsheets/d/1MLAko1Eym5O-Qt7cRQb55RBWH3ZHW2_VmHCV0x1Bx5s/pub?gid=0&single=true&output=csv";

$stack = array();

if(!ini_set('default_socket_timeout',    15)) echo "<!-- unable to change socket timeout -->";

if (($handle = fopen($spreadsheet_url, "r")) !== FALSE) {
  
  while (($data = fgetcsv($handle, 1000, ",")) !== FALSE) {
    
    $spreadsheet_data[] = $data;
    $header_count = count( $spreadsheet_data[0] ) - 1;

    $sub = array();
    
    for ( $counter = 0; $counter <= $header_count; $counter += 1) {
      array_push($sub, $data[$counter]);
    }

    array_push($stack, $sub);

  }

  fclose($handle);
  
  $count = 0;
  $count2 = 0;
  $index = -1;
  $headers = array_shift($stack);
  $total = count($stack);
  
//  echo '[';
  
  foreach ($stack as &$row) {
    
    $count = $count + 1;
    $total_items = count($row);
    
    echo '{';
    
    foreach ( $row as &$item ) {

      $count2 = $count2 + 1;
      $index = $index + 1;

      if( $count2 === $total_items ) {
        echo '"' . $headers[$index] . '" : "'. $item .'"';
      } else {
        echo '"' . $headers[$index] . '" : "' . $item .'",';
      }
      
      if ($count2 === $total_items) {
        $count2 = 0;
        $index = -1;
      }
     
    }
    
    if($count === $total) {
      echo '}';
    } else {
      echo '},';
    }

  }
  
//  echo ']';
  
} else {

  die("Problem reading CSV");

}

?>