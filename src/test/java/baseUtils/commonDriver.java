package baseUtils;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;

public class commonDriver {

		protected static WebDriver driver;
		public static WebElement element;
		public static WebDriverWait wait;
		
		//common method to invoke the browser
		public static void invokeBrowser() throws Exception {
			System.setProperty("webdriver.gecko.driver", "C:/Users/abc/Downloads/geckodriver.exe");
			driver = new FirefoxDriver();
			driver.manage().timeouts().pageLoadTimeout(10001, TimeUnit.SECONDS);
			driver.manage().timeouts().implicitlyWait(801, TimeUnit.SECONDS);
		}
		public static void wait(int seconds) throws InterruptedException {
			Thread.sleep(seconds * 1000);
		}

		public static void waituntil(WebElement element) {
			wait = new WebDriverWait(driver, 10);
			wait.until(ExpectedConditions.elementToBeClickable(element));

		}
		
		public static void selectfromDD(WebElement element, String abc){
			Select dropdown = new Select(element);
			dropdown.selectByVisibleText(abc);
		}

}
