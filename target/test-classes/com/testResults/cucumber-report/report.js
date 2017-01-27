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
  "name": "I enter \u003cquery\u003e in the SearchButtonBar field",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "I click on Search Button",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "I check the \u003ctoastMessage\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 16,
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
      "line": 17,
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
      "line": 18,
      "id": "doctor-gets-message-when-contact-not-provided;doctor-gets-message-when-contact-not-provided;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 17054194472,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
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
  "name": "I enter  in the SearchButtonBar field",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "I click on Search Button",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
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
  "duration": 1380135729,
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
  "duration": 994443149,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_click_switchRole_button()"
});
formatter.result({
  "duration": 533520222,
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
  "duration": 8906398983,
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
  "duration": 8697449147,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.I_press_login_button()"
});
formatter.result({
  "duration": 1298564594,
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
  "duration": 775685266,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 8
    }
  ],
  "location": "PatientHistoryDetailsSteps.I_enter_query_in_the_SearchButtonBar_field(String)"
});
formatter.result({
  "duration": 1280653145,
  "error_message": "org.openqa.selenium.NoSuchElementException: Can\u0027t locate an element by this strategy: Locator map: \n- native content: \"By.id: search_src_text\" \n- html content: \"by id or name \"btnsearchQuery\"\"\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.52.0\u0027, revision: \u00274c2593cfc3689a7fcd7be52549167e5ccc93ad28\u0027, time: \u00272016-02-11 11:22:43\u0027\nSystem info: host: \u0027Shreyas-PC\u0027, ip: \u0027192.168.0.105\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_102\u0027\nDriver info: driver.version: unknown\r\n\tat io.appium.java_client.pagefactory.AppiumElementLocator.findElement(AppiumElementLocator.java:110)\r\n\tat io.appium.java_client.pagefactory.interceptors.InterceptorOfASingleElement.intercept(InterceptorOfASingleElement.java:57)\r\n\tat io.appium.java_client.android.AndroidElement$$EnhancerByCGLIB$$c0b591f0.clear(\u003cgenerated\u003e)\r\n\tat com.pageFactory.PatientHistoryPage.setSearchQuery(PatientHistoryPage.java:44)\r\n\tat com.stepDefinitions.PatientHistoryDetailsSteps.I_enter_query_in_the_SearchButtonBar_field(PatientHistoryDetailsSteps.java:43)\r\n\tat ✽.Then I enter  in the SearchButtonBar field(doctor_gets_message_when_contact_not_provided.feature:12)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "PatientHistoryDetailsSteps.I_click_on_Search_Button()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 7530594610,
  "status": "passed"
});
});