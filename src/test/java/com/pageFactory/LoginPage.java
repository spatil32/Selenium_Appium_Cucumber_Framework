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

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.PageFactory;

import io.appium.java_client.AppiumDriver;
import io.appium.java_client.pagefactory.AndroidFindBy;
import io.appium.java_client.pagefactory.AppiumFieldDecorator;

public class LoginPage 
{
	public LoginPage(AppiumDriver<WebElement> driver)
	{
		PageFactory.initElements(new AppiumFieldDecorator(driver), this);
	}
	
	@AndroidFindBy(id="lblFormName")
	public WebElement lblLogin;
	
	@AndroidFindBy(id="switchButton")
	public WebElement swtButton;
	
	@AndroidFindBy(id="txtLoginEmail")
	public WebElement txtLogin;
	
	@AndroidFindBy(id="txtLoginPassword")
	public WebElement txtPassword;
	
	@AndroidFindBy(id="btnLoginDoctor")
	public WebElement btnLogin;
	
	@AndroidFindBy(id="btnRegisterDoctor")
	public WebElement btnRegister;

	public String GetLoginText()
	{
		return lblLogin.getText();
	}
	
	public String GetLoginName()
	{
		return txtLogin.getText();
	}
	
	public void setLoginName(String email) 
	{
		txtLogin.clear();
		txtLogin.sendKeys(email);
	}
	
	public void setPasswordName(String password) 
	{
		txtPassword.clear();
		txtPassword.sendKeys(password);
	}

	public String GetPassword()
	{
		return txtPassword.getText();
	}
	
	public void clickSwitch()
	{
		swtButton.click();
	}
	
	public void clickLogin()
	{
		btnLogin.click();
	}
	
	public void clickRegister()
	{
		btnRegister.click();
	}
}
