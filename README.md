# Selenium_Appium_Cucumber_Framework
This is the Selenium_Appium_Cucumber behavior driven development framework built to test native &amp; hybrid mobile applications using Appium tool,cucumber html reporting, Java programming and Maven. Refer Readme.txt for framework structure and way to trigger the execution.

Instructions to execute the project:
Step 1: Set platform name i.e. either android or iOS.
Step 2: Create the device configuration file by navigating to "/src/test/java/com/mobileConfig/". The mobile config file must contain device id, platform name and OS version.
Step 3: Right click on project and go to "Run As->Maven Build".
Step 4: In the goals textbox set goals as example: test -Dplatform=android -Ddevice=MotoG4_7.0.1
Step 5: Once your execution is done, navigate to GenerateCustomReport.java file in "generic" package. Run the file with JUnit test to create the report folder with execution date.
The report file will be stired in "custom-reports" folder in "tesResults" package.

Requirements:

Apache Maven 3.3.9
Java 1.7 or above
Node.js (for Appium)
Appium GUI app or run appium from command prompt.
Jenkins.war (to configure your project for continuous integration using Jenkins).

Framework Structure: This framework is built using Maven build tool with related dependencies in pom.xml. The execution is triggered internally using TestRunner & Hooks class which used cucumber-jUnit dependencies to create a webdriver setup for the current scenario and then executes steps provided in test case feature file to create cucumber HTML report at the end.

Packages & Files: 

src/test/java folder- 
A. com.features: 
  i. TestRunner.java : This is the main class which triggers the execution with the help of CucumberOptions annotations. It contains path to store cucumber html, xml and json reports as well as path to the feature file where test case is written. 
  ii. Assessment.feature: This is the feature file where test case is written in text format. THe specific steps in feature file maps to step definitions.

B. com.generic: 
  i. StepBase.java: This class contains generic functionalities like setup/teardown test environment. It reads the androidConfig.properties file at the root directory of project and reads variable values for application name, package name and activity name to start and provides this as parameter to appium server. According to the values specified for platform name, it creates webdriver instance for either androidDriver or iOSDriver and starts the execution.

C. com.Hooks: 
  i. Hooks.java: This is the important class in triggering the execution. Once, the trigger request is passed from TestRunner.java class, Hooks class maintains the specified instance of webdriver for current scenario or test case.

D. com.PageFacory: The project is designed using POM (Page-Object Model) structure where webelements and functionalities specifically related to those webelements on separate webpage are mapped to a single java class. 
    i. DoctorRegistrationPage.java: It contains WebElement paths (id/css Selectors) and functions related objects on Doctor's registration activity page. 
    ii. LoginPage.java: It contains WebElement paths (id/css Selectors) and functions related objects on Login activity.
    iii. PatientDetailsPage.java: It contains WebElement paths (id/css Selectors) and functions related objects on PatientDetailsPage activity.
    iv. PatientHistoryPage.java: It contains WebElement paths (id/css Selectors) and functions related objects on PatientHistoryPage activity.
    v. PatientRegistrationPage.java: It contains WebElement paths (id/css Selectors) and functions related objects on PatientRegistrationPage activity.

E. com.stepDefinitions: 
  This is the package with java wrapper class which wraps the webdriver functions related to test cases and corrosponding steps provided in test case feature file.

F. com.testResult: 
  This is the path where cucumber HTML reports are generated.

androidConfig.properties file- confuguration file used to set value of android device name, apk file name and start activity.

pom.xml- Maven dependency file.
