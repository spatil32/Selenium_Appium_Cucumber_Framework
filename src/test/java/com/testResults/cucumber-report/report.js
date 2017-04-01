$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("DoctorRegistration.feature");
formatter.feature({
  "line": 2,
  "name": "Doctor Registration \u0026 Login",
  "description": "",
  "id": "doctor-registration-\u0026-login",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@DoctorRegistration"
    }
  ]
});
formatter.scenarioOutline({
  "line": 3,
  "name": "As a valid user Doctor can register \u0026 login to my application",
  "description": "",
  "id": "doctor-registration-\u0026-login;as-a-valid-user-doctor-can-register-\u0026-login-to-my-application",
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
  "name": "I click switchRole button",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "I press the Register button",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "I see \u003cRegistration Form\u003e text",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I enter \u003chospitalName\u003e in the Doctors Hospital Name field",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I enter \u003chospitalAddress\u003e in the Doctors Hospital Address field",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I enter \u003cdoctorName\u003e in the Doctors Name field",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "I enter \u003cSSN\u003e in the Doctors SSN field",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "I enter \u003cemail\u003e in the Doctors email field",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "I enter \u003cpassword\u003e in the Doctors Password field",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "I enter \u003cpassword\u003e in the Doctors Conform Password field",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "I enter \u003ccontact\u003e in the Doctors Phone field",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "I press the Doctor Register button",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "I see \u003cLogin\u003e text",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "I check gmail account confirmation mail",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "I click switchRole button",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "I enter \u003cemail\u003e in the LoginPage Email field",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "I enter \u003cpassword\u003e in the LoginPage Password field",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "I press the Login Page Login button",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "I see \u003cPatientHistory\u003e label",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "I press the Logout button to logout the doctor",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "I see \u003cLogin\u003e text",
  "keyword": "Then "
});
formatter.examples({
  "line": 27,
  "name": "",
  "description": "",
  "id": "doctor-registration-\u0026-login;as-a-valid-user-doctor-can-register-\u0026-login-to-my-application;",
  "rows": [
    {
      "cells": [
        "Login",
        "Registration Form",
        "hospitalName",
        "hospitalAddress",
        "doctorName",
        "SSN",
        "email",
        "password",
        "contact",
        "PatientHistory"
      ],
      "line": 28,
      "id": "doctor-registration-\u0026-login;as-a-valid-user-doctor-can-register-\u0026-login-to-my-application;;1"
    },
    {
      "cells": [
        "Login",
        "Registration Form",
        "Apollo",
        "Hadapsar",
        "Mrunal",
        "23456",
        "shreyas.patil91@gmail.com",
        "abcd",
        "3128891919",
        "Search Patient History"
      ],
      "line": 29,
      "id": "doctor-registration-\u0026-login;as-a-valid-user-doctor-can-register-\u0026-login-to-my-application;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 68057816206,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "As a valid user Doctor can register \u0026 login to my application",
  "description": "",
  "id": "doctor-registration-\u0026-login;as-a-valid-user-doctor-can-register-\u0026-login-to-my-application;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@DoctorRegistration"
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
  "name": "I click switchRole button",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "I press the Register button",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "I see Registration Form text",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I enter Apollo in the Doctors Hospital Name field",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I enter Hadapsar in the Doctors Hospital Address field",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I enter Mrunal in the Doctors Name field",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "I enter 23456 in the Doctors SSN field",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "I enter shreyas.patil91@gmail.com in the Doctors email field",
  "matchedColumns": [
    6
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "I enter abcd in the Doctors Password field",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "I enter abcd in the Doctors Conform Password field",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "I enter 3128891919 in the Doctors Phone field",
  "matchedColumns": [
    8
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "I press the Doctor Register button",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "I see Login text",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "I check gmail account confirmation mail",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "I click switchRole button",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "I enter shreyas.patil91@gmail.com in the LoginPage Email field",
  "matchedColumns": [
    6
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "I enter abcd in the LoginPage Password field",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "I press the Login Page Login button",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "I see Search Patient History label",
  "matchedColumns": [
    9
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "I press the Logout button to logout the doctor",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
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
  "duration": 1588918991,
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
  "duration": 984798008,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_click_switchRole_button()"
});
formatter.result({
  "duration": 425777129,
  "status": "passed"
});
formatter.match({
  "location": "PatientRegistrationSteps.I_press_the_Register_button()"
});
formatter.result({
  "duration": 2023487070,
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
  "duration": 811346219,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Apollo",
      "offset": 8
    }
  ],
  "location": "DoctorRegistrationSteps.I_enter_hospital_name_in_the_Doctors_Hospital_Name_field(String)"
});
formatter.result({
  "duration": 9113884730,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Hadapsar",
      "offset": 8
    }
  ],
  "location": "DoctorRegistrationSteps.I_enter_hospital_address_in_the_Doctors_Hospital_Address_field(String)"
});
formatter.result({
  "duration": 9721329888,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mrunal",
      "offset": 8
    }
  ],
  "location": "DoctorRegistrationSteps.I_enter_name_in_the_Doctors_Name_field(String)"
});
formatter.result({
  "duration": 9272724637,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "23456",
      "offset": 8
    }
  ],
  "location": "DoctorRegistrationSteps.I_enter_ssn_in_the_Doctors_SSN_field(String)"
});
formatter.result({
  "duration": 9028249155,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "shreyas.patil91@gmail.com",
      "offset": 8
    }
  ],
  "location": "DoctorRegistrationSteps.I_enter_email_in_the_Doctors_email_field(String)"
});
formatter.result({
  "duration": 9443099980,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abcd",
      "offset": 8
    }
  ],
  "location": "DoctorRegistrationSteps.I_enter_password_in_the_Doctors_Password_field(String)"
});
formatter.result({
  "duration": 9462580829,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abcd",
      "offset": 8
    }
  ],
  "location": "DoctorRegistrationSteps.I_enter_confirm_password_in_the_Doctors_Conform_Password_field(String)"
});
formatter.result({
  "duration": 10082154248,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3128891919",
      "offset": 8
    }
  ],
  "location": "DoctorRegistrationSteps.I_enter__phone_in_the_Doctors_Phone_field(String)"
});
formatter.result({
  "duration": 9456874930,
  "status": "passed"
});
formatter.match({
  "location": "DoctorRegistrationSteps.I_press_the_Doctor_Register_button()"
});
formatter.result({
  "duration": 1416470794,
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
  "duration": 1355371171,
  "status": "passed"
});
formatter.match({
  "location": "PatientRegistrationSteps.I_check_gmail_account_confirmation_mail()"
});
formatter.result({
  "duration": 7070416827,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_click_switchRole_button()"
});
formatter.result({
  "duration": 1351503985,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "shreyas.patil91@gmail.com",
      "offset": 8
    }
  ],
  "location": "LoginSteps.I_enter_email(String)"
});
formatter.result({
  "duration": 12573303062,
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
  "duration": 8910759008,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_press_login_button()"
});
formatter.result({
  "duration": 1649061667,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Search Patient History",
      "offset": 6
    }
  ],
  "location": "PatientHistoryDetailsSteps.I_see_PatientHistory_label(String)"
});
formatter.result({
  "duration": 890852448,
  "status": "passed"
});
formatter.match({
  "location": "PatientHistoryDetailsSteps.I_press_the_Logout_button_to_logout_the_doctor()"
});
formatter.result({
  "duration": 3317199305,
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
  "duration": 414243505,
  "status": "passed"
});
formatter.after({
  "duration": 3480860627,
  "status": "passed"
});
});