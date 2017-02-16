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
import java.util.ArrayList;
import java.util.List;

import org.joda.time.DateTime;
import org.joda.time.format.DateTimeFormat;
import org.joda.time.format.DateTimeFormatter;
import org.junit.Test;

import net.masterthought.cucumber.ReportBuilder;

public class GenerateCustomReport 
{
	private String jsonFilePath;
	private String reportPath;
	private String xmlFilePath;
	private String pluginUrlPath;
	private String buildNumber;
	private String buildProject;
	private boolean skippedFails;
	private boolean undefinedFails;
	private boolean flashCharts;
	private boolean runWithJenkins;
	private boolean artifactsEnabled;
	private String artifactConfig;
	private boolean highCharts;
	private DateTimeFormatter dateTimeFormat;
	private Utilities objUtilities = new Utilities();
	
	@Test
	public void createCustomReport()
	{
		try
		{
			dateTimeFormat = DateTimeFormat.forPattern("dd_mm_yyyy_HH_mm_ss");
			String currentTimeStamp = dateTimeFormat.print(new DateTime());
			
			reportPath = "src/test/java/com/testResults/custom-report/cucumber_reports_" + currentTimeStamp;
			jsonFilePath = "src/test/java/com/testResults/cucumber-report/cucumber.json";
			xmlFilePath = "src/test/java/com/testResults/cucumber-report/cucumber.xml";
			
			List<String> jsonReportFiles = new ArrayList<String>();
			jsonReportFiles.add(jsonFilePath);
			
			buildNumber = "1";
			buildProject = "EHS Automation";
			pluginUrlPath = "";
			skippedFails = true;
			undefinedFails = true;
			flashCharts = true;
			runWithJenkins = false;
			artifactsEnabled = false;
			artifactConfig = "";
			highCharts = true;
			
			ReportBuilder reportBuilder = new ReportBuilder(jsonReportFiles, new File(reportPath), pluginUrlPath,
					buildNumber, buildProject, skippedFails, undefinedFails,
					flashCharts, runWithJenkins, artifactsEnabled, artifactConfig, highCharts);
			
			reportBuilder.generateReports();
			objUtilities.copyFileUsingStream(new File(jsonFilePath), new File(reportPath + "/cucumber.json"));
			objUtilities.copyFileUsingStream(new File(xmlFilePath), new File(reportPath + "/cucumber.xml"));
		}
		catch(Exception e)
		{
			e.printStackTrace();
		}
	}
}
