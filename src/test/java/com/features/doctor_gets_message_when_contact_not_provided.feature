@BlankNumberPatientSearch
Feature: Doctor gets message when contact not provided

Scenario Outline: Doctor gets message when contact not provided
    Given my application is open
    Then I see <Login> text
		Then I click switchRole button
		Then I enter <email> in the LoginPage Email field
		Then I enter <password> in the LoginPage Password field
		Then I press the Login Page Login button
		Then I see <PatientHistory> label
		Then I click on Search Button
		Then I check the <toastMessage>

		Examples:
	| Login |          email  				  | password | 		 PatientHistory     | query | 		toastMessage     | 
	| Login |shreyas.patil91@gmail.com  |   abcd   | Search Patient History |       | Please Enter Contact |