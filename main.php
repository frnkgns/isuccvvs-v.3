<?php
    if (session_status() === PHP_SESSION_NONE) {
        session_start();
    }

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
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
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

<!-- var Positions = ['president', 'vice-president', 'secretary','treasurer', 'auditor','accountant', 'sas_council', 'ccsict_council', 'cbm_council', 'ced_council', 'iat_council', 'ccje_council', 'ps_council']; -->

        <div class="sscofficers">
            <div class="president" id="president"><p class="position-text">SSC PRESIDENT</p></div>
            <div class="vicepresident" id="vicepresident"><p class="position-text">SSC VICE-PRESIDENT</p></div>
            <div class="secretary" id="secretary"><p class="position-text">SSC SECRETARY</p></div>
            <div class="treasurer" id="treasurer"><p class="position-text">SSC TREASURER</p></div>
            <div class="auditor" id="auditor"><p class="position-text">SSC AUDITOR</p></div>
            <div class="accountant" id="accountant"><p class="position-text">SSC ACCOUNTANT</p></div>
        </div>
    </div>
    <div class="slideshow-container">
        <!-- Slides with text only -->
        <div class="mySlides" id="presidentslide"></div>
        <div class="mySlides" id="vicepresidentslide"></div>
        <div class="mySlides" id="secretaryslide"></div>
        <div class="mySlides" id="treasurerslide"></div>
        <div class="mySlides" id="auditorslide"></div>
        <div class="mySlides" id="accountantslide"></div>
      
        <!-- Navigation buttons -->
        <a class="prev" onclick="plusSlides(-1)">&#10094; Previous</a>
        <a class="next" onclick="plusSlides(1)">Next &#10095;</a>
    </div>
    
    <!-- Dots/circles for slide navigation -->
    <br>
    <div style="text-align:center">
        <span class="dot" onclick="currentSlide(1)"></span>
        <span class="dot" onclick="currentSlide(2)"></span>
        <span class="dot" onclick="currentSlide(3)"></span>
        <span class="dot" onclick="currentSlide(4)"></span>
        <span class="dot" onclick="currentSlide(5)"></span>
        <span class="dot" onclick="currentSlide(6)"></span>
    </div>

    <div class="submitbtncon">
        <div class="submitbtnsize">
            <button class="button-27" id="submitbtn">Submit</button>
        </div>
    </div>

    <div class="footer">
    </div>


    <!-- JavaScript for slideshow functionality -->
    <script>
        var slideIndex = 1;
        showSlides(slideIndex);

        function plusSlides(n) {
            showSlides(slideIndex += n);
        }

        function currentSlide(n) {
            showSlides(slideIndex = n);
        }

        function showSlides(n) {
            var i;
            var slides = document.getElementsByClassName("mySlides");
            var dots = document.getElementsByClassName("dot");
            if (n > slides.length) {slideIndex = 1}    
            if (n < 1) {slideIndex = slides.length}
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";  
            }
            for (i = 0; i < dots.length; i++) {
                dots[i].className = dots[i].className.replace(" active", "");
            }
            slides[slideIndex-1].style.display = "block";  
            dots[slideIndex-1].className += " active";
        }
    </script>
    <script>
        // fetch natin yung data sa sql sa external js script
        const sscOfficers = JSON.parse('<?php echo $sscOfficersJSON; ?>');
    </script>
    <script src="main.js"></script>
</body>
</html>