<?php
$voted = $_POST['voted']; // Get the value of 'voted' from POST data
$logincode = $_POST['logincode']; // Get the value of 'logincode' from POST data

echo "Received value (voted): " . $voted . "<br>";
echo "Received value (logincode): " . $logincode;
?>
