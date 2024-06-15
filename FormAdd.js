const dropArea = document.getElementById("drop-area");
const inputfile = document.getElementById("input-file");
const imageview = document.getElementById("img-view");
const organizationSelect = document.getElementById("organization");
const positionSelect = document.getElementById("position");
const collegeSelect = document.getElementById("college");
const courseSelect = document.getElementById("course");


organizationSelect.addEventListener("change", function() {
    // Clear previous options in positionSelect
    positionSelect.innerHTML = '';

    // Get the selected organization value
    var selectedOrganization = organizationSelect.value;

    // Create default option for positionSelect
    var defaultOption = document.createElement("option");
    defaultOption.text = "Select Position";
    defaultOption.value = "";
    defaultOption.disabled = true;
    defaultOption.selected = true;

    // Append default option to positionSelect
    positionSelect.appendChild(defaultOption);

    // Add options based on selected organization
    if (selectedOrganization === "SSC") {
        // Add options for organization A
        var option1 = document.createElement("option");
        option1.text = "PRESIDENT";
        option1.value = option1.text;

        var option2 = document.createElement("option");
        option2.text = "VICE-PRESIDENT";
        option2.value = option2.text;

        var option3 = document.createElement("option");
        option3.text = "SECRETARY";
        option3.value = option3.text;

        var option4 = document.createElement("option");
        option4.text = "TREASURER";
        option4.value = option4.text;

        var option5 = document.createElement("option");
        option5.text = "AUDITOR";
        option5.value = option5.text;

        var option6 = document.createElement("option");
        option6.text = "ACCOUNTANT";
        option6.value = option6.text;

        // Append options to positionSelect
        positionSelect.appendChild(option1);
        positionSelect.appendChild(option2);
        positionSelect.appendChild(option3);
        positionSelect.appendChild(option4);
        positionSelect.appendChild(option5);
        positionSelect.appendChild(option6);

    } else if (selectedOrganization === "SBO") {
        // Add options for organization B
        var option1 = document.createElement("option");
        option1.text = "COUNCILOR";
        option1.value = option1.text;
        
        var option2 = document.createElement("option");
        option2.text = "PRESIDENT";
        option2.value = option2.text;
        
        var option3 = document.createElement("option");
        option3.text = "VICE-PRESIDENT";
        option3.value = option3.text;
        
        var option4 = document.createElement("option");
        option4.text = "SECRETARY";
        option4.value = option4.text;
        
        var option5 = document.createElement("option");
        option5.text = "TREASURER";
        option5.value = option5.text;
        
        var option6 = document.createElement("option");
        option6.text = "AUDITOR";
        option6.value = option6.text;
        
        var option7 = document.createElement("option");
        option7.text = "ACCOUNTANT";
        option7.value = option7.text;
        
        var option8 = document.createElement("option");
        option8.text = "TREASURER";
        option8.value = option8.text;
        
        var option9 = document.createElement("option");
        option9.text = "AUDITOR";
        option9.value = option9.text;
        
        var option10 = document.createElement("option");
        option10.text = "PIO";
        option10.value = option10.text;
        
        var option11 = document.createElement("option");
        option11.text = "BUSINESS MANAGER I";
        option11.value = option11.text;
        
        var option12 = document.createElement("option");
        option12.text = "BUSINESS MANAGER II";
        option12.value = option12.text;
        
        var option13 = document.createElement("option");
        option13.text = "1ST YEAR REPRESENTATIVE";
        option13.value = option13.text;
        
        var option14 = document.createElement("option");
        option14.text = "2ND YEAR REPRESENTATIVE";
        option14.value = option14.text;
        
        var option15 = document.createElement("option");
        option15.text = "3RD YEAR REPRESENTATIVE";
        option15.value = option15.text;
        
        var option16 = document.createElement("option");
        option16.text =  "4TH YEAR REPRESENTATIVE";
        option16.value = option16.text;
        

        // Append options to positionSelect
        positionSelect.appendChild(option1);
        positionSelect.appendChild(option2);
        positionSelect.appendChild(option3);
        positionSelect.appendChild(option4);
        positionSelect.appendChild(option5);
        positionSelect.appendChild(option6);
        positionSelect.appendChild(option7);
        positionSelect.appendChild(option8);
        positionSelect.appendChild(option9);
        positionSelect.appendChild(option10);
        positionSelect.appendChild(option11);
        positionSelect.appendChild(option12);
        positionSelect.appendChild(option13);
        positionSelect.appendChild(option14);
        positionSelect.appendChild(option15);
        positionSelect.appendChild(option16);
    }
});

collegeSelect.addEventListener("change", function() {
    // Clear previous options in positionSelect
    courseSelect.innerHTML = '';

    // Get the selected organization value
    var selectedOrganization = collegeSelect.value;

    // Create default option for positionSelect
    var defaultOption = document.createElement("option");
    defaultOption.text = "Select College";
    defaultOption.value = "";
    defaultOption.disabled = true;
    defaultOption.selected = true;

    // Append default option to positionSelect
    courseSelect.appendChild(defaultOption);

    // Add options based on selected organization
    if (selectedOrganization === "CBM") {
        // Add options for organization A
        var option1 = document.createElement("option");
        option1.text = "SSC PRESIDENT";
        option1.value = "A";

        var option2 = document.createElement("option");
        option2.text = "SSC VICE-PRESIDENT";
        option2.value = "B";

        var option3 = document.createElement("option");
        option3.text = "SSC SECRETARY";
        option3.value = "C";

        var option4 = document.createElement("option");
        option4.text = "SSC TREASURER";
        option4.value = "D";

        var option5 = document.createElement("option");
        option5.text = "SSC AUDITOR";
        option5.value = "E";

        var option6 = document.createElement("option");
        option6.text = "SSC ACCOUNTANT";
        option6.value = "F";

        // Append options to positionSelect
        positionSelect.appendChild(option1);
        positionSelect.appendChild(option2);
        positionSelect.appendChild(option3);
        positionSelect.appendChild(option4);
        positionSelect.appendChild(option5);
        positionSelect.appendChild(option6);

    } else if (selectedOrganization === "CED") {
        // Add options for organization B
        var option1 = document.createElement("option");
        option1.text = "SBO COUNCILOR";
        option1.value = "A";

        var option2 = document.createElement("option");
        option2.text = "SBO PRESIDENT";
        option2.value = "B";

        var option3 = document.createElement("option");
        option3.text = "SBO VICE-PRESIDENT";
        option3.value = "C";

        var option4 = document.createElement("option");
        option4.text = "SBO SECRETARY";
        option4.value = "D";

        var option5 = document.createElement("option");
        option5.text = "SBO TREASURER";
        option5.value = "E";

        var option6 = document.createElement("option");
        option6.text = "SBO AUDITOR";
        option6.value = "F";

        var option7 = document.createElement("option");
        option7.text = "SBO ACCOUNTANT";
        option7.value = "G";

        var option8 = document.createElement("option");
        option8.text = "SBO TREASURER";
        option8.value = "H";

        var option9 = document.createElement("option");
        option9.text = "SBO AUDITOR";
        option9.value = "I";

        var option10 = document.createElement("option");
        option10.text = "SBO PIO";
        option10.value = "J";

        var option11 = document.createElement("option");
        option11.text = "SBO BUSINESS MANAGER I";
        option11.value = "K";

        var option12 = document.createElement("option");
        option12.text = "SBO BUSINESS MANAGER II";
        option12.value = "L";

        var option13 = document.createElement("option");
        option13.text = "SBO 1ST YEAR REPRESENTATIVE";
        option13.value = "M";

        var option14 = document.createElement("option");
        option14.text = "SBO 2ND YEAR REPRESENTATIVE";
        option14.value = "N";

        var option15 = document.createElement("option");
        option15.text = "SBO 3RD YEAR REPRESENTATIVE";
        option15.value = "O";

        var option16 = document.createElement("option");
        option16.text = "SBO 4TH YEAR REPRESENTATIVE";
        option16.value = "P";
        

        // Append options to positionSelect
        positionSelect.appendChild(option1);
        positionSelect.appendChild(option2);
        positionSelect.appendChild(option3);
        positionSelect.appendChild(option4);
        positionSelect.appendChild(option5);
        positionSelect.appendChild(option6);
        positionSelect.appendChild(option7);
        positionSelect.appendChild(option8);
        positionSelect.appendChild(option9);
        positionSelect.appendChild(option10);
        positionSelect.appendChild(option11);
        positionSelect.appendChild(option12);
        positionSelect.appendChild(option13);
        positionSelect.appendChild(option14);
        positionSelect.appendChild(option15);
        positionSelect.appendChild(option16);
    } else if (selectedOrganization === "CCJE") {
        // Add options for organization B
        var option1 = document.createElement("option");
        option1.text = "SBO COUNCILOR";
        option1.value = "A";

        var option2 = document.createElement("option");
        option2.text = "SBO PRESIDENT";
        option2.value = "B";

        var option3 = document.createElement("option");
        option3.text = "SBO VICE-PRESIDENT";
        option3.value = "C";

        var option4 = document.createElement("option");
        option4.text = "SBO SECRETARY";
        option4.value = "D";

        var option5 = document.createElement("option");
        option5.text = "SBO TREASURER";
        option5.value = "E";

        var option6 = document.createElement("option");
        option6.text = "SBO AUDITOR";
        option6.value = "F";

        var option7 = document.createElement("option");
        option7.text = "SBO ACCOUNTANT";
        option7.value = "G";

        var option8 = document.createElement("option");
        option8.text = "SBO TREASURER";
        option8.value = "H";

        var option9 = document.createElement("option");
        option9.text = "SBO AUDITOR";
        option9.value = "I";

        var option10 = document.createElement("option");
        option10.text = "SBO PIO";
        option10.value = "J";

        var option11 = document.createElement("option");
        option11.text = "SBO BUSINESS MANAGER I";
        option11.value = "K";

        var option12 = document.createElement("option");
        option12.text = "SBO BUSINESS MANAGER II";
        option12.value = "L";

        var option13 = document.createElement("option");
        option13.text = "SBO 1ST YEAR REPRESENTATIVE";
        option13.value = "M";

        var option14 = document.createElement("option");
        option14.text = "SBO 2ND YEAR REPRESENTATIVE";
        option14.value = "N";

        var option15 = document.createElement("option");
        option15.text = "SBO 3RD YEAR REPRESENTATIVE";
        option15.value = "O";

        var option16 = document.createElement("option");
        option16.text = "SBO 4TH YEAR REPRESENTATIVE";
        option16.value = "P";
        

        // Append options to positionSelect
        positionSelect.appendChild(option1);
        positionSelect.appendChild(option2);
        positionSelect.appendChild(option3);
        positionSelect.appendChild(option4);
        positionSelect.appendChild(option5);
        positionSelect.appendChild(option6);
        positionSelect.appendChild(option7);
        positionSelect.appendChild(option8);
        positionSelect.appendChild(option9);
        positionSelect.appendChild(option10);
        positionSelect.appendChild(option11);
        positionSelect.appendChild(option12);
        positionSelect.appendChild(option13);
        positionSelect.appendChild(option14);
        positionSelect.appendChild(option15);
        positionSelect.appendChild(option16);
    } else if (selectedOrganization === "CCSICT") {
        // Add options for organization B
        var option1 = document.createElement("option");
        option1.text = "BSCS";
        option1.value = option1.text;

        var option2 = document.createElement("option");
        option2.text = "BSEMC";
        option2.value = option2.text;

        var option3 = document.createElement("option");
        option3.text = "BSIT";
        option3.value = option3.text;

        // Append options to positionSelect
        courseSelect.appendChild(option1);
        courseSelect.appendChild(option2);
        courseSelect.appendChild(option3);
    }
});


//itong part naman is para sa image or profile ni candidate
inputfile.addEventListener("change", uploadImage);

function uploadImage(){
    let imgLink = URL.createObjectURL(inputfile.files[0]);
    imageview.style.backgroundImage = `url(${imgLink})`;
    imageview.textContent = "";
    imageview.style.border = 0;
}

//then nag add rin tayo ng drag n drop function
dropArea.addEventListener("dragover", function(e){
    e.preventDefault();
});

dropArea.addEventListener("drop", function(e){
    e.preventDefault();
    inputfile.files = e.dataTransfer.files;
    uploadImage();
});
