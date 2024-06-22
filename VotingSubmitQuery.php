<?php
    // Start session if not already started
    if (session_status() === PHP_SESSION_NONE) {
        session_start();
    }

    // Include database connection
    include("db.php");

    // Dump POST data for debugging
    var_dump($_POST);
    $logincode = $_POST['logincode']; // Note the lowercase 'c' in 'logincode'


    echo $logincode;

    // Check if 'strings' key is set in POST data and is an array
    if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['strings']) && is_array($_POST['strings'])) {
        $stringArray = $_POST['strings'];

        $query1 = "update logincode set Voted = 'yes' where code = '{$logincode}'";            
        $result1 = mysqli_query($con, $query1);

        if($result1){
            echo "Successfully Voted\n";
        }


        foreach ($stringArray as $string) {
            // Example: Select studentid and NoofVotes from candidates where studentid equals $string
            $query = "SELECT studentid, NoofVotes FROM candidates WHERE studentid = '{$string}'";
            $result = mysqli_query($con, $query);

            if ($result) {
                // Check if a row was found
                if (mysqli_num_rows($result) > 0) {
                    $row = mysqli_fetch_assoc($result);
                    $currentVotes = (int) $row['NoofVotes'];

                    // Increment the votes
                    $newVotes = $currentVotes + 1;

                    // Update the votes in the database
                    $updateQuery = "UPDATE candidates SET NoofVotes = '{$newVotes}' WHERE studentid = '{$string}'";
                    $result1 = mysqli_query($con, $updateQuery);

                    if ($result1) {
                        echo "Votes updated successfully for studentid: {$string}\n";
                    } else {
                        echo "Error updating votes for studentid: {$string}\n";
                    }
                } else {
                    echo "No candidate found with studentid: {$string}\n";
                }
            } else {
                echo "Query execution failed: " . mysqli_error($con) . "\n";
            }
        }
    } else {
        echo "Error: Invalid or empty 'strings' array"; // Handle invalid or empty array case
    }
?>