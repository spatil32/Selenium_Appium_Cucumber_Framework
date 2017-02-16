/*******************************************************************************
 * Copyright (c) 2017 Shreyas Patil.
 * All rights reserved. This framework or any portion thereof
 * may not be reproduced or used in any manner whatsoever
 * without the express written permission from me.
 *
 * Contributors:
 *     Shreyas Patil
 *******************************************************************************/
package com.generic;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;

public class Utilities 
{
	private StepBase objStepBase = new StepBase();
	public void takeScreenshot() 
	{
		String dateFormatter = "dd_mm_yyyy_HH_mm_ss";
		DateFormat dateFormat = new SimpleDateFormat(dateFormatter);
		Date date = Calendar.getInstance().getTime();
		String formattedDate = dateFormat.format(date);
		System.out.println("Formatted date for screenshot = " + formattedDate);
		try 
		{
			File scrFile = ((TakesScreenshot)objStepBase.getDriver()).getScreenshotAs(OutputType.FILE);
			FileUtils.copyFile(scrFile, new File(System.getProperty("user.dir") + "/src/test/java/com/testResults/ScreenShots/screenshot_"+ formattedDate +".png"));
		}
		catch (Exception e) 
		{
			throw new RuntimeException(e);
		}
	}

	public void copyFileUsingStream(File source, File dest) throws IOException
	{
		FileInputStream is = null;
		FileOutputStream oo = null;
		try 
		{
			is = new FileInputStream(source);
			oo = new FileOutputStream(dest);
			byte[] buffer = new byte[1024];
			int length;
			while((length = is.read(buffer)) > 0)
			{
				oo.write(buffer, 0, length);
			}
		}
		finally 
		{
			is.close();
			oo.close();
		}
	}
}
