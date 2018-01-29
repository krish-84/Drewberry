package stepDefs;

import java.io.FileInputStream;
import java.util.Properties;

import cucumber.api.java.After;
import cucumber.api.java.Before;




public class testHooks extends baseUtils.commonDriver{
	
	public static Properties prop;
	
	@Before
	public static void setUp() throws Exception {
		prop = new Properties();
		FileInputStream file = new FileInputStream("C:\\Users\\abc\\workspace\\Drewberry\\src\\test\\java\\baseUtils\\commonVariables.properties");
		prop.load(file);
		invokeBrowser();

	}
	
	
//	@After
//	public void tearDown() {
//		driver.quit();
//	}
}
