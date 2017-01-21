package com.stepDefinitions;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

import com.generic.StepBase;
import com.pageFactory.LoginPage;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import io.appium.java_client.pagefactory.AndroidFindBy;

public class StepDefinitions 
{	
	protected StepBase objStepBase =  new StepBase();
	protected LoginPage lp = new LoginPage(objStepBase.getDriver());
	
	@Given("^my application is open$")
	public void My_application_is_open()
	{
		System.out.println("Hi....");
	}
	
	@Then("^I see (.*)$")
	public void I_see_Login(String text)
	{
		System.out.println(lp.GetLoginText());
	}
}
