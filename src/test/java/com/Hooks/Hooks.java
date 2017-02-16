/*******************************************************************************
 * Copyright (c) 2017 Shreyas Patil.
 * All rights reserved. This framework or any portion thereof
 * may not be reproduced or used in any manner whatsoever
 * without the express written permission from me.
 *
 * Contributors:
 *     Shreyas Patil
 *******************************************************************************/
package com.Hooks;

import com.generic.StepBase;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;

public class Hooks {
	public Scenario cScenrio;
	StepBase objStepBase = new StepBase();
	
	@Before
	public void applyHook(Scenario scenario)
	{
		System.out.println("in before hook");
		this.cScenrio = scenario;
		objStepBase.setUp(scenario);
	}
	
	@After
	public void removeHook(Scenario scenario)
	{
		objStepBase.tearDown(scenario);
	}

}
