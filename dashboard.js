let ccsictimg = 'Pictures/cct.png';
let cedimg = 'Pictures/ced.png';
let sasimg = 'Pictures/sas.png';
let agriimg = 'Pictures/agri.png';
let ccjeimg = 'Pictures/Crim.png';
let cbmimg = 'Pictures/cbm.png';
let psimg = 'Pictures/polytechnic.png';

//ssc placard container
const president = document.getElementById("president");
const vicepresident = document.getElementById("vicepresident");
const secretary = document.getElementById("secretary");
const treasurer = document.getElementById("treasurer");
const auditor = document.getElementById("auditor");
const accountant = document.getElementById("accountant");
const councilor = document.getElementById("councilor");

//sbo placard container
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

//ssc slides
const presslide = document.getElementById("presidentslide");
const viceslide = document.getElementById("vicepresidentslide");
const secretaryslide = document.getElementById("secretaryslide");
const treasurerslide = document.getElementById("treasurerslide");
const auditorslide = document.getElementById("auditorslide");
const accountantslide = document.getElementById("accountantslide");
const councislide = document.getElementById("councilorslide");

//sbo slides
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


function Dynamicallycreateelement(){

    //dito na starting ng dynamic elements
    for(let i = 0; i < OfficerstoVote.length; i++){
        let addsscOfficers = document.createElement('div');
        let lowposition = OfficerstoVote[i].position.toLowerCase() + "-placard"; 
        addsscOfficers.classList.add(lowposition);
        console.log(OfficerstoVote[i]);

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
        votetext.textContent = OfficerstoVote[i].NoofVotes;
        votetext.style.fontFamily = 'sans-serif';

        let votecontainer = document.createElement('div');
        votecontainer.classList.add('votecontainer');
        //itong mga nasa baba ibig sabihin naman neto is nilalagay natin sa loob ng element kung ano yung nasa parenthesis
        votecontainer.appendChild(votetext);

        textcontainer.appendChild(officername);
        textcontainer.appendChild(officercourse)
        textcontainer.appendChild(officerquote);
        textcontainer.appendChild(votecontainer);
        textcontainer.appendChild(officerid);

        addsscOfficers.appendChild(imgofficer);
        addsscOfficers.appendChild(imgofficercollege);
        addsscOfficers.appendChild(textcontainer);

        console.log(addsscOfficers);


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
    }
}

//lalo nato
Dynamicallycreateelement();