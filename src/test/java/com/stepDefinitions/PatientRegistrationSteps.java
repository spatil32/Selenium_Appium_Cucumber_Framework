package com.stepDefinitions;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

import com.generic.StepBase;
import com.pageFactory.LoginPage;
import com.pageFactory.PatientRegistrationPage;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import io.appium.java_client.android.AndroidDriver;
import io.appium.java_client.pagefactory.AndroidFindBy;
import junit.framework.Assert;

public class PatientRegistrationSteps 
{	
	protected StepBase objStepBase =  new StepBase();
	protected LoginPage objLoginPage = new LoginPage(objStepBase.getDriver());
	protected PatientRegistrationPage objPatientRegPage = new PatientRegistrationPage(objStepBase.getDriver());

	
	@Given("^my application is open$")
	public void My_application_is_open()
	{
		System.out.println("Application opened....");
		objStepBase.getDriver().hideKeyboard();
	}
	
	@Then("^I see (.*)$")
	public void I_see_Text(String text)
	{
		Assert.assertTrue(text + " text not found.", objLoginPage.GetLoginText().equals(text));
	}
	
	@Then("^I check gmail account confirmation mail$")
	public void I_check_gmail_account_confirmation_mail()
	{
		((AndroidDriver<WebElement>)objStepBase.getDriver()).startActivity("com.google.android.gm", "com.android.mail.ui.MailActivity");
		System.out.println(objStepBase.getDriver().findElement(By.xpath("//android.view.View[@index='0']")).getText());
		((AndroidDriver<WebElement>)objStepBase.getDriver()).startActivity("com.spatil32.emergency_health_services", "com.spatil32.emergency_health_services.MainActivity");
	}
	
	@Then("^I press the Register button$")
	public void I_press_the_Register_button()
	{
		objLoginPage.clickRegister();
		objStepBase.getDriver().hideKeyboard();
	}
	
	@Then("^I enter (.*) in the Patinet First Name field$")
	public void I_enter_firstName_in_the_PatientFName_field(String firstName)
	{
		objPatientRegPage.setPatientFirstName(firstName);
		objStepBase.getDriver().hideKeyboard();
	}
	
	@Then("^I enter (.*) in the Patient Last Name field$")
	public void I_enter_lastName_in_the_Patient_Last_Name_field(String lastName)
	{
		objPatientRegPage.setPatientLastName(lastName);
		objStepBase.getDriver().hideKeyboard();
	}
	
	@Then("^I enter (.*) in the Patient SSN field$")
	public void I_enter_SSN_in_the_Patient_SSN_field(String patientSSN)
	{
		objPatientRegPage.setPatientSSN(patientSSN);
		objStepBase.getDriver().hideKeyboard();
	}
	
	@Then("^I enter (.*) in the Patient Email field$")
	public void I_enter_email_in_the_Patient_Email_field(String email)
	{
		objPatientRegPage.setPatientEmail(email);
		objStepBase.getDriver().hideKeyboard();
	}
	
	@Then("^I enter (.*) in the Patient Contact field$")
	public void I_enter_contact_in_the_Patient_Contact_field(String contact)
	{
		objPatientRegPage.setPatientContact(contact);
		objStepBase.getDriver().hideKeyboard();
	}
	
	@Then("^I enter (.*) in the Patient Emergency Contact field$")
	public void I_enter_Emergency_Contact(String emergencyContact)
	{
		objPatientRegPage.setPatientEmergencyContact(emergencyContact);
		objStepBase.getDriver().hideKeyboard();
	}
	
	@Then("^I enter (.*) in the Patient Password field$")
	public void I_enter_password_in_the_Patient_Password_field(String password)
	{
		objPatientRegPage.setTxtPatientPassword(password);
		objStepBase.getDriver().hideKeyboard();
	}
	
	@Then("^I enter (.*) in the Patient Conform Password field$")
	public void I_enter_password_in_the_Patient_Confirm_Password_field(String password)
	{
		objPatientRegPage.setPatientConfirmPassword(password);
		objStepBase.getDriver().hideKeyboard();
	}
	
	@Then("^I press the Patient Register button$")
	public void I_press_the_Patient_Register_button()
	{
		objPatientRegPage.clickPatientRegisterButton();
	}
}
