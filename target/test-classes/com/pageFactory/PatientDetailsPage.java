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

public class PatientDetailsPage 
{
	
	public PatientDetailsPage(AppiumDriver<WebElement> driver)
	{
		PageFactory.initElements(new AppiumFieldDecorator(driver), this);
	}

	@AndroidFindBy(id="lblFormName")
	public WebElement lblPatientDetails;
	
	@AndroidFindBy(id="ptFirstName")
	public WebElement txtFirstName;
	
	@AndroidFindBy(id="ptLastName")
	public WebElement txtlastName;
	
	@AndroidFindBy(id="ptSSN")
	public WebElement txtSSN;
	
	@AndroidFindBy(id="ptEmail")
	public WebElement txtEmail;
	
	@AndroidFindBy(id="ptPhone")
	public WebElement txtPhone;
	
	@AndroidFindBy(id="ptEmergency")
	public WebElement txtEmergencyPhone;
	
	@AndroidFindBy(id="ptPassword")
	public WebElement txtPassword;
	
	@AndroidFindBy(id="ptBtnLogout")
	public WebElement btnLogout;

	public String getLblPatientDetails() {
		return lblPatientDetails.getText();
	}

	public String getTxtFirstName() {
		return txtFirstName.getText();
	}

	public String getTxtlastName() {
		return txtlastName.getText();
	}

	public String getTxtSSN() {
		return txtSSN.getText();
	}

	public String getTxtEmail() {
		return txtEmail.getText();
	}

	public String getTxtPhone() {
		return txtPhone.getText();
	}

	public String getTxtEmergencyPhone() {
		return txtEmergencyPhone.getText();
	}

	public String getTxtPassword() {
		return txtPassword.getText();
	}
	
	public void clickLogout()
	{
		btnLogout.click();
	}
}
