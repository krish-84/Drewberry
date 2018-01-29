package stepDefs;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebElement;
import baseUtils.commonDriver;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import stepDefs.testHooks;

public class IncomeProtectionQuote extends commonDriver {

	@Given("^I am on Income Protection Page$")
	public void i_am_on_Income_Protection_Page() throws Exception {
		driver.get(testHooks.prop.getProperty("IncomeProtectionQuotePage"));

	}

	@When("^I click on \"([^\"]*)\" for the Type of cover$")
	public void i_click_on_for_the_Type_of_cover(String arg1) throws Exception {
		WebElement element = driver.findElement(By.xpath("//*[@id='IP_Policy_Type__c']"));
		commonDriver.selectfromDD(element, arg1);

	}

	@When("^I enter \"([^\"]*)\" needed to survive if unable to go to work$")
	public void i_enter_needed_to_survive_if_unable_to_go_to_work(String arg1) throws Exception {
		driver.findElement(By.xpath("//*[@id='IP_Monthly_Benefit__c']")).clear();
		driver.findElement(By.xpath("//*[@id='IP_Monthly_Benefit__c']")).sendKeys(arg1);
	}

	@When("^I select \"([^\"]*)\" needed before the insurance pays an income$")
	public void i_select_needed_before_the_insurance_pays_an_income(String arg1) throws Exception {
		WebElement element = driver.findElement(By.xpath("//*[@id='IP_Deferred_Period__c']"));
		commonDriver.selectfromDD(element, arg1);

	}

	@When("^I select \"([^\"]*)\" for smoker$")
	public void i_select_for_smoker(String arg1) throws Exception {
		WebElement element = driver.findElement(By.xpath("//*[@id='Smoker_Status__c']"));
		commonDriver.selectfromDD(element, arg1);

	}

	@When("^I select \"([^\"]*)\" for the Employment Status$")
	public void i_select_for_the_Employment_Status(String arg1) throws Exception {
		WebElement element = driver.findElement(By.xpath("//*[@id='Employment_Status__c']"));
		commonDriver.selectfromDD(element, arg1);

	}

	@When("^I select \"([^\"]*)\" for occupation$")
	public void i_select_for_occupation(String arg1) throws Exception {
		driver.findElement(By.cssSelector(".chosen-single > span:nth-child(1)")).click();
		String path = "/html/body/div[1]/div[1]/div[1]/article/main/form/div[2]/div[1]/div[1]/div[5]/div[2]/span/div[1]/div/div/input";
		driver.findElement(By.xpath(path)).sendKeys(arg1);
		driver.findElement(By.xpath(path)).sendKeys(Keys.RETURN);

	}

	@When("^I enter \"([^\"]*)\" the annual income$")
	public void i_enter_the_annual_income(String arg1) throws Exception {
		driver.findElement(By.xpath("//*[@id='Gross_Annual_Income__c']")).sendKeys(arg1);

	}

	@When("^I enter \"([^\"]*)\" \"([^\"]*)\" and \"([^\"]*)\" of the Date of birth$")
	public void i_enter_and_of_the_Date_of_birth(String arg1, String arg2, String arg3) throws Exception {
		driver.findElement(By.cssSelector(".date-dd")).sendKeys(arg1);
		driver.findElement(By.cssSelector(".date-mm")).sendKeys(arg2);
		driver.findElement(By.cssSelector(".date-yyyy")).sendKeys(arg3);

	}

	@When("^I enter my \"([^\"]*)\" as Firstname$")
	public void i_enter_my_as_Firstname(String arg1) throws Throwable {
		driver.findElement(By.xpath("//*[@id='first_name']")).sendKeys(arg1);
	}

	@When("^I enter my \"([^\"]*)\" as Lastname$")
	public void i_enter_my_as_Lastname(String arg1) throws Throwable {
		driver.findElement(By.xpath("//*[@id='last_name']")).sendKeys(arg1);
	}

	@When("^I enter my \"([^\"]*)\" number$")
	public void i_enter_my_number(String arg1) throws Exception {
		driver.findElement(By.xpath("//*[@id='phone']")).sendKeys(arg1);

	}

	@When("^I enter my \"([^\"]*)\" address$")
	public void i_enter_my_address(String arg1) throws Exception {
		driver.findElement(By.xpath("//*[@id='email']")).sendKeys(arg1);

	}

	@When("^I click on \"([^\"]*)\"$")
	public void i_click_on(String arg1) throws Throwable {
		driver.findElement(By.id("getquote")).click();

	}

	@Then("^I should see Hi, \"([^\"]*)\" followed by Your \"([^\"]*)\" Results$")
	public void i_should_see_Hi_followed_by_Your_Results(String arg1, String arg2) throws Throwable {
		commonDriver.wait(15);
		WebElement msg = driver.findElement(By.cssSelector(".hi"));
		commonDriver.waituntil(msg);
		commonDriver.wait(5);
		String HiText = driver.findElement(By.cssSelector(".hi")).getText();
		String Results = driver.findElement(By.cssSelector("span.title:nth-child(2)")).getText();
		Assert.assertTrue(HiText.contains(arg1));
		Assert.assertTrue(Results.contains(arg2));
		
	}

}