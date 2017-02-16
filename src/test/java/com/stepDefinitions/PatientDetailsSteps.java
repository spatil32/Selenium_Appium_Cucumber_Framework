/*******************************************************************************
 * Copyright (c) 2017 Shreyas Patil.
 * All rights reserved. This framework or any portion thereof
 * may not be reproduced or used in any manner whatsoever
 * without the express written permission from me.
 *
 * Contributors:
 *     Shreyas Patil
 *******************************************************************************/
package com.stepDefinitions;

import java.util.HashMap;
import java.util.Map;

import org.openqa.selenium.By;
import org.openqa.selenium.Dimension;
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
		Dimension dimensions = objStepBase.getDriver().manage().window().getSize();
		Double screenHeightStart = dimensions.getHeight() * 0.5;
		int scrollStart = screenHeightStart.intValue();
		Double screenHeightEnd = dimensions.getHeight() * 0.2;
		int scrollEnd = screenHeightEnd.intValue();
		objStepBase.getDriver().swipe(0,scrollStart,0,scrollEnd,2000);
		objPatientDetailsPage.clickLogout();
	}
	
	@Then("^I see (.*) as firstname on Patient Registration Page$")
	public void I_see_firstname_on_Patient_Registration_Page(String field)
	{
		Assert.assertTrue(field + " is not present on patient details page.", objPatientDetailsPage.getTxtFirstName().equals(field));
	}
	
	@Then("^I see (.*) as lastname on Patient Registration Page$")
	public void I_see_lastname_on_Patient_Registration_Page(String field)
	{
		Assert.assertTrue(field + " is not present on patient details page.", objPatientDetailsPage.getTxtlastName().equals(field));
	}
	
	@Then("^I see (.*) as SSN on Patient Registration Page$")
	public void I_see_ssn_on_Patient_Registration_Page(String field)
	{
		Assert.assertTrue(field + " is not present on patient details page.", objPatientDetailsPage.getTxtSSN().equals(field));
	}

	@Then("^I see (.*) as email on Patient Registration Page$")
	public void I_see_email_on_Patient_Registration_Page(String field)
	{
		Assert.assertTrue(field + " is not present on patient details page.", objPatientDetailsPage.getTxtEmail().equals(field));
	}

	@Then("^I see (.*) as contact on Patient Registration Page$")
	public void I_see_contact_on_Patient_Registration_Page(String field)
	{
		Assert.assertTrue(field + " is not present on patient details page.", objPatientDetailsPage.getTxtPhone().equals(field));
	}

	@Then("^I see (.*) as emergency contact on Patient Registration Page$")
	public void I_see_emergency_contact_on_Patient_Registration_Page(String field)
	{
		Assert.assertTrue(field + " is not present on patient details page.", objPatientDetailsPage.getTxtEmergencyPhone().equals(field));
	}

	@Then("^I see (.*) as password on Patient Registration Page$")
	public void I_see_password_on_Patient_Registration_Page(String field)
	{
		Assert.assertTrue(field + " is not present on patient details page.", objPatientDetailsPage.getTxtPassword().equals(field));
	}
}
