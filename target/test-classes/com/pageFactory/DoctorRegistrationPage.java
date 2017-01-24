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

	public void setTxtHospitalName(String txtHospitalName) 
	{
		this.txtHospitalName.sendKeys(txtHospitalName);
	}

	public String getTxtHospitalAddress() 
	{
		return txtHospitalAddress.getText();
	}

	public void setTxtHospitalAddress(String txtHospitalAddress) 
	{
		this.txtHospitalAddress.sendKeys(txtHospitalAddress);
	}

	public String getTxtDoctorName() 
	{
		return txtDoctorName.getText();
	}

	public void setTxtDoctorName(String txtDoctorName) 
	{
		this.txtDoctorName.sendKeys(txtDoctorName);
	}

	public String getTxtSSN() 
	{
		return txtSSN.getText();
	}

	public void setTxtSSN(String txtSSN) 
	{
		this.txtSSN.sendKeys(txtSSN);
	}

	public String getTxtEmail() 
	{
		return txtEmail.getText();
	}

	public void setTxtEmail(String txtEmail) 
	{
		this.txtEmail.sendKeys(txtEmail);
	}

	public String getTxtPassword() 
	{
		return txtPassword.getText();
	}

	public void setTxtPassword(String txtPassword) 
	{
		this.txtPassword.sendKeys(txtPassword);
	}

	public String getTxtConfirmPassword() 
	{
		return txtConfirmPassword.getText();
	}

	public void setTxtConfirmPassword(String txtConfirmPassword) 
	{
		this.txtConfirmPassword.sendKeys(txtConfirmPassword);
	}

	public String getTxtContact() 
	{
		return txtContact.getText();
	}

	public void setTxtContact(String txtContact) 
	{
		this.txtContact.sendKeys(txtContact);
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
