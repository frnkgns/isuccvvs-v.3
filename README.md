# ISU-CC: Virtual Voting System

## Overview
The ISU-CC Virtual Voting System is designed to facilitate electronic voting for university elections. The system allows candidates to register, administrators to manage candidate information, and voters to cast their votes.

## User's Guide
### For Candidacy
1. Click the Register button.
2. Fill in the required information and upload your photo.
3. Click Submit to complete your registration.
### For Admin
1. Enter your admin code "123" (this can be changed), and press Enter on your device keyboard. You will be directed to the admin panel.
2. **Dashboard**
- Click the Dashboard button to view the Dashboard panel.
- Click a department/college to see the candidate records.
- Use the Next button to navigate through records.
- Use the Previous button to go back to the previous records.
- Click Back to return to the main panel.
- Note: Candidates are displayed in order based on their votes.
3. **Update**
- Click the Update button to update a candidate's information.
- Enter the student ID of the candidate to be updated.
- Make the necessary changes and click Submit.
- Click OK, then Back to return to the main panel.
4. **Delete**
- Click the Delete button to delete a candidate's record.
- Enter the student ID of the candidate to be deleted. The record will be deleted automatically.
- Click Back to return to the admin panel.
- Click Back to exit the admin panel.
### For Voters
1. Enter your code and press Enter on your keyboard.
2. Click on the placards of the candidate you wish to vote for.
3. Use the Next button to vote for remaining candidates for other positions. Use the Previous button to go back.
4. Click Submit to record your vote. After submitting, you will be automatically exited.

## Database
**Database name**: isucc
### Tables
#### candidates
**Attributes**
- studentid (PK)
- NoofVotes
- position
- name
- college
- course
- quotes
- profile (image)
#### logincode
**Attributes**
- code (PK)
- college
- Voted

## Languages Used
- PHP
- CSS
- JavaScript
- AJAX
- jQuery
- Bootstrap

## Software Requirements
- XAMPP
- Microsoft Visual Studio Code
