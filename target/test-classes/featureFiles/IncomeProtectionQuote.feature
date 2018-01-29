Feature: Verifying and validating the functionality of Income Protection Quote's page

@yes
Scenario Outline: Testcase 1 - Validating with valid inputs to verify the happy path

Given I am on Income Protection Page
When I click on "<Type of cover>" for the Type of cover
And I enter "<The amount>" needed to survive if unable to go to work
And I select "<How many weeks>" needed before the insurance pays an income
And I select "<Yes or No>" for smoker
And I select "<Employment Status>" for the Employment Status
And I select "<Occupation>" for occupation 
And I enter "<Annual Income>" the annual income
And I enter "<day>" "<month>" and "<year>" of the Date of birth
And I enter my "<Firstname>" as Firstname
And I enter my "<Lastname>" as Lastname
And I enter my "<Telephone>" number
And I enter my "<Email>" address
When I click on "See My Results"
Then I should see Hi, "<Firstname>" followed by Your "<Type-of-cover>" Results	

Examples:

| Type of cover         | The amount | How many weeks | Yes or No | Employment Status | Occupation | Annual Income | day | month | year | Firstname | Lastname | Telephone   | Email        | Type-of-cover 		|
| Accident and Sickness	| 1200		 | 13 weeks       | No		  | Company Director  | Tester     | 50000		   | 02  | 02    | 1972 | David     | Murray   | 07722457845 | david@test.db| Accident and Sickness |
| Unemployment Only		| 1500       | 8 weeks        | Yes       | Employed          | Accountant | 40000         | 01  | 01    | 1971 | Alex      | Smith    | 07744774477 | alex@test.db | Unemployment			|
