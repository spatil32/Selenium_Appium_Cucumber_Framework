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
import com.pageFactory.PatientHistoryPage;
import com.pageFactory.PatientRegistrationPage;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import io.appium.java_client.android.AndroidDriver;
import io.appium.java_client.pagefactory.AndroidFindBy;
import junit.framework.Assert;

public class PatientHistoryDetailsSteps 
{	
	protected StepBase objStepBase =  new StepBase();
	protected LoginPage objLoginPage = new LoginPage(objStepBase.getDriver());
	protected PatientHistoryPage objPatientHistoryPage = new PatientHistoryPage(objStepBase.getDriver());

	@Then("^I see (.*) label$")
	public void I_see_PatientHistory_label(String label)
	{
		Assert.assertTrue(label + " not present on page.", objPatientHistoryPage.lblPatientHistory.getText().equals(label));
	}
	
	@Then("^I press the Logout button to logout the doctor$")
	public void I_press_the_Logout_button_to_logout_the_doctor()
	{
		objPatientHistoryPage.btnDoctorLogout.click();
	}
	
	@Then("^I enter (.*) in the SearchButtonBar field$")
	public void I_enter_query_in_the_SearchButtonBar_field(String text)
	{
		objPatientHistoryPage.setSearchQuery(text);
	}
	
	@Then("^I click on Search Button$")
	public void I_click_on_Search_Button()
	{
		objPatientHistoryPage.clickSearchHistory();
	}
	
	@Then("^I check the (.*)$")
	public void I_check_the_toastMessage(String toast)
	{
		objPatientHistoryPage.VerifyToastMessage(objStepBase.getDriver(), toast);
	}
}
