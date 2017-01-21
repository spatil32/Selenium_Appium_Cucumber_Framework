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
formatter.before({
  "duration": 47504214738,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "As a valid user Patient can register \u0026 login to my application",
  "description": "",
  "id": "patient-registration-\u0026-login;as-a-valid-user-patient-can-register-\u0026-login-to-my-application",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "my application is open",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I see \"Login\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.My_application_is_open()"
});
formatter.result({
  "duration": 616324553,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\"Login\"",
      "offset": 6
    }
  ],
  "location": "StepDefinitions.I_see_Login(String)"
});
formatter.result({
  "duration": 431004241,
  "status": "passed"
});
formatter.after({
  "duration": 3440340838,
  "status": "passed"
});
});