package testRunner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions (dryRun = false, features = "C:/Users/abc/workspace/Drewberry/src/test/java/featureFiles",  format = {"pretty", "html:Target/cucumber-pretty"}, monochrome = true, glue = "stepDefs", tags = {"@yes", "~@no"})


public class testRunner {
		
	

}
