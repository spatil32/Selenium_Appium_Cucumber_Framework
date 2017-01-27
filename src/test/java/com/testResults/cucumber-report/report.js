$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("doctor_gets_message_when_contact_not_provided.feature");
formatter.feature({
  "line": 2,
  "name": "Doctor gets message when contact not provided",
  "description": "",
  "id": "doctor-gets-message-when-contact-not-provided",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@BlankNumberPatientSearch"
    }
  ]
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Doctor gets message when contact not provided",
  "description": "",
  "id": "doctor-gets-message-when-contact-not-provided;doctor-gets-message-when-contact-not-provided",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "my application is open",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I see \u003cLogin\u003e text",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "I click switchRole button",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "I enter \u003cemail\u003e in the LoginPage Email field",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I enter \u003cpassword\u003e in the LoginPage Password field",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I press the Login Page Login button",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I see \u003cPatientHistory\u003e label",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "I click on Search Button",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "I check the \u003ctoastMessage\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 15,
  "name": "",
  "description": "",
  "id": "doctor-gets-message-when-contact-not-provided;doctor-gets-message-when-contact-not-provided;",
  "rows": [
    {
      "cells": [
        "Login",
        "email",
        "password",
        "PatientHistory",
        "query",
        "toastMessage"
      ],
      "line": 16,
      "id": "doctor-gets-message-when-contact-not-provided;doctor-gets-message-when-contact-not-provided;;1"
    },
    {
      "cells": [
        "Login",
        "shreyas.patil91@gmail.com",
        "abcd",
        "Search Patient History",
        "",
        "Please Enter Contact"
      ],
      "line": 17,
      "id": "doctor-gets-message-when-contact-not-provided;doctor-gets-message-when-contact-not-provided;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 13726221591,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Doctor gets message when contact not provided",
  "description": "",
  "id": "doctor-gets-message-when-contact-not-provided;doctor-gets-message-when-contact-not-provided;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@BlankNumberPatientSearch"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "my application is open",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I see Login text",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "I click switchRole button",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "I enter shreyas.patil91@gmail.com in the LoginPage Email field",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I enter abcd in the LoginPage Password field",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I press the Login Page Login button",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I see Search Patient History label",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "I click on Search Button",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "I check the Please Enter Contact",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "PatientRegistrationSteps.My_application_is_open()"
});
formatter.result({
  "duration": 788291211,
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
  "duration": 844979246,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_click_switchRole_button()"
});
formatter.result({
  "duration": 860350032,
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
  "duration": 8994056388,
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
  "duration": 8432158183,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_press_login_button()"
});
formatter.result({
  "duration": 1513528691,
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
  "duration": 618043237,
  "status": "passed"
});
formatter.match({
  "location": "PatientHistoryDetailsSteps.I_click_on_Search_Button()"
});
formatter.result({
  "duration": 3521401576,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Please Enter Contact",
      "offset": 12
    }
  ],
  "location": "PatientHistoryDetailsSteps.I_check_the_toastMessage(String)"
});
formatter.result({
  "duration": 20861969,
  "error_message": "org.openqa.selenium.InvalidSelectorException: Locator Strategy \u0027link text\u0027 is not supported for this session (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 17 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/invalid_selector_exception.html\nBuild info: version: \u00272.52.0\u0027, revision: \u00274c2593cfc3689a7fcd7be52549167e5ccc93ad28\u0027, time: \u00272016-02-11 11:22:43\u0027\nSystem info: host: \u0027Shreyas-PC\u0027, ip: \u0027192.168.0.105\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_102\u0027\nDriver info: io.appium.java_client.android.AndroidDriver\nCapabilities [{app\u003dC://Users//Shreyas//workspace//EHS_Appium_Automation//application_files//EHS.apk, appPackage\u003dcom.spatil32.emergency_health_services, networkConnectionEnabled\u003dtrue, noReset\u003dtrue, warnings\u003d{}, appWaitPackage\u003dcom.spatil32.emergency_health_services, appWaitActivity\u003dcom.spatil32.emergency_health_services.MainActivity, databaseEnabled\u003dfalse, deviceName\u003dZY223F77GW, platform\u003dLINUX, deviceUDID\u003dZY223F77GW, appActivity\u003dcom.spatil32.emergency_health_services.MainActivity, desired\u003d{app\u003dC://Users//Shreyas//workspace//EHS_Appium_Automation//application_files//EHS.apk, noReset\u003dtrue, platformVersion\u003d7.0, platformName\u003dAndroid, deviceName\u003dZY223F77GW}, platformVersion\u003d7.0, webStorageEnabled\u003dfalse, locationContextEnabled\u003dfalse, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, platformName\u003dAndroid}]\nSession ID: 50e46295-f9be-470c-851c-de8fd7de40df\n*** Element info: {Using\u003dlink text, value\u003dPlease Enter Contact}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:678)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.execute(DefaultGenericMobileDriver.java:40)\r\n\tat io.appium.java_client.AppiumDriver.execute(AppiumDriver.java:1)\r\n\tat io.appium.java_client.android.AndroidDriver.execute(AndroidDriver.java:1)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:363)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElement(DefaultGenericMobileDriver.java:56)\r\n\tat io.appium.java_client.AppiumDriver.findElement(AppiumDriver.java:1)\r\n\tat io.appium.java_client.android.AndroidDriver.findElement(AndroidDriver.java:1)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByLinkText(RemoteWebDriver.java:428)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElementByLinkText(DefaultGenericMobileDriver.java:71)\r\n\tat io.appium.java_client.AppiumDriver.findElementByLinkText(AppiumDriver.java:1)\r\n\tat io.appium.java_client.android.AndroidDriver.findElementByLinkText(AndroidDriver.java:1)\r\n\tat com.pageFactory.PatientHistoryPage.VerifyToastMessage(PatientHistoryPage.java:55)\r\n\tat com.stepDefinitions.PatientHistoryDetailsSteps.I_check_the_toastMessage(PatientHistoryDetailsSteps.java:55)\r\n\tat ✽.Then I check the Please Enter Contact(doctor_gets_message_when_contact_not_provided.feature:13)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 7190551089,
  "status": "passed"
});
});