package com.pageFactory;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.PageFactory;

import io.appium.java_client.AppiumDriver;
import io.appium.java_client.pagefactory.AndroidFindBy;
import io.appium.java_client.pagefactory.AppiumFieldDecorator;

public class PatientHistoryPage 
{
	public PatientHistoryPage(AppiumDriver<WebElement> driver)
	{
		PageFactory.initElements(new AppiumFieldDecorator(driver), this);
	}
	
	@AndroidFindBy(id="lblPatientFormName")
	public WebElement lblPatientHistory;
	
	@AndroidFindBy(id="btnDoctorLogout")
	public WebElement btnDoctorLogout;
	
	@AndroidFindBy(id="search_button")
	public WebElement searchPatientHistory;
	
	@AndroidFindBy(id="search_bar")
	public WebElement searchBar;
	
	@AndroidFindBy(id="btnSearchPatient")
	public WebElement btnsearchPatient;
	
	public void clickDoctorLogout()
	{
		btnDoctorLogout.click();
	}
}
