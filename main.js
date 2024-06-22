let ccsictimg = 'Pictures/cct.png';
let cedimg = 'Pictures/ced.png';
let sasimg = 'Pictures/sas.png';
let agriimg = 'Pictures/agri.png';
let ccjeimg = 'Pictures/Crim.png';
let cbmimg = 'Pictures/cbm.png';
let psimg = 'Pictures/polytechnic.png';

const UserVotes = []
const submitbt = document.getElementById("submitbtn");
const presslide = document.getElementById("presidentslide");
const viceslide = document.getElementById("vicepresidentslide");
const secretaryslide = document.getElementById("secretaryslide");
const treasurerslide = document.getElementById("treasurerslide");
const auditorslide = document.getElementById("auditorslide");
const accountantslide = document.getElementById("accountantslide");



function Dynamicallycreateelement(){

    //dito na starting ng dynamic elements
    for(let i = 0; i < sscOfficers.length; i++){
        let addsscOfficers = document.createElement('div');
        let lowposition = sscOfficers[i].position.toLowerCase() + "-placard"; 
        addsscOfficers.classList.add(lowposition);

        //etong text container as div kasi need natin ilagay dito yung names, quotes as well as yung vote icon
        let textcontainer = document.createElement('div');
        textcontainer.classList.add('textcontainer');
        textcontainer.style.textAlign = 'left';
        
        let officername = document.createElement('p')
        officername.classList.add('officername')
        officername.textContent = sscOfficers[i].name;

        let officercourse = document.createElement('p');
        officercourse.classList.add('officercourse');
        officercourse.textContent = sscOfficers[i].course;

        let officerid = document.createElement('p');
        officerid.setAttribute('type', 'text');
        officerid.setAttribute('name', 'dynamicName');
        officerid.classList.add('officerid');
        officerid.textContent = sscOfficers[i].studentid;

        let officerquote = document.createElement('p');
        officerquote.classList.add('officerquote');
        officerquote.textContent = sscOfficers[i].quotes;

        let imgofficercollege = document.createElement('img');
        imgofficercollege.classList.add('imgofficercollege');
        imgofficercollege.src = ccsictimg;

        let imgofficer = document.createElement('img');
        imgofficer.classList.add('imgofficer');
        imgofficer.src = "CandidateProfile/" + sscOfficers[i].profile;
        console.log("Candidate/" + sscOfficers[i].profile);


        if(sscOfficers[i].college == "CCSICT"){
            imgofficercollege.src = ccsictimg;
            officername.style.color = "maroon"
        } else if(sscOfficers[i].college == "CED"){
            imgofficercollege.src = cedimg;
            officername.style.color = "blue"

        } else if(sscOfficers[i].college == "SAS"){
            imgofficercollege.src = sasimg;
            officername.style.color = "darkviolet"

        } else if(sscOfficers[i].college == "IAT"){
            imgofficercollege.src = agriimg;
            officername.style.color = "darkgreen"

        } else if(sscOfficers[i].college == "CCJE"){
            imgofficercollege.src = ccjeimg;
            officername.style.color = "darkblue"

        } else if(sscOfficers[i].college == "PS"){
            imgofficercollege.src = psimg;
            officername.style.color = "darkgrey"

        } else if(sscOfficers[i].college == "CBM"){
            imgofficercollege.src = cbmimg;
            officername.style.color = "gold"

        }

        let votetext = document.createElement('p');
        votetext.classList.add('votetext');
        votetext.textContent = "Vote";
        votetext.style.fontFamily = 'sans-serif';

        let imgvote = document.createElement('img');
        imgvote.classList.add('imgvote');
        imgvote.src = 'Pictures/GreenCheck.png';

        //dito sa votecontainer natin ilalagay yung imagevote, tyaka textvote, para kaapg nag adjust tayo 
        //sa css container nlang gagalawin natin, 'sana'
        let votecontainer = document.createElement('div');
        votecontainer.classList.add('votescount');

        //itong mga nasa baba ibig sabihin naman neto is nilalagay natin sa loob ng element kung ano yung nasa parenthesis
        votecontainer.appendChild(votetext);
        votecontainer.appendChild(imgvote);

        textcontainer.appendChild(officername);
        textcontainer.appendChild(officercourse)
        textcontainer.appendChild(officerquote);
        textcontainer.appendChild(votecontainer);
        textcontainer.appendChild(officerid);


        addsscOfficers.appendChild(imgofficer);
        addsscOfficers.appendChild(imgofficercollege);
        addsscOfficers.appendChild(textcontainer);


        

        //ilalagay natin sa perfective positions yung mga candidates, hindi kasi pwedeng nasa president category
        //si treasurer and the rest of the positions, actually maganda to kapag loop
        var Positions = ['president', 'vice-president', 'secretary','treasurer', 'auditor','accountant', 'sas_council', 'ccsict_council', 'cbm_council', 'ced_council', 'iat_council', 'ccje_council', 'ps_council'];

        if(sscOfficers[i].position.toLowerCase() == 'president'){
            president.appendChild(addsscOfficers);

        } else if(sscOfficers[i].position.toLowerCase() == 'vice-president'){
            vicepresident.appendChild(addsscOfficers);

        } else if(sscOfficers[i].position.toLowerCase() == 'secretary'){
            secretary.appendChild(addsscOfficers);


        } else if(sscOfficers[i].position.toLowerCase() == 'treasurer'){
            treasurer.appendChild(addsscOfficers);

        } else if(sscOfficers[i].position.toLowerCase() == 'accountant'){
            accountant.appendChild(addsscOfficers);
            
        } else if(sscOfficers[i].position.toLowerCase() == 'auditor'){
            auditor.appendChild(addsscOfficers);
            
        }else if(sscOfficers[i].position.toLowerCase() == 'sas_council'){
            sascouncil.appendChild(addsscOfficers);
            
        } else if(sscOfficers[i].position.toLowerCase() == 'ccsict_council'){
            ccsictcouncil.appendChild(addsscOfficers);
            
        } else if(sscOfficers[i].position.toLowerCase() == 'ps_council'){
            pscouncil.appendChild(addsscOfficers);
            
        } else if(sscOfficers[i].position.toLowerCase() == 'iat_council'){
            iatcouncil.appendChild(addsscOfficers);
            
        } else if(sscOfficers[i].position.toLowerCase() == 'ccje_council'){
            ccjecouncil.appendChild(addsscOfficers);
            
        } else if(sscOfficers[i].position.toLowerCase() == 'ced_council'){
            cedcouncil.appendChild(addsscOfficers);
            
        } else if(sscOfficers[i].position.toLowerCase() == 'cbm_council'){
            cbmcouncil.appendChild(addsscOfficers);
        }

        presslide.appendChild(president);
        viceslide.appendChild(vicepresident);
        secretaryslide.appendChild(secretary);
        treasurerslide.appendChild(treasurer);
        auditorslide.appendChild(auditor);
        accountantslide.appendChild(accountant);

        
        //then itong function mag seserved sa lahat ng placards ng click function as well as yung hide functions nila
        function showvoted(){
            //then itong part needed para makapag loop tayo sa selection ng placards from pres-businessM
            //katamad kapag mano mano tyaka madaming code masyado

            Positions.forEach(function(Positions){
                var allplacards = document.querySelectorAll('.' + Positions + '-placard');
                //then dito na mag start yung loop 
                allplacards.forEach(function(officer, index) {
                    //maglalagay tayo ng click function sa mga placards
                    officer.addEventListener('click', function firstclick() {
                        //then kapag yung pinindot nila yung placard na yun, yung lang yung malalagyan ng effects
                        //the rest ihahide nanatin
                        allplacards.forEach(function(element, idx) {
                            if (idx == index){
                                
                                UserVotes.length = 0;
                                let Studentid = officer.querySelector('.officerid').textContent.trim();
                                UserVotes.push(Studentid);
                                console.log(UserVotes);
                                
                                officer.style.backgroundColor = '#b3ffb3';
                                var imgvote = officer.querySelector('.imgvote');
                                var votetext = officer.querySelector('.votetext');
                                imgvote.src = 'Pictures/unvote.png';
                                votetext.textContent = "Vote";
                                
                                //need muna natin iremove yung click function para makapag click tayo later on ulit sa placard
                                //lagay ulit tayo eventlistener para kapag pinindot ulit ni user yung voted placard ibabalik nya yung unvoted candidates
                                officer.removeEventListener('click', firstclick);
                                officer.addEventListener('click', unhide);
                                function unhide(){
                                    //then eto sa baba kapag ibabalik sa dati yung mga componetns ng ibang placard
                                    allplacards.forEach(function(element){
                                        element.classList.remove('hide');
                                        imgvote.classList.remove('hide');
                                        imgvote.src = 'Pictures/GreenCheck.png'
                                        votetext.classList.remove('hide');
                                        votetext.textContent = 'Vote';
                                        officer.style.backgroundColor = 'white';
                                        officer.classList.toggle('clicked');
                                    });    


                                    //then iadd ulit natin yung vote function, para makapag click tayo since niremove natin kanina
                                    officer.addEventListener('click', firstclick);
                                }
                                
                            } else {
                                element.classList.add('hide');  //tago natin yung ibang placards
                            }
                        });
                    });
                });
            });
        }

        //of course hindi gagana yung function kapag hindi mo natawag, kaya need muna natin tawagin
        showvoted();
    }

    //Dito yung mangyayari yung voting
    submitbt.addEventListener("click", function(event) {
        event.preventDefault();

        let formData = new FormData();
        UserVotes.forEach((value, index) => {
            formData.append('strings[]', value); // 'strings[]' ensures PHP treats it as an array
        });

        fetch('VotingSubmitQuery.php', {
            method: 'POST',
            body: formData
        })
        .then(response => response.text())
        .then(data => {
            console.log(data); // Response from PHP script
        })
        .catch(error => {
            console.error('Error:', error);
        });
    });
}

//lalo nato
Dynamicallycreateelement();


