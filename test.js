let ccsictimg = 'Pictures/cct.png';
let cedimg = 'Pictures/ced.png';
let sasimg = 'Pictures/sas.png';
let agriimg = 'Pictures/agri.png';
let ccjeimg = 'Pictures/Crim.png';
let cbmimg = 'Pictures/cbm.png';
let psimg = 'Pictures/polytechnic.png';
const UsersVote = [];

//ssc
const president = document.getElementById("president");
const vicepresident = document.getElementById("vicepresident");
const secretary = document.getElementById("secretary");
const treasurer = document.getElementById("treasurer");
const auditor = document.getElementById("auditor");
const accountant = document.getElementById("accountant");
const councilor = document.getElementById("councilor");
//sbo
const sbopresident = document.getElementById("sbopresident");
const sbovicepresident = document.getElementById("sbovicepresident");
const sbosecretary = document.getElementById("sbosecretary");
const sbotreasurer = document.getElementById("sbotreasurer");
const sboauditor = document.getElementById("sboauditor");
const sboaccountant = document.getElementById("sboaccountant");
const sbopio = document.getElementById("sbopio");
const sbobusinessmanager1 = document.getElementById("sbobusinessmanageri");
const sbobusinessmanager2 = document.getElementById("sbobusinessmanagerii");
const sbofirstyearrep = document.getElementById("sbofirstyearrep");
const sbosecondyearrep = document.getElementById("sbosecondyearrep");;
const sbothirdyearrep = document.getElementById("sbothirdyearrep");
const sbofourthyearrep = document.getElementById("sbofourthyearrep")

const submitbt = document.getElementById("submitbtn");
//ssc
const presslide = document.getElementById("presidentslide");
const viceslide = document.getElementById("vicepresidentslide");
const secretaryslide = document.getElementById("secretaryslide");
const treasurerslide = document.getElementById("treasurerslide");
const auditorslide = document.getElementById("auditorslide");
const accountantslide = document.getElementById("accountantslide");
const councislide = document.getElementById("councilorslide");

//sbo
const sbopresidentslide = document.getElementById("sbopresidentslide");
const sbovicepresidentslide = document.getElementById("sbovicepresidentslide");
const sbosecretaryslide = document.getElementById("sbosecretaryslide");
const sbotreasurerslide = document.getElementById("sbotreasurerslide");
const sboauditorslide = document.getElementById("sboauditorslide");
const sboaccountantslide = document.getElementById("sboaccountantslide");
const sbopioslide = document.getElementById("sbopioslide");
const sbobusinessmanagerslide1 = document.getElementById("sbobusinessmanagerslide1");
const sbobusinessmanagerslide2 = document.getElementById("sbobusinessmanagerslide2");
const sbofirstyearrepslide = document.getElementById("sbofirstyearrepslide");
const sbosecondyearrepslide = document.getElementById("sbosecondyearrepslide");
const sbothirdyearrepslide = document.getElementById("sbothirdyearrepslide");
const sbofourthyearrepslide = document.getElementById("sbofourthyearrepslide");

//ssc
const presidentOfficers = [];
const vicePresidentOfficers = [];
const secretaryOfficers = [];
const treasurerOfficers = [];
const accountantOfficers = [];
const auditorOfficers = [];
const councilorOfficers = [];

//sbo
const sbopresidentOfficers = [];
const sbovicePresidentOfficers = [];
const sbosecretaryOfficers = [];
const sbotreasurerOfficers = [];
const sboaccountantOfficers = [];
const sboauditorOfficers = [];
const sbopioOfficers = [];
const sbobusinessManager1Officers = [];
const sbobusinessManager2Officers = [];
const sbo1stYearRepOfficers = [];
const sbo2ndYearRepOfficers = [];
const sbo3rdYearRepOfficers = [];
const sbo4thYearRepOfficers = [];


function Dynamicallycreateelement(){

    //dito na starting ng dynamic elements
    for(let i = 0; i < OfficerstoVote.length; i++){
        let addsscOfficers = document.createElement('div');
        let lowposition = OfficerstoVote[i].position.toLowerCase() + "-placard"; 
        addsscOfficers.classList.add(lowposition);

        //etong text container as div kasi need natin ilagay dito yung names, quotes as well as yung vote icon
        let textcontainer = document.createElement('div');
        textcontainer.classList.add('textcontainer');
        textcontainer.style.textAlign = 'left';
        
        let officername = document.createElement('p')
        officername.classList.add('officername')
        officername.textContent = OfficerstoVote[i].name;

        let officercourse = document.createElement('p');
        officercourse.classList.add('officercourse');
        officercourse.textContent = OfficerstoVote[i].course;

        let officerid = document.createElement('p');
        officerid.setAttribute('type', 'text');
        officerid.setAttribute('name', 'dynamicName');
        officerid.classList.add('officerid');
        officerid.textContent = OfficerstoVote[i].studentid;

        let officerquote = document.createElement('p');
        officerquote.classList.add('officerquote');
        officerquote.textContent = OfficerstoVote[i].quotes;

        let imgofficercollege = document.createElement('img');
        imgofficercollege.classList.add('imgofficercollege');
        imgofficercollege.src = ccsictimg;

        let imgofficer = document.createElement('img');
        imgofficer.classList.add('imgofficer');
        imgofficer.src = "CandidateProfile/" + OfficerstoVote[i].profile;
        console.log("Candidate/" + OfficerstoVote[i].profile);


        switch (OfficerstoVote[i].college) {
            case 'CCSICT':
                imgofficercollege.src = ccsictimg;
                officername.style.color = "maroon";
                break;
            case 'CED':
                imgofficercollege.src = cedimg;
                officername.style.color = "blue";
                break;
            case 'SAS':
                imgofficercollege.src = sasimg;
                officername.style.color = "darkviolet";
                break;
            case 'IAT':
                imgofficercollege.src = agriimg;
                officername.style.color = "darkgreen";
                break;
            case 'CCJE':
                imgofficercollege.src = ccjeimg;
                officername.style.color = "darkblue";
                break;
            case 'PS':
                imgofficercollege.src = psimg;
                officername.style.color = "darkgrey";
                break;
            case 'CBM':
                imgofficercollege.src = cbmimg;
                officername.style.color = "gold";
                break;
            default:
                // Handle cases where OfficerstoVote[i].college doesn't match any case
                break;
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


        switch (OfficerstoVote[i].position.toLowerCase()) {
            case 'president':
                president.appendChild(addsscOfficers);
                break;
            case 'vice-president':
                vicepresident.appendChild(addsscOfficers);
                break;
            case 'secretary':
                secretary.appendChild(addsscOfficers);
                break;
            case 'treasurer':
                treasurer.appendChild(addsscOfficers);
                break;
            case 'accountant':
                accountant.appendChild(addsscOfficers);
                break;
            case 'sbocouncilor':
                councilor.appendChild(addsscOfficers);
                break;
            case 'auditor':
                auditor.appendChild(addsscOfficers);
                break;
            case 'sbopresident':
                sbopresident.appendChild(addsscOfficers);
                break;
            case 'sbovice-president':
                sbovicepresident.appendChild(addsscOfficers);
                break;
            case 'sbosecretary':
                sbosecretary.appendChild(addsscOfficers);
                break;
            case 'sbotreasurer':
                sbotreasurer.appendChild(addsscOfficers);
                break;
            case 'sboaccountant':
                sboaccountant.appendChild(addsscOfficers);
                break;
            case 'sboauditor':
                sboauditor.appendChild(addsscOfficers);
                break;
            case 'sbopio':
                sbopio.appendChild(addsscOfficers);
                break;
            case 'sbobusinessmanageri':
                sbobusinessmanager1.appendChild(addsscOfficers);
                break;
            case 'sbobusinessmanagerii':
                sbobusinessmanager2.appendChild(addsscOfficers);
                break;
            case 'sbo1styearrepresentative':
                sbofirstyearrep.appendChild(addsscOfficers);
                break;
            case 'sbo2ndyearrepresentative':
                sbosecondyearrep.appendChild(addsscOfficers);
                break;
            case 'sbo3rdyearrepresentative':
                sbothirdyearrep.appendChild(addsscOfficers);
                break;
            case 'sbo4thyearrepresentative':
                sbofourthyearrep.appendChild(addsscOfficers);
                break;
            default:
                // Handle default case if needed
                break;
        }
        
        presslide.appendChild(president);
        viceslide.appendChild(vicepresident);
        secretaryslide.appendChild(secretary);
        treasurerslide.appendChild(treasurer);
        auditorslide.appendChild(auditor);
        accountantslide.appendChild(accountant);
        councislide.appendChild(councilor);

        sbopresidentslide.appendChild(sbopresident);
        sbovicepresidentslide.appendChild(sbovicepresident);
        sbosecretaryslide.appendChild(sbosecretary);
        sbotreasurerslide.appendChild(sbotreasurer);
        sboauditorslide.appendChild(sboauditor);
        sboaccountantslide.appendChild(sboaccountant);
        sbopioslide.appendChild(sbopio);
        sbobusinessmanagerslide1.appendChild(sbobusinessmanager1);
        sbobusinessmanagerslide2.appendChild(sbobusinessmanager2);
        sbofirstyearrepslide.appendChild(sbofirstyearrep);
        sbosecondyearrepslide.appendChild(sbosecondyearrep);
        sbothirdyearrepslide.appendChild(sbothirdyearrep);
        sbofourthyearrepslide.appendChild(sbofourthyearrep);

        
                //ilalagay natin sa perfective positions yung mga candidates, hindi kasi pwedeng nasa president category
        //si treasurer and the rest of the positions, actually maganda to kapag loop
        var Positions = ['president', 'vice-president', 'secretary', 'treasurer', 'auditor', 'accountant', 
        'sbocouncilor', 'sbopresident','sbovice-president', 'sbosecretary', 'sbotreasurer', 'sboauditor', 'sboaccountant','sbopio', 'sbobusinessmanageri', 'sbobusinessmanagerii', 'sbo1styearrepresentative', 
        'sbo2ndyearrepresentative', 'sbo3rdyearrepresentative', 'sbo4thyearrepresentative'];

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
                                
                                let Studentid = officer.querySelector('.officerid').textContent.trim();
                                let selectedOfficer = OfficerstoVote.find(officer => officer.studentid === Studentid);
                                if (selectedOfficer) {
                                    console.log('Selected Officer Position:', selectedOfficer.position);

                                    switch (selectedOfficer.position.toLowerCase()) {
                                        case 'president':
                                            presidentOfficers.push(Studentid);
                                            break;
                                        case 'vice-president':
                                            vicePresidentOfficers.push(Studentid);
                                            break;
                                        case 'secretary':
                                            secretaryOfficers.push(Studentid);
                                            break;
                                        case 'treasurer':
                                            treasurerOfficers.push(Studentid);
                                            break;
                                        case 'auditor':
                                            auditorOfficers.push(Studentid);
                                            break;
                                        case 'accountant':
                                            accountantOfficers.push(Studentid);
                                            break;
                                        case 'councilor':
                                            councilorOfficers.push(Studentid);
                                            break;
                                        case 'sbopresident':
                                            sbopresidentOfficers.push(Studentid);
                                            break;
                                        case 'sbovice-president':
                                            sbovicePresidentOfficers.push(Studentid);
                                            break;
                                        case 'sbosecretary':
                                            sbosecretaryOfficers.push(Studentid);
                                            break;
                                        case 'sbotreasurer':
                                            sbotreasurerOfficers.push(Studentid);
                                            break;
                                        case 'sboaccountant':
                                            sboaccountantOfficers.push(Studentid);
                                            break;
                                        case 'sboauditor':
                                            sboauditorOfficers.push(Studentid);
                                            break;
                                        case 'sbopio':
                                            sbopioOfficers.push(Studentid);
                                            break;
                                        case 'sbobusinessmanageri':
                                            sbobusinessManager1Officers.push(Studentid);
                                            break;
                                        case 'sbobusinessmanagerii':
                                            sbobusinessManager2Officers.push(Studentid);
                                            break;
                                        case 'sbo1styearrepresentative':
                                            sbo1stYearRepOfficers.push(Studentid);
                                            break;
                                        case 'sbo2ndyearrepresentative':
                                            sbo2ndYearRepOfficers.push(Studentid);
                                            break;
                                        case 'sbo3rdyearrepresentative':
                                            sbo3rdYearRepOfficers.push(Studentid);
                                            break;
                                        case 'sbo4thyearrepresentative':
                                            sbo4thYearRepOfficers.push(Studentid);
                                            break;
                                        
                                        default:
                                            // Handle default case
                                            break;
                                    }

                                } else {
                                    console.log('Officer not found in OfficerstoVote:', Studentid);
                                }

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

        let preslast = presidentOfficers[presidentOfficers.length - 1];
        let vicelast = vicePresidentOfficers[vicePresidentOfficers.length - 1];
        let seclast = secretaryOfficers[secretaryOfficers.length - 1];
        let trelast = treasurerOfficers[treasurerOfficers.length - 1];
        let auditlast = auditorOfficers[auditorOfficers.length - 1];
        let acclast = accountantOfficers[accountantOfficers.length - 1];
        let counci = councilorOfficers[councilorOfficers.length - 1];
        let sbopres = sbopresidentOfficers[sbopresidentOfficers.length - 1];
        let sbovice = sbovicePresidentOfficers[sbovicePresidentOfficers.length - 1];
        let sbosec = sbosecretaryOfficers[sbosecretaryOfficers.length - 1];
        let sbotres = sbotreasurerOfficers[sbotreasurerOfficers.length - 1];
        let sboaudit = sboauditorOfficers[sboauditorOfficers.length - 1];
        let sboacc = sboaccountantOfficers[sboaccountantOfficers.length - 1];
        let sbopi = sbopio[sbopio.length - 1];
        let sbobusiness1 = sbobusinessManager1Officers[sbobusinessManager1Officers.length - 1];
        let sbobusiness2 = sbobusinessManager2Officers[sbobusinessManager2Officers.length - 1];
        let sborep1 = sbo1stYearRepOfficers[sbo1stYearRepOfficers.length - 1];
        let sborep2 = sbo2ndYearRepOfficers[sbo2ndYearRepOfficers.length - 1];
        let sborep3 = sbo3rdYearRepOfficers[sbo3rdYearRepOfficers.length - 1];
        let sborep4 = sbo4thYearRepOfficers[sbo4thYearRepOfficers.length - 1];


        UsersVote.push(preslast);
        UsersVote.push(vicelast);
        UsersVote.push(seclast);
        UsersVote.push(trelast);
        UsersVote.push(auditlast);
        UsersVote.push(acclast);
        UsersVote.push(counci);
        UsersVote.push(sbopres);
        UsersVote.push(sbovice);
        UsersVote.push(sbosec);
        UsersVote.push(sbotres);
        UsersVote.push(sboaudit);
        UsersVote.push(sboacc);
        UsersVote.push(sbopi);
        UsersVote.push(sbobusiness1);
        UsersVote.push(sbobusiness2);
        UsersVote.push(sborep1);
        UsersVote.push(sborep2);
        UsersVote.push(sborep3);
        UsersVote.push(sborep4);


        let hasUndefinedOrNullOrEmpty = UsersVote.some(value => value == "undefined" || value == null || value == "");

        if (hasUndefinedOrNullOrEmpty){
            alert("Please Vote From All Category");

        } else {
            console.log(UsersVote);
            
            let formData = new FormData();
            UsersVote.forEach((value, index) => {
                formData.append('strings[]', value); // 'strings[]' ensures PHP treats it as an array
            });
            formData.append('logincode', loginCode);

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

            alert("Thanks for voting, your participation is highly appreciated");
            window.location.href = "VotingSubmitQuery.php";

        }
    });
}

//lalo nato
Dynamicallycreateelement();