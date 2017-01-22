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
  "name": "I see \u003cLogin\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "I press the Register button",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "I see \u003cRegistration Form\u003e",
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
  "name": "I see \u003cLogin\u003e",
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
  "name": "I see \u003cfirstName\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "I see \u003clastName\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "I see \u003cSSN\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "I see \u003cemail\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "I see \u003ccontact\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "I see \u003cemergencyContact\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "I see \u003cpassword\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "I press the Logout button",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "I see \u003cLogin\u003e",
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
  "duration": 11264832649,
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
  "name": "I see Login",
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
  "name": "I see Registration Form",
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
  "name": "I see Login",
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
  "name": "I see Shreyas",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "I see Patil",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "I see 12345",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "I see patilsr91@gmail.com",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "I see 1111",
  "matchedColumns": [
    6
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "I see 3128891919",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "I see abcd",
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
  "name": "I see Login",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "PatientRegistrationSteps.My_application_is_open()"
});
formatter.result({
  "duration": 831476143,
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
  "duration": 1081834712,
  "status": "passed"
});
formatter.match({
  "location": "PatientRegistrationSteps.I_press_the_Register_button()"
});
formatter.result({
  "duration": 1572797695,
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
  "duration": 960508314,
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
  "duration": 8686234452,
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
  "duration": 9317313419,
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
  "duration": 9713268738,
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
  "duration": 9319587787,
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
  "duration": 9357901530,
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
  "duration": 9232074399,
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
  "duration": 9436582831,
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
  "duration": 10200794353,
  "status": "passed"
});
formatter.match({
  "location": "PatientRegistrationSteps.I_press_the_Patient_Register_button()"
});
formatter.result({
  "duration": 1601302939,
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
  "duration": 1138411791,
  "status": "passed"
});
formatter.match({
  "location": "PatientRegistrationSteps.I_check_gmail_account_confirmation_mail()"
});
formatter.result({
  "duration": 7081367792,
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
  "duration": 12425613144,
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
  "duration": 9234046244,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_press_login_button()"
});
formatter.result({
  "duration": 1563635458,
  "error_message": "org.openqa.selenium.WebDriverException: An unknown server-side error occurred while processing the command. Original error: Soft keyboard not present, cannot hide keyboard (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 177 milliseconds\nBuild info: version: \u00272.52.0\u0027, revision: \u00274c2593cfc3689a7fcd7be52549167e5ccc93ad28\u0027, time: \u00272016-02-11 11:22:43\u0027\nSystem info: host: \u0027Shreyas-PC\u0027, ip: \u0027192.168.0.102\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_102\u0027\nDriver info: io.appium.java_client.android.AndroidDriver\nCapabilities [{app\u003dC://Users//Shreyas//workspace//EHS_Appium_Automation//application_files//EHS.apk, appPackage\u003dcom.spatil32.emergency_health_services, networkConnectionEnabled\u003dtrue, noReset\u003dtrue, warnings\u003d{}, appWaitPackage\u003dcom.spatil32.emergency_health_services, appWaitActivity\u003dcom.spatil32.emergency_health_services.MainActivity, databaseEnabled\u003dfalse, deviceName\u003dZY223F77GW, platform\u003dLINUX, deviceUDID\u003dZY223F77GW, appActivity\u003dcom.spatil32.emergency_health_services.MainActivity, desired\u003d{app\u003dC://Users//Shreyas//workspace//EHS_Appium_Automation//application_files//EHS.apk, noReset\u003dtrue, platformVersion\u003d7.0, platformName\u003dAndroid, deviceName\u003dZY223F77GW}, platformVersion\u003d7.0, webStorageEnabled\u003dfalse, locationContextEnabled\u003dfalse, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, platformName\u003dAndroid}]\nSession ID: 41b6260f-deb7-49b3-a10c-70575ae90a47\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:678)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.execute(DefaultGenericMobileDriver.java:40)\r\n\tat io.appium.java_client.AppiumDriver.execute(AppiumDriver.java:235)\r\n\tat io.appium.java_client.AppiumDriver.hideKeyboard(AppiumDriver.java:305)\r\n\tat com.stepDefinitions.LoginSteps.I_press_login_button(LoginSteps.java:31)\r\n\tat ✽.Then I press the Login Page Login button(PatientRegistration.feature:21)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Shreyas",
      "offset": 6
    }
  ],
  "location": "PatientRegistrationSteps.I_see_Text(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Patil",
      "offset": 6
    }
  ],
  "location": "PatientRegistrationSteps.I_see_Text(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "12345",
      "offset": 6
    }
  ],
  "location": "PatientRegistrationSteps.I_see_Text(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "patilsr91@gmail.com",
      "offset": 6
    }
  ],
  "location": "PatientRegistrationSteps.I_see_Text(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1111",
      "offset": 6
    }
  ],
  "location": "PatientRegistrationSteps.I_see_Text(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "3128891919",
      "offset": 6
    }
  ],
  "location": "PatientRegistrationSteps.I_see_Text(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "abcd",
      "offset": 6
    }
  ],
  "location": "PatientRegistrationSteps.I_see_Text(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "PatientDetailsSteps.I_press_the_Logout_button()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 7083747681,
  "status": "passed"
});
});