/*******************************************************************************
 * Copyright (c) 2017 Shreyas Patil.
 * All rights reserved. This framework or any portion thereof
 * may not be reproduced or used in any manner whatsoever
 * without the express written permission from me.
 *
 * Contributors:
 *     Shreyas Patil
 *******************************************************************************/
package com.pageFactory;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.PageFactory;

import io.appium.java_client.AppiumDriver;
import io.appium.java_client.pagefactory.AndroidFindBy;
import io.appium.java_client.pagefactory.AppiumFieldDecorator;

public class PatientRegistrationPage
{	
	public PatientRegistrationPage(AppiumDriver<WebElement> driver)
	{
		PageFactory.initElements(new AppiumFieldDecorator(driver), this);
	}
	
	@AndroidFindBy(id="lblFormName")
	public WebElement lblFormName;

	@AndroidFindBy(id="evFirstName")
	public WebElement txtPatientFirstName;

	@AndroidFindBy(id="evLastName")
	public WebElement txtPatientLastName;
	
	@AndroidFindBy(id="evSSN")
	public WebElement txtPatientSSN;
	
	@AndroidFindBy(id="evEmail")
	public WebElement txtPatientEmail;
	
	@AndroidFindBy(id="evContact")
	public WebElement txtPatientContact;
	
	@AndroidFindBy(id="evEmgContact")
	public WebElement txtPatientEmergencyContact;
	
	@AndroidFindBy(id="evPassword")
	public WebElement txtPatientPassword;
	
	@AndroidFindBy(id="evConfirmPassword")
	public WebElement txtPatientConfirmPassword;
	
	@AndroidFindBy(id="bRegister")
	public WebElement btnPatientRegister;
	
	@AndroidFindBy(id="bCancel")
	public WebElement btnpaientRegCancel;
	
	public String getPatientFirstName() 
	{
		return txtPatientFirstName.getText();
	}

	public void setPatientFirstName(String txtFirstName) 
	{
		this.txtPatientFirstName.clear();
		this.txtPatientFirstName.sendKeys(txtFirstName);
	}

	public String getPatientLastName() 
	{
		return txtPatientLastName.getText();
	}

	public void setPatientLastName(String PatientLastName) 
	{
		this.txtPatientLastName.clear();
		this.txtPatientLastName.sendKeys(PatientLastName);
	}

	public String getPatientSSN()
	{
		return txtPatientSSN.getText();
	}

	public void setPatientSSN(String PatientSSN)
	{
		this.txtPatientSSN.clear();
		this.txtPatientSSN.sendKeys(PatientSSN);
	}

	public String getPatientEmail() 
	{
		return txtPatientEmail.getText();
	}

	public void setPatientEmail(String PatientEmail)
	{
		this.txtPatientEmail.clear();
		this.txtPatientEmail.sendKeys(PatientEmail);
	}

	public String getPatientContact()
	{
		return txtPatientContact.getText();
	}

	public void setPatientContact(String PatientContact) 
	{
		this.txtPatientContact.clear();
		this.txtPatientContact.sendKeys(PatientContact);
	}

	public String getPatientEmergencyContact() 
	{
		return txtPatientEmergencyContact.getText();
	}

	public void setPatientEmergencyContact(String PatientEmergencyContact) 
	{
		this.txtPatientEmergencyContact.clear();
		this.txtPatientEmergencyContact.sendKeys(PatientEmergencyContact);
	}

	public String getPatientPassword() 
	{
		return txtPatientPassword.getText();
	}

	public void setTxtPatientPassword(String PatientPassword)
	{
		this.txtPatientPassword.clear();
		this.txtPatientPassword.sendKeys(PatientPassword);
	}

	public String getPatientConfirmPassword() 
	{
		return txtPatientConfirmPassword.getText();
	}

	public void setPatientConfirmPassword(String PatientConfirmPassword) 
	{
		this.txtPatientConfirmPassword.clear();
		this.txtPatientConfirmPassword.sendKeys(PatientConfirmPassword);
	}
	
	public void clickPatientRegisterButton()
	{
		this.btnPatientRegister.click();
	}
	
	public void clickPatientRegCancelButton()
	{
		this.btnpaientRegCancel.click();
	}
}
