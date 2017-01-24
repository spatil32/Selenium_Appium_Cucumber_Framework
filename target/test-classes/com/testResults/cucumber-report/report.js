$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("PatientRegistration.feature");
formatter.feature({
  "line": 2,
  "name": "Patient Registration \u0026 Login",
  "description": "",
  "id": "patient-registration-\u0026-login",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@EHSTests"
    }
  ]
});
formatter.scenarioOutline({
  "line": 3,
  "name": "As a valid user Patient can register \u0026 login to my application",
  "description": "",
  "id": "patient-registration-\u0026-login;as-a-valid-user-patient-can-register-\u0026-login-to-my-application",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "my application is open",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I see \u003cLogin\u003e text",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "I press the Register button",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "I see \u003cRegistration Form\u003e text",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "I enter \u003cfirstName\u003e in the Patinet First Name field",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I enter \u003clastName\u003e in the Patient Last Name field",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I enter \u003cSSN\u003e in the Patient SSN field",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I enter \u003cemail\u003e in the Patient Email field",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "I enter \u003ccontact\u003e in the Patient Contact field",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "I enter \u003cemergencyContact\u003e in the Patient Emergency Contact field",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "I enter \u003cpassword\u003e in the Patient Password field",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "I enter \u003cpassword\u003e in the Patient Conform Password field",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "I press the Patient Register button",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "I see \u003cLogin\u003e text",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "I check gmail account confirmation mail",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "I enter \u003cemail\u003e in the LoginPage Email field",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "I enter \u003cpassword\u003e in the LoginPage Password field",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "I press the Login Page Login button",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "I see \u003cfirstName\u003e as firstname on Patient Registration Page",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "I see \u003clastName\u003e as lastname on Patient Registration Page",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "I see \u003cSSN\u003e as SSN on Patient Registration Page",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "I see \u003cemail\u003e as email on Patient Registration Page",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "I see \u003ccontact\u003e as contact on Patient Registration Page",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "I see \u003cemergencyContact\u003e as emergency contact on Patient Registration Page",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "I see \u003cpassword\u003e as password on Patient Registration Page",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "I press the Logout button",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "I see \u003cLogin\u003e text",
  "keyword": "Then "
});
formatter.examples({
  "line": 31,
  "name": "",
  "description": "",
  "id": "patient-registration-\u0026-login;as-a-valid-user-patient-can-register-\u0026-login-to-my-application;",
  "rows": [
    {
      "cells": [
        "Login",
        "Registration Form",
        "firstName",
        "lastName",
        "SSN",
        "email",
        "contact",
        "emergencyContact",
        "password"
      ],
      "line": 32,
      "id": "patient-registration-\u0026-login;as-a-valid-user-patient-can-register-\u0026-login-to-my-application;;1"
    },
    {
      "cells": [
        "Login",
        "Registration Form",
        "Shreyas",
        "Patil",
        "12345",
        "patilsr91@gmail.com",
        "1111",
        "3128891919",
        "abcd"
      ],
      "line": 33,
      "id": "patient-registration-\u0026-login;as-a-valid-user-patient-can-register-\u0026-login-to-my-application;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 11727976505,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "As a valid user Patient can register \u0026 login to my application",
  "description": "",
  "id": "patient-registration-\u0026-login;as-a-valid-user-patient-can-register-\u0026-login-to-my-application;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@EHSTests"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "my application is open",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I see Login text",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "I press the Register button",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "I see Registration Form text",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "I enter Shreyas in the Patinet First Name field",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I enter Patil in the Patient Last Name field",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I enter 12345 in the Patient SSN field",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I enter patilsr91@gmail.com in the Patient Email field",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "I enter 1111 in the Patient Contact field",
  "matchedColumns": [
    6
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "I enter 3128891919 in the Patient Emergency Contact field",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "I enter abcd in the Patient Password field",
  "matchedColumns": [
    8
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "I enter abcd in the Patient Conform Password field",
  "matchedColumns": [
    8
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "I press the Patient Register button",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "I see Login text",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "I check gmail account confirmation mail",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "I enter patilsr91@gmail.com in the LoginPage Email field",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "I enter abcd in the LoginPage Password field",
  "matchedColumns": [
    8
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "I press the Login Page Login button",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "I see Shreyas as firstname on Patient Registration Page",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "I see Patil as lastname on Patient Registration Page",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "I see 12345 as SSN on Patient Registration Page",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "I see patilsr91@gmail.com as email on Patient Registration Page",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "I see 1111 as contact on Patient Registration Page",
  "matchedColumns": [
    6
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "I see 3128891919 as emergency contact on Patient Registration Page",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "I see abcd as password on Patient Registration Page",
  "matchedColumns": [
    8
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "I press the Logout button",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "I see Login text",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "PatientRegistrationSteps.My_application_is_open()"
});
formatter.result({
  "duration": 731067418,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login",
      "offset": 6
    }
  ],
  "location": "PatientRegistrationSteps.I_see_Text(String)"
});
formatter.result({
  "duration": 1138364238,
  "status": "passed"
});
formatter.match({
  "location": "PatientRegistrationSteps.I_press_the_Register_button()"
});
formatter.result({
  "duration": 1487931397,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Registration Form",
      "offset": 6
    }
  ],
  "location": "PatientRegistrationSteps.I_see_Text(String)"
});
formatter.result({
  "duration": 907459631,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Shreyas",
      "offset": 8
    }
  ],
  "location": "PatientRegistrationSteps.I_enter_firstName_in_the_PatientFName_field(String)"
});
formatter.result({
  "duration": 8999077482,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Patil",
      "offset": 8
    }
  ],
  "location": "PatientRegistrationSteps.I_enter_lastName_in_the_Patient_Last_Name_field(String)"
});
formatter.result({
  "duration": 9149432200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "12345",
      "offset": 8
    }
  ],
  "location": "PatientRegistrationSteps.I_enter_SSN_in_the_Patient_SSN_field(String)"
});
formatter.result({
  "duration": 9760575340,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "patilsr91@gmail.com",
      "offset": 8
    }
  ],
  "location": "PatientRegistrationSteps.I_enter_email_in_the_Patient_Email_field(String)"
});
formatter.result({
  "duration": 9951382307,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1111",
      "offset": 8
    }
  ],
  "location": "PatientRegistrationSteps.I_enter_contact_in_the_Patient_Contact_field(String)"
});
formatter.result({
  "duration": 8835781685,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3128891919",
      "offset": 8
    }
  ],
  "location": "PatientRegistrationSteps.I_enter_Emergency_Contact(String)"
});
formatter.result({
  "duration": 8929240496,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abcd",
      "offset": 8
    }
  ],
  "location": "PatientRegistrationSteps.I_enter_password_in_the_Patient_Password_field(String)"
});
formatter.result({
  "duration": 8698877081,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abcd",
      "offset": 8
    }
  ],
  "location": "PatientRegistrationSteps.I_enter_password_in_the_Patient_Confirm_Password_field(String)"
});
formatter.result({
  "duration": 8922774259,
  "status": "passed"
});
formatter.match({
  "location": "PatientRegistrationSteps.I_press_the_Patient_Register_button()"
});
formatter.result({
  "duration": 1627853094,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login",
      "offset": 6
    }
  ],
  "location": "PatientRegistrationSteps.I_see_Text(String)"
});
formatter.result({
  "duration": 1155735853,
  "status": "passed"
});
formatter.match({
  "location": "PatientRegistrationSteps.I_check_gmail_account_confirmation_mail()"
});
formatter.result({
  "duration": 6818018328,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "patilsr91@gmail.com",
      "offset": 8
    }
  ],
  "location": "LoginSteps.I_enter_email(String)"
});
formatter.result({
  "duration": 11642598450,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abcd",
      "offset": 8
    }
  ],
  "location": "LoginSteps.I_enter_password(String)"
});
formatter.result({
  "duration": 8647392197,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_press_login_button()"
});
formatter.result({
  "duration": 1171631074,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Shreyas",
      "offset": 6
    }
  ],
  "location": "PatientDetailsSteps.I_see_firstname_on_Patient_Registration_Page(String)"
});
formatter.result({
  "duration": 890662271,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Patil",
      "offset": 6
    }
  ],
  "location": "PatientDetailsSteps.I_see_lastname_on_Patient_Registration_Page(String)"
});
formatter.result({
  "duration": 193715369,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "12345",
      "offset": 6
    }
  ],
  "location": "PatientDetailsSteps.I_see_ssn_on_Patient_Registration_Page(String)"
});
formatter.result({
  "duration": 251949540,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "patilsr91@gmail.com",
      "offset": 6
    }
  ],
  "location": "PatientDetailsSteps.I_see_email_on_Patient_Registration_Page(String)"
});
formatter.result({
  "duration": 917335610,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1111",
      "offset": 6
    }
  ],
  "location": "PatientDetailsSteps.I_see_contact_on_Patient_Registration_Page(String)"
});
formatter.result({
  "duration": 183779610,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3128891919",
      "offset": 6
    }
  ],
  "location": "PatientDetailsSteps.I_see_emergency_contact_on_Patient_Registration_Page(String)"
});
formatter.result({
  "duration": 224121807,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abcd",
      "offset": 6
    }
  ],
  "location": "PatientDetailsSteps.I_see_password_on_Patient_Registration_Page(String)"
});
formatter.result({
  "duration": 567094564,
  "status": "passed"
});
formatter.match({
  "location": "PatientDetailsSteps.I_press_the_Logout_button()"
});
formatter.result({
  "duration": 4729323373,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login",
      "offset": 6
    }
  ],
  "location": "PatientRegistrationSteps.I_see_Text(String)"
});
formatter.result({
  "duration": 327607407,
  "status": "passed"
});
formatter.after({
  "duration": 3483720509,
  "status": "passed"
});
});