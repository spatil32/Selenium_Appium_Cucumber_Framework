package com.features;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		//dryRun = false,
		strict = true,
		features = {"src/test/java/com/features"},
		glue = {"com.Hooks", "com.stepDefinitions"},
		tags = {"@BlankNumberPatientSearch"},
		monochrome = true,
		format = {
				"pretty",
				"html:src/test/java/com/testResults/cucumber-report",
				"junit:src/test/java/com/testResults/cucumber-report/cucumber.xml",
				"json:src/test/java/com/testResults/cucumber-report/cucumber.json"
		})
public class TestRunner
{
}