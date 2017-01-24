package com.stepDefinitions;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

import com.generic.StepBase;
import com.pageFactory.DoctorRegistrationPage;
import com.pageFactory.LoginPage;
import com.pageFactory.PatientRegistrationPage;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import io.appium.java_client.android.AndroidDriver;
import io.appium.java_client.pagefactory.AndroidFindBy;
import junit.framework.Assert;

public class DoctorRegistrationSteps 
{	
	protected StepBase objStepBase =  new StepBase();
	protected LoginPage objLoginPage = new LoginPage(objStepBase.getDriver());
	protected DoctorRegistrationPage objDoctorRegPage = new DoctorRegistrationPage(objStepBase.getDriver());
	
	@Then("^I enter (.*) in the Doctors Hospital Name field$")
	public void I_enter_hospital_name_in_the_Doctors_Hospital_Name_field(String field)
	{
		objDoctorRegPage.setTxtHospitalName(field);
		objStepBase.getDriver().hideKeyboard();
	}

	@Then("^I enter (.*) in the Doctors Hospital Address field$")
	public void I_enter_hospital_address_in_the_Doctors_Hospital_Address_field(String field)
	{
		objDoctorRegPage.setTxtHospitalAddress(field);
		objStepBase.getDriver().hideKeyboard();
	}

	@Then("^I enter (.*) in the Doctors Name field$")
	public void I_enter_name_in_the_Doctors_Name_field(String field)
	{
		objDoctorRegPage.setTxtDoctorName(field);
		objStepBase.getDriver().hideKeyboard();
	}

	@Then("^I enter (.*) in the Doctors SSN field$")
	public void I_enter_ssn_in_the_Doctors_SSN_field(String field)
	{
		objDoctorRegPage.setTxtSSN(field);
		objStepBase.getDriver().hideKeyboard();
	}

	@Then("^I enter (.*) in the Doctors email field$")
	public void I_enter_email_in_the_Doctors_email_field(String field)
	{
		objDoctorRegPage.setTxtEmail(field);
		objStepBase.getDriver().hideKeyboard();
	}

	@Then("^I enter (.*) in the Doctors Password field$")
	public void I_enter_password_in_the_Doctors_Password_field(String field)
	{
		objDoctorRegPage.setTxtPassword(field);
		objStepBase.getDriver().hideKeyboard();
	}

	@Then("^I enter (.*) in the Doctors Conform Password field$")
	public void I_enter_confirm_password_in_the_Doctors_Conform_Password_field(String field)
	{
		objDoctorRegPage.setTxtConfirmPassword(field);
		objStepBase.getDriver().hideKeyboard();
	}

	@Then("^I enter (.*) in the Doctors Phone field$")
	public void I_enter__phone_in_the_Doctors_Phone_field(String field)
	{
		objDoctorRegPage.setTxtContact(field);
		objStepBase.getDriver().hideKeyboard();
	}

	@Then("^I press the Doctor Register button$")
	public void I_press_the_Doctor_Register_button()
	{
		objDoctorRegPage.clickDoctorRegistration();
	}
}