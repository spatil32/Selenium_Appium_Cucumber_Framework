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

public class DoctorRegistrationPage
{	
	public DoctorRegistrationPage(AppiumDriver<WebElement> driver)
	{
		PageFactory.initElements(new AppiumFieldDecorator(driver), this);
	}
	
	@AndroidFindBy(id="lblFormName")
	public WebElement lblFormName;

	@AndroidFindBy(id="txtHospitalName")
	public WebElement txtHospitalName;

	@AndroidFindBy(id="txtHospitalAddress")
	public WebElement txtHospitalAddress;

	@AndroidFindBy(id="txtDoctorName")
	public WebElement txtDoctorName;

	@AndroidFindBy(id="txtSSN")
	public WebElement txtSSN;

	@AndroidFindBy(id="txtEmail")
	public WebElement txtEmail;

	@AndroidFindBy(id="txtPassword")
	public WebElement txtPassword;

	@AndroidFindBy(id="txtConfirmPassword")
	public WebElement txtConfirmPassword;

	@AndroidFindBy(id="txtContact")
	public WebElement txtContact;

	@AndroidFindBy(id="btnRegister")
	public WebElement btnRegister;

	@AndroidFindBy(id="btnCancel")
	public WebElement btnCancel;

	public WebElement getLblFormName() 
	{
		return lblFormName;
	}

	public String getTxtHospitalName() 
	{
		return txtHospitalName.getText();
	}

	public void setTxtHospitalName(String HospitalName) 
	{
		this.txtHospitalName.clear();
		this.txtHospitalName.sendKeys(HospitalName);
	}

	public String getTxtHospitalAddress() 
	{
		return txtHospitalAddress.getText();
	}

	public void setTxtHospitalAddress(String HospitalAddress) 
	{
		this.txtHospitalAddress.clear();
		this.txtHospitalAddress.sendKeys(HospitalAddress);
	}

	public String getTxtDoctorName() 
	{
		return txtDoctorName.getText();
	}

	public void setTxtDoctorName(String DoctorName) 
	{
		this.txtDoctorName.clear();
		this.txtDoctorName.sendKeys(DoctorName);
	}

	public String getTxtSSN() 
	{
		return txtSSN.getText();
	}

	public void setTxtSSN(String SSN) 
	{
		this.txtSSN.clear();
		this.txtSSN.sendKeys(SSN);
	}

	public String getTxtEmail() 
	{
		return txtEmail.getText();
	}

	public void setTxtEmail(String Email) 
	{
		this.txtEmail.clear();
		this.txtEmail.sendKeys(Email);
	}

	public String getTxtPassword() 
	{
		return txtPassword.getText();
	}

	public void setTxtPassword(String Password) 
	{
		this.txtPassword.clear();
		this.txtPassword.sendKeys(Password);
	}

	public String getTxtConfirmPassword() 
	{
		return txtConfirmPassword.getText();
	}

	public void setTxtConfirmPassword(String ConfirmPassword) 
	{
		this.txtConfirmPassword.clear();
		this.txtConfirmPassword.sendKeys(ConfirmPassword);
	}

	public String getTxtContact() 
	{
		return txtContact.getText();
	}

	public void setTxtContact(String Contact) 
	{
		this.txtContact.clear();
		this.txtContact.sendKeys(Contact);
	}
	
	public void clickDoctorRegistration()
	{
		this.btnRegister.click();
	}
	
	public void clickDoctorRegistrationCancel()
	{
		this.btnCancel.click();
	}
}