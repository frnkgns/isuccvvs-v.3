<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <link rel="stylesheet" href="main.css">
    <style>
        .btn-custom:hover {
            background-color: violet;
            color: white !important;
        }

        .btn-custom2:hover{
            color: white
        }
    </style>

</head>
<body>
    <div class="d-grid gap-2" style="margin-top: 200px" style="position:absulote;">
        <div style="display:flex; justify-content: center"> 
            <button type="button" class="btn btn-outline-primary" onclick="redirectToAnotherPHP('ccje')">
                <p><b>CCJE</b></p>
                    <img src="Pictures\Crim.png" alt="Button Image" style="height: 230px">
                </button>
            <button type="button" class="btn btn-outline-secondary" onclick="redirectToAnotherPHP('ps')">
                <p><b>PS</b></p>
                    <img src="Pictures\polytechnic.png" alt="Button Image" style="height: 220px">
                </button>
            <button type="button" class="btn btn-outline-success" onclick="redirectToAnotherPHP('iat')">
                <p><b>IAT</b></p>
                <img src="Pictures\agri.png" alt="Button Image">
            </button>
            <button type="button" class="btn btn-outline-danger" onclick="redirectToAnotherPHP('ccsict')">
                <div style="justify-content: center; display:flex;">
                    <p><b>CCSICT</b></p>
                </div>
                <img src="Pictures/cct.png" alt="Button Image" style="height: 220px;">
                </button>
            <button type="button" class="btn btn-outline-warning btn-custom2" onclick="redirectToAnotherPHP('cbm')">
                <p><b>CBM</b></p>
                <img src="Pictures\cbm.png" alt="Button Image" style="height: 220px; background-color: ">
                </button>
            </button>
            <button type="button" class="btn btn-outline-info btn-custom2" onclick="redirectToAnotherPHP('ced')">
                <p><b>CED</b></p>
                <img src="Pictures\ced.png" alt="Button Image" style="height: 210px; background-color: ">
                </button>
            </button>
            <button type="button" class="btn btn-outline-dark btn-custom" style="border-color: violet; color:violet;" onclick="redirectToAnotherPHP('sas')">
                <p><b class="btn-custom2">SAS</b></p>
                <img src="Pictures\sas.png" alt="Button Image" style="height: 210px; background-color: ">
                </button>
            </button>
        </div>
    </div>
    <div style="display:flex; justify-content: center; margin-top: 100px">
            <div class="submitbtnsize">
                <button class="button-27" id="submitbtn" onclick="window.location.href='admin.php'">Back</button>
            </div>
        </div>
    </div>

    <script>
        function redirectToAnotherPHP(name) {
            window.location.href = 'dashboard.php?college=' + name;
        }
    </script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
</body>
</html>