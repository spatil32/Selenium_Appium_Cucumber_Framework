package com.stepDefinitions;

import com.generic.StepBase;
import com.pageFactory.LoginPage;

import cucumber.api.java.en.Then;

public class LoginSteps
{
	protected StepBase objStepBase =  new StepBase();
	protected LoginPage objLoginPage = new LoginPage(objStepBase.getDriver());

	@Then("^I enter (.*) in the LoginPage Email field$")
	public void I_enter_email(String email)
	{
		objLoginPage.setLoginName(email);
		objStepBase.getDriver().hideKeyboard();
	}
	
	@Then("^I enter (.*) in the LoginPage Password field$")
	public void I_enter_password(String password)
	{
		objLoginPage.setPasswordName(password);
		objStepBase.getDriver().hideKeyboard();
	}
	
	@Then("^I press the Login Page Login button$")
	public void I_press_login_button()
	{
		objLoginPage.clickLogin();
	}

	@Then("^I click switchRole button$")
	public void I_click_switchRole_button()
	{
		objLoginPage.clickSwitch();
	}
}
