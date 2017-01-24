@DoctorRegistration
Feature: Doctor Registration & Login
Scenario Outline: As a valid user Doctor can register & login to my application
    Given my application is open
    Then I see <Login> text
    Then I click switchRole button
		Then I press the Register button
		Then I see <Registration Form> text
		Then I enter <hospitalName> in the Doctors Hospital Name field
		Then I enter <hospitalAddress> in the Doctors Hospital Address field
		Then I enter <doctorName> in the Doctors Name field
		Then I enter <SSN> in the Doctors SSN field
		Then I enter <email> in the Doctors email field
		Then I enter <password> in the Doctors Password field
		Then I enter <password> in the Doctors Conform Password field
		Then I enter <contact> in the Doctors Phone field
		Then I press the Doctor Register button
		Then I see <Login> text
		Then I check gmail account confirmation mail
		Then I click switchRole button
		Then I enter <email> in the LoginPage Email field
		Then I enter <password> in the LoginPage Password field
		Then I press the Login Page Login button
		#Then I see <firstName> as firstname on Patient Registration Page
		#Then I see <lastName> as lastname on Patient Registration Page
		#Then I see <SSN> as SSN on Patient Registration Page
		#Then I see <email> as email on Patient Registration Page
		#Then I see <contact> as contact on Patient Registration Page
		#Then I see <emergencyContact> as emergency contact on Patient Registration Page
		#Then I see <password> as password on Patient Registration Page
		#Then I press the Logout button
		#Then I see <Login> text
Examples:
	| Login | Registration Form |hospitalName | hospitalAddress |  doctorName  |  SSN   | 						email 					 | password | 	  contact 	 |
	| Login | Registration Form |    Mercy    |   East 33rd     |  Venkatesh   | 	12345 |   shreyas.patil91@gmail.com  |    abcd  |    3128891919  |