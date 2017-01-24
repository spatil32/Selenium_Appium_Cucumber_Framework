@EHSTests
Feature: Patient Registration & Login
Scenario Outline: As a valid user Patient can register & login to my application
    Given my application is open
    Then I see <Login> text
		Then I press the Register button
		Then I see <Registration Form> text
		Then I enter <firstName> in the Patinet First Name field
		Then I enter <lastName> in the Patient Last Name field
		Then I enter <SSN> in the Patient SSN field
		Then I enter <email> in the Patient Email field
		Then I enter <contact> in the Patient Contact field
		Then I enter <emergencyContact> in the Patient Emergency Contact field
		Then I enter <password> in the Patient Password field
		Then I enter <password> in the Patient Conform Password field
		Then I press the Patient Register button
		Then I see <Login> text
		Then I check gmail account confirmation mail
		Then I enter <email> in the LoginPage Email field
		Then I enter <password> in the LoginPage Password field
		Then I press the Login Page Login button
		Then I see <firstName> as firstname on Patient Registration Page
		Then I see <lastName> as lastname on Patient Registration Page
		Then I see <SSN> as SSN on Patient Registration Page
		Then I see <email> as email on Patient Registration Page
		Then I see <contact> as contact on Patient Registration Page
		Then I see <emergencyContact> as emergency contact on Patient Registration Page
		Then I see <password> as password on Patient Registration Page
		Then I press the Logout button
		Then I see <Login> text
Examples:
	| Login | Registration Form |firstName | lastName |  SSN  |        email        | contact | emergencyContact | password |
	| Login | Registration Form | Shreyas  |   Patil  | 12345 | patilsr91@gmail.com |   1111  |     3128891919   |    abcd  |