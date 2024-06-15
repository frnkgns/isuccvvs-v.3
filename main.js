let ccsictimg = 'Pictures/cct.png';
let cedimg = 'Pictures/ced.png';
let sasimg = 'Pictures/sas.png';
let agriimg = 'Pictures/agri.png';
let ccjeimg = 'Pictures/Crim.png';
let cbmimg = 'Pictures/cbm.png';
let psimg = 'Pictures/polytechnic.png';

function Dynamicallycreateelement(){

    //so this is actually an array objects parang mag sstore lang tayo ng maraming varaible sa array
    const sscOfficers1 = [
        {position: "president", name:'Frank Ellis A. Gines', collegeimg: 'Pictures/cct.png' ,course: 'BSCS - 3A DM',collegecolor: 'RED',image: 'Pictures/male hap badi.png', quotes: "Life is like riding a bicycle."}, 
        {position: "president", name:'Don Don Comia', collegeimg: 'Pictures/ced.png', course: 'CED - 3A DM', collegecolor: 'blue', image: 'Pictures/male hap badi.png', quotes: "Life is like riding a bicycle. To keep your balance, you must keep moving." },
        {position: "president", name:'Jusip Orinio', collegeimg: 'Pictures/ced.png', course: 'BAELS - 3A DM', collegecolor: 'darkviolet', image: 'Pictures/male hap badi.png', quotes: "Life is like riding a bicycle. To keep your balance, you must keep moving." },
        {position: "president", name: 'Junny Lester Paguia', collegeimg: 'Pictures/agri.png', course: 'IAT - 3A DM', collegecolor: 'green', image: 'Pictures/male hap badi.png', quotes: "Life is like riding a bicycle. To keep your balance, you must keep moving." },
        {position: "president", name: 'Michael A. Johnson', collegeimg: 'Pictures/agri.png', course: 'IAT - 3A DM', collegecolor: 'green', image: 'Pictures/male hap badi.png', quotes: "Success is not final, failure is not fatal: It is the courage to continue that counts." },
        {position: "president", name: 'Christopher M. Smith', collegeimg: 'Pictures/agri.png', course: 'IAT - 3A DM', collegecolor: 'green', image: 'Pictures/male hap badi.png', quotes: "Believe you can and you're halfway there." },
        {position: "president", name: 'Andrew W. Williams', collegeimg: 'Pictures/agri.png', course: 'IAT - 3A DM', collegecolor: 'green', image: 'Pictures/male hap badi.png', quotes: "The only limit to our realization of tomorrow will be our doubts of today." },
        {position: "president", name: 'David J. Brown', collegeimg: 'Pictures/agri.png', course: 'IAT - 3A DM', collegecolor: 'green', image: 'Pictures/male hap badi.png', quotes: "You are never too old to set another goal or to dream a new dream." },
        {position: "president", name: 'Robert E. Miller', collegeimg: 'Pictures/agri.png', course: 'IAT - 3A DM', collegecolor: 'green', image: 'Pictures/male hap badi.png', quotes: "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful." },
        {position: "president", name: 'Daniel P. Wilson', collegeimg: 'Pictures/agri.png', course: 'IAT - 3A DM', collegecolor: 'green', image: 'Pictures/male hap badi.png', quotes: "The future belongs to those who believe in the beauty of their dreams." },
        {position: "president", name: 'James L. Martinez', collegeimg: 'Pictures/agri.png', course: 'IAT - 3A DM', collegecolor: 'green', image: 'Pictures/male hap badi.png', quotes: "It does not matter how slowly you go as long as you do not stop." },
        {position: "president", name: 'Richard S. Taylor', collegeimg: 'Pictures/agri.png', course: 'IAT - 3A DM', collegecolor: 'green', image: 'Pictures/male hap badi.png', quotes: "In the middle of difficulty lies opportunity." },
        {position: "president", name:'Franklin G. Garcia', collegeimg: 'Pictures/cct.png' ,course: 'BSCS - 3A DM',collegecolor: 'RED',image: 'Pictures/male hap badi.png', quotes: "Your time is limited, don't waste it living someone else's life."}, 
        {position: "president", name:'Donald T. Thompson', collegeimg: 'Pictures/ced.png', course: 'CED - 3A DM', collegecolor: 'blue', image: 'Pictures/male hap badi.png', quotes: "The only way to do great work is to love what you do." },
    ]
    const iatOfficers = [
        {position: "iat_president", name: "Edith Leonidas", collegeimg: 'Pictures/agri.png', course: "BAT - 4", collegecolor: 'green', image: 'Pictures/male hap badi.png', quotes:"You will face many defeats in life, but never let yourself be defeated."},
        {position: "iat_president", name: "Edith Leonidas", collegeimg: 'Pictures/agri.png', course: "BAT - 3", collegecolor: 'green', image: 'Pictures/male hap badi.png', quotes:"You will face many defeats in life, but never let yourself be defeated."},
        {position: "iat_president", name: "Edith Leonidas", collegeimg: 'Pictures/agri.png', course: "BAT - 2", collegecolor: 'green', image: 'Pictures/male hap badi.png', quotes:"You will face many defeats in life, but never let yourself be defeated."},

        {position: "iat_vice_president", name: "Edith Leonidas", collegeimg: 'Pictures/agri.png', course: "BAT - 4", collegecolor: 'green', image: 'Pictures/male hap badi.png', quotes:"You will face many defeats in life, but never let yourself be defeated."},
        {position: "iat_vice_president", name: "Edith Leonidas", collegeimg: 'Pictures/agri.png', course: "BAT - 3", collegecolor: 'green', image: 'Pictures/male hap badi.png', quotes:"You will face many defeats in life, but never let yourself be defeated."},
        {position: "iat_vice_president", name: "Edith Leonidas", collegeimg: 'Pictures/agri.png', course: "BAT - 2", collegecolor: 'green', image: 'Pictures/male hap badi.png', quotes:"You will face many defeats in life, but never let yourself be defeated."},
    
        {position: "iat_secretatry", name: "Edith Leonidas", collegeimg: 'Pictures/agri.png', course: "BAT - 4", collegecolor: 'green', image: 'Pictures/male hap badi.png', quotes:"You will face many defeats in life, but never let yourself be defeated."},
        {position: "iat_secretatry", name: "Edith Leonidas", collegeimg: 'Pictures/agri.png', course: "BAT - 3", collegecolor: 'green', image: 'Pictures/male hap badi.png', quotes:"You will face many defeats in life, but never let yourself be defeated."},
        {position: "iat_secretatry", name: "Edith Leonidas", collegeimg: 'Pictures/agri.png', course: "BAT - 2", collegecolor: 'green', image: 'Pictures/male hap badi.png', quotes:"You will face many defeats in life, but never let yourself be defeated."},

        {position: "iat_treasurer", name: "Edith Leonidas", collegeimg: 'Pictures/agri.png', course: "BAT - 4", collegecolor: 'green', image: 'Pictures/male hap badi.png', quotes:"You will face many defeats in life, but never let yourself be defeated."},
        {position: "iat_treasurer", name: "Edith Leonidas", collegeimg: 'Pictures/agri.png', course: "BAT - 3", collegecolor: 'green', image: 'Pictures/male hap badi.png', quotes:"You will face many defeats in life, but never let yourself be defeated."},
        {position: "iat_treasurer", name: "Edith Leonidas", collegeimg: 'Pictures/agri.png', course: "BAT - 2", collegecolor: 'green', image: 'Pictures/male hap badi.png', quotes:"You will face many defeats in life, but never let yourself be defeated."},
        
        {position: "iat_auditor", name: "Edith Leonidas", collegeimg: 'Pictures/agri.png', course: "BAT - 4", collegecolor: 'green', image: 'Pictures/male hap badi.png', quotes:"You will face many defeats in life, but never let yourself be defeated."},
        {position: "iat_auditor", name: "Edith Leonidas", collegeimg: 'Pictures/agri.png', course: "BAT - 3", collegecolor: 'green', image: 'Pictures/male hap badi.png', quotes:"You will face many defeats in life, but never let yourself be defeated."},
        {position: "iat_auditor", name: "Edith Leonidas", collegeimg: 'Pictures/agri.png', course: "BAT - 2", collegecolor: 'green', image: 'Pictures/male hap badi.png', quotes:"You will face many defeats in life, but never let yourself be defeated."},
        
        {position: "iat_accountant", name: "Edith Leonidas", collegeimg: 'Pictures/agri.png', course: "BAT - 4", collegecolor: 'green', image: 'Pictures/male hap badi.png', quotes:"You will face many defeats in life, but never let yourself be defeated."},
        {position: "iat_accountant", name: "Edith Leonidas", collegeimg: 'Pictures/agri.png', course: "BAT - 3", collegecolor: 'green', image: 'Pictures/male hap badi.png', quotes:"You will face many defeats in life, but never let yourself be defeated."},
        {position: "iat_accountant", name: "Edith Leonidas", collegeimg: 'Pictures/agri.png', course: "BAT - 2", collegecolor: 'green', image: 'Pictures/male hap badi.png', quotes:"You will face many defeats in life, but never let yourself be defeated."},
        
        {position: "iat_4th_year_rep", name: "Edith Leonidas", collegeimg: 'Pictures/agri.png', course: "BAT - 4", collegecolor: 'green', image: 'Pictures/male hap badi.png', quotes:"You will face many defeats in life, but never let yourself be defeated."},
        {position: "iat_4th_year_rep", name: "Edith Leonidas", collegeimg: 'Pictures/agri.png', course: "BAT - 4", collegecolor: 'green', image: 'Pictures/male hap badi.png', quotes:"You will face many defeats in life, but never let yourself be defeated."},
        {position: "iat_4th_year_rep", name: "Edith Leonidas", collegeimg: 'Pictures/agri.png', course: "BAT - 4", collegecolor: 'green', image: 'Pictures/male hap badi.png', quotes:"You will face many defeats in life, but never let yourself be defeated."},
        
        {position: "iat_3rd_year_rep", name: "Edith Leonidas", collegeimg: 'Pictures/agri.png', course: "BAT - 3", collegecolor: 'green', image: 'Pictures/male hap badi.png', quotes:"You will face many defeats in life, but never let yourself be defeated."},
        {position: "iat_3rd_year_rep", name: "Edith Leonidas", collegeimg: 'Pictures/agri.png', course: "BAT - 3", collegecolor: 'green', image: 'Pictures/male hap badi.png', quotes:"You will face many defeats in life, but never let yourself be defeated."},
        {position: "iat_3rd_year_rep", name: "Edith Leonidas", collegeimg: 'Pictures/agri.png', course: "BAT - 3", collegecolor: 'green', image: 'Pictures/male hap badi.png', quotes:"You will face many defeats in life, but never let yourself be defeated."},
        
        {position: "iat_2nd_year_rep", name: "Edith Leonidas", collegeimg: 'Pictures/agri.png', course: "BAT - 2", collegecolor: 'green', image: 'Pictures/male hap badi.png', quotes:"You will face many defeats in life, but never let yourself be defeated."},
        {position: "iat_2nd_year_rep", name: "Edith Leonidas", collegeimg: 'Pictures/agri.png', course: "BAT - 2", collegecolor: 'green', image: 'Pictures/male hap badi.png', quotes:"You will face many defeats in life, but never let yourself be defeated."},
        {position: "iat_2nd_year_rep", name: "Edith Leonidas", collegeimg: 'Pictures/agri.png', course: "BAT - 2", collegecolor: 'green', image: 'Pictures/male hap badi.png', quotes:"You will face many defeats in life, but never let yourself be defeated."},
    ]

    //then of course we need to loop sa object array then sa loob narin ng loopin
    //natin iinitialized yung mga dynamically elements as well as yung mga styles nila


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
        votecontainer.classList.add('votecontainer');

        //itong mga nasa baba ibig sabihin naman neto is nilalagay natin sa loob ng element kung ano yung nasa parenthesis
        votecontainer.appendChild(votetext);
        votecontainer.appendChild(imgvote);

        textcontainer.appendChild(officername);
        textcontainer.appendChild(officercourse)
        textcontainer.appendChild(officerquote);
        textcontainer.appendChild(votecontainer)

        addsscOfficers.appendChild(imgofficer);
        addsscOfficers.appendChild(imgofficercollege);
        addsscOfficers.appendChild(textcontainer);

        

        //ilalagay natin sa perfective positions yung mga candidates, hindi kasi pwedeng nasa president category
        //si treasurer and the rest of the positions, actually maganda to kapag loop
        var Positions = ['president', 'vicepresident', 'treasurer', 'auditor','accountant', 'sas_council', 'ccsict_council', 'cbm_council', 'ced_council', 'iat_council', 'ccje_council', 'ps_council'];

        if(sscOfficers[i].position.toLowerCase() == 'president'){
            president.appendChild(addsscOfficers);

        } else if(sscOfficers[i].position == 'vicepresident'){
            vicepresident.appendChild(addsscOfficers);

        } else if(sscOfficers[i].position == 'treasurer'){
            treasurer.appendChild(addsscOfficers);

        } else if(sscOfficers[i].position == 'accountant'){
            accountant.appendChild(addsscOfficers);
            
        } else if(sscOfficers[i].position == 'auditor'){
            auditor.appendChild(addsscOfficers);
            
        }else if(sscOfficers[i].position == 'sas_council'){
            sascouncil.appendChild(addsscOfficers);
            
        } else if(sscOfficers[i].position == 'ccsict_council'){
            ccsictcouncil.appendChild(addsscOfficers);
            
        } else if(sscOfficers[i].position == 'ps_council'){
            pscouncil.appendChild(addsscOfficers);
            
        } else if(sscOfficers[i].position == 'iat_council'){
            iatcouncil.appendChild(addsscOfficers);
            
        } else if(sscOfficers[i].position == 'ccje_council'){
            ccjecouncil.appendChild(addsscOfficers);
            
        } else if(sscOfficers[i].position == 'ced_council'){
            cedcouncil.appendChild(addsscOfficers);
            
        } else if(sscOfficers[i].position == 'cbm_council'){
            cbmcouncil.appendChild(addsscOfficers);
        }

                    
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
            })
        }

        //of course hindi gagana yung function kapag hindi mo natawag, kaya need muna natin tawagin
        showvoted();
    }
}
//lalo nato
Dynamicallycreateelement();
