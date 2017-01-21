package com.generic;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileInputStream;
import java.io.InputStreamReader;
import java.net.URL;
import java.util.Properties;

import org.apache.commons.exec.CommandLine;
import org.apache.commons.exec.DefaultExecuteResultHandler;
import org.apache.commons.exec.DefaultExecutor;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.support.ui.WebDriverWait;

import cucumber.api.Scenario;
import io.appium.java_client.AppiumDriver;
import io.appium.java_client.MobileElement;
import io.appium.java_client.android.AndroidDriver;
import io.appium.java_client.remote.MobileCapabilityType;

public class StepBase 
{
	protected static AppiumDriver driver = null;
	protected static WebDriverWait webDriverWait;
	protected static Scenario scenario;
	
	public void setUp(Scenario cScenario)
	{
		scenario = cScenario;
		try 
		{
			startAppium();
			//System.out.println("Platform = " + System.getProperty("platform"));
			//System.out.println("Device = " + System.getProperty("device"));
			Properties objConfig = new Properties();
			if(System.getProperty("platform").equalsIgnoreCase("android"))
			{
				objConfig.load(new FileInputStream(System.getProperty("user.dir") + "/androidConfig.properties"));
			}
			else if(System.getProperty("platform").equalsIgnoreCase("iOS"))
			{
				objConfig.load(new FileInputStream(System.getProperty("user.dir") + "/iOSConfig.properties"));
			}
			Properties mobileConfig = new Properties();
			mobileConfig.load(new FileInputStream(System.getProperty("user.dir") + "/src/test/java/com/mobileConfig/" + System.getProperty("device") + ".properties"));
			//mobileConfig.load(new FileInputStream(System.getProperty("user.dir") + "/src/test/java/com/mobileConfig/" + "HTC_Desire_800_4.1.2.properties"));

			DesiredCapabilities capabilities = new DesiredCapabilities();
			capabilities.setCapability(MobileCapabilityType.DEVICE_NAME, mobileConfig.getProperty("device.name"));
			//capabilities.setCapability(MobileCapabilityType.FULL_RESET, false);
			capabilities.setCapability(MobileCapabilityType.APP, objConfig.getProperty("test.app"));
			capabilities.setCapability(MobileCapabilityType.PLATFORM_NAME, mobileConfig.getProperty("device.platform"));
			capabilities.setCapability(MobileCapabilityType.PLATFORM_VERSION, mobileConfig.getProperty("device.platformVersion"));
			
			StepBase.driver = new AndroidDriver<MobileElement>(new URL("http://127.0.0.1:4723/wd/hub"),capabilities);
			webDriverWait = new WebDriverWait(driver, 10L);
			//driver.launchApp();
		}
		catch (Exception e)
		{
			e.printStackTrace();
		}
	}
	
	public void tearDown(Scenario cScenrio)
	{
		StepBase.scenario = cScenrio;
		if(StepBase.scenario.isFailed())
		{
			takeScreenshot();
		}
		driver.quit();
	}
	
	public void takeScreenshot()
	{
		final byte[] screenshot = ((TakesScreenshot)driver).getScreenshotAs(OutputType.BYTES);
		StepBase.scenario.embed(screenshot, "image/png");
	}

	public AppiumDriver<WebElement> getDriver()
	{
		return StepBase.driver;
	}
	
	public void startAppium()
	{
		try
		{
			CommandLine cmd = new CommandLine("C:/Program Files/nodejs/node.exe ");
			cmd.addArgument("C:/Users/Shreyas/AppData/Roaming/npm/node_modules/appium/lib/appium.js",false);
			cmd.addArgument("--address", false);
			cmd.addArgument("127.0.0.1");
			cmd.addArgument("--port", false);
			cmd.addArgument("4723");
			cmd.addArgument("--no-reset", true);
			
			DefaultExecuteResultHandler resultHandler = new DefaultExecuteResultHandler();
			DefaultExecutor executor = new DefaultExecutor();
			executor.setExitValue(1);
			executor.execute(cmd, resultHandler);
			Thread.sleep(5000L);
			System.out.println("Appium Started...");
		}
		catch (Exception e)
		{
			e.printStackTrace();
		}
	}
}
