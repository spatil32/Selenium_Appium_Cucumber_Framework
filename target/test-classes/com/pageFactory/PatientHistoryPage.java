package com.pageFactory;

import org.junit.Assert;
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
	
	@AndroidFindBy(id="search_src_text")
	public WebElement btnsearchQuery;

	public void clickDoctorLogout()
	{
		btnDoctorLogout.click();
	}

	public void setSearchQuery(String text)
	{
		btnsearchQuery.clear();
		btnsearchQuery.sendKeys(text);
	}
	
	public void clickSearchHistory()
	{
		btnsearchPatient.click();
	}
	
	public void VerifyToastMessage(AppiumDriver<WebElement> driver, String toastMessage)
	{
		Assert.assertTrue("Tost not verified.", driver.findElementByLinkText(toastMessage).getText().equals(toastMessage));
	}
}
