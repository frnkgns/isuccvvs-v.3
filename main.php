<?php
    session_start();

    include("db.php");

    $query = "select * from candidates where organization = 'SSC'";
    $result = mysqli_query($con, $query);

    $sscOfficers = array();
    if ($result->num_rows > 0) {
        while($row = $result->fetch_assoc()) {
            $sscOfficers[] = $row;
        }
    }

    $sscOfficersJSON = json_encode($sscOfficers);

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=1020px">
    <title>Document</title>
    <link rel="stylesheet" href="main.css">
</head>
<body>
    <div class="container">
        <div class="header">
            <img src="Pictures/isulogo.png" class="isuhead" style="background-color: white; border-radius: 60px;" alt="isulogo">
            <p class="greenbox">STUDENT LEADERS 2025</p>
            <p class="redbox">CANDIDATES</p>
        </div>
        <p id="instruction" class="instruction" style="font-family: sans-serif; font-size: 15px;">*Select the placards of your chosen candidates</p>
        
        <div class="sscofficers">
            <div class="president" id="president"><p class="position-text">SSC PRESIDENT</p></div>
            <div class="vicepresident" id="vicepresident"><p class="position-text">SSC VICE-PRESIDENT</p></div>
            <div class="treasurer" id="treasurer"><p class="position-text">SSC TREASURER</p></div>
            <div class="auditor" id="auditor"><p class="position-text">SSC AUDITOR</p></div>
        </div>

        <div class="collegeofficers" style="font-size: 20px; font-family: Arial; margin-top: 100px; margin-bottom: 100px;"> COLLEGE OFFICERS UPCOMING </div>
    </div>
    <script>
        // fetch natin yung data sa sql sa external js script
        const sscOfficers = JSON.parse('<?php echo $sscOfficersJSON; ?>');
    </script>
    <script src="main.js"></script>
</body>
</html>