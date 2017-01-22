package com.stepDefinitions;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

import com.generic.StepBase;
import com.pageFactory.LoginPage;
import com.pageFactory.PatientDetailsPage;
import com.pageFactory.PatientRegistrationPage;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import io.appium.java_client.android.AndroidDriver;
import io.appium.java_client.pagefactory.AndroidFindBy;
import junit.framework.Assert;

public class PatientDetailsSteps 
{	
	protected StepBase objStepBase =  new StepBase();
	protected LoginPage objLoginPage = new LoginPage(objStepBase.getDriver());
	protected PatientDetailsPage objPatientDetailsPage = new PatientDetailsPage(objStepBase.getDriver());

	@Then("^I press the Logout button$")
	public void I_press_the_Logout_button()
	{
		objStepBase.getDriver().swipe(50, 15, 50, 200, 5);
		objPatientDetailsPage.clickLogout();
	}
	
}
