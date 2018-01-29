$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("IncomeProtectionQuote.feature");
formatter.feature({
  "line": 1,
  "name": "Verifying and validating the functionality of Income Protection Quote\u0027s page",
  "description": "",
  "id": "verifying-and-validating-the-functionality-of-income-protection-quote\u0027s-page",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Testcase 1 - Validating with valid inputs to verify the happy path",
  "description": "",
  "id": "verifying-and-validating-the-functionality-of-income-protection-quote\u0027s-page;testcase-1---validating-with-valid-inputs-to-verify-the-happy-path",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@yes"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on Income Protection Page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on \"\u003cType of cover\u003e\" for the Type of cover",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I enter \"\u003cThe amount\u003e\" needed to survive if unable to go to work",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I select \"\u003cHow many weeks\u003e\" needed before the insurance pays an income",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select \"\u003cYes or No\u003e\" for smoker",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select \"\u003cEmployment Status\u003e\" for the Employment Status",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select \"\u003cOccupation\u003e\" for occupation",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter \"\u003cAnnual Income\u003e\" the annual income",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I enter \"\u003cday\u003e\" \"\u003cmonth\u003e\" and \"\u003cyear\u003e\" of the Date of birth",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I enter my \"\u003cFirstname\u003e\" as Firstname",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I enter my \"\u003cLastname\u003e\" as Lastname",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I enter my \"\u003cTelephone\u003e\" number",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I enter my \"\u003cEmail\u003e\" address",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I click on \"See My Results\"",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "I should see Hi, \"\u003cFirstname\u003e\" followed by Your \"\u003cType-of-cover\u003e\" Results",
  "keyword": "Then "
});
formatter.examples({
  "line": 22,
  "name": "",
  "description": "",
  "id": "verifying-and-validating-the-functionality-of-income-protection-quote\u0027s-page;testcase-1---validating-with-valid-inputs-to-verify-the-happy-path;",
  "rows": [
    {
      "cells": [
        "Type of cover",
        "The amount",
        "How many weeks",
        "Yes or No",
        "Employment Status",
        "Occupation",
        "Annual Income",
        "day",
        "month",
        "year",
        "Firstname",
        "Lastname",
        "Telephone",
        "Email",
        "Type-of-cover"
      ],
      "line": 24,
      "id": "verifying-and-validating-the-functionality-of-income-protection-quote\u0027s-page;testcase-1---validating-with-valid-inputs-to-verify-the-happy-path;;1"
    },
    {
      "cells": [
        "Accident and Sickness",
        "1200",
        "13 weeks",
        "No",
        "Company Director",
        "Tester",
        "50000",
        "02",
        "02",
        "1972",
        "David",
        "Murray",
        "07722457845",
        "david@test.db",
        "Accident and Sickness"
      ],
      "line": 25,
      "id": "verifying-and-validating-the-functionality-of-income-protection-quote\u0027s-page;testcase-1---validating-with-valid-inputs-to-verify-the-happy-path;;2"
    },
    {
      "cells": [
        "Unemployment Only",
        "1500",
        "8 weeks",
        "Yes",
        "Employed",
        "Accountant",
        "40000",
        "01",
        "01",
        "1971",
        "Alex",
        "Smith",
        "07744774477",
        "alex@test.db",
        "Unemployment"
      ],
      "line": 26,
      "id": "verifying-and-validating-the-functionality-of-income-protection-quote\u0027s-page;testcase-1---validating-with-valid-inputs-to-verify-the-happy-path;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 7493945088,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Testcase 1 - Validating with valid inputs to verify the happy path",
  "description": "",
  "id": "verifying-and-validating-the-functionality-of-income-protection-quote\u0027s-page;testcase-1---validating-with-valid-inputs-to-verify-the-happy-path;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@yes"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on Income Protection Page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on \"Accident and Sickness\" for the Type of cover",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I enter \"1200\" needed to survive if unable to go to work",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I select \"13 weeks\" needed before the insurance pays an income",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select \"No\" for smoker",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select \"Company Director\" for the Employment Status",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select \"Tester\" for occupation",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter \"50000\" the annual income",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I enter \"02\" \"02\" and \"1972\" of the Date of birth",
  "matchedColumns": [
    7,
    8,
    9
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I enter my \"David\" as Firstname",
  "matchedColumns": [
    10
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I enter my \"Murray\" as Lastname",
  "matchedColumns": [
    11
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I enter my \"07722457845\" number",
  "matchedColumns": [
    12
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I enter my \"david@test.db\" address",
  "matchedColumns": [
    13
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I click on \"See My Results\"",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "I should see Hi, \"David\" followed by Your \"Accident and Sickness\" Results",
  "matchedColumns": [
    10,
    14
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "IncomeProtectionQuote.i_am_on_Income_Protection_Page()"
});
formatter.result({
  "duration": 2695743190,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Accident and Sickness",
      "offset": 12
    }
  ],
  "location": "IncomeProtectionQuote.i_click_on_for_the_Type_of_cover(String)"
});
formatter.result({
  "duration": 75166958,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1200",
      "offset": 9
    }
  ],
  "location": "IncomeProtectionQuote.i_enter_needed_to_survive_if_unable_to_go_to_work(String)"
});
formatter.result({
  "duration": 105519727,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "13 weeks",
      "offset": 10
    }
  ],
  "location": "IncomeProtectionQuote.i_select_needed_before_the_insurance_pays_an_income(String)"
});
formatter.result({
  "duration": 305322173,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "No",
      "offset": 10
    }
  ],
  "location": "IncomeProtectionQuote.i_select_for_smoker(String)"
});
formatter.result({
  "duration": 272488896,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Company Director",
      "offset": 10
    }
  ],
  "location": "IncomeProtectionQuote.i_select_for_the_Employment_Status(String)"
});
formatter.result({
  "duration": 258481947,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tester",
      "offset": 10
    }
  ],
  "location": "IncomeProtectionQuote.i_select_for_occupation(String)"
});
formatter.result({
  "duration": 439387041,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "50000",
      "offset": 9
    }
  ],
  "location": "IncomeProtectionQuote.i_enter_the_annual_income(String)"
});
formatter.result({
  "duration": 27381249,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "02",
      "offset": 9
    },
    {
      "val": "02",
      "offset": 14
    },
    {
      "val": "1972",
      "offset": 23
    }
  ],
  "location": "IncomeProtectionQuote.i_enter_and_of_the_Date_of_birth(String,String,String)"
});
formatter.result({
  "duration": 86635923,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "David",
      "offset": 12
    }
  ],
  "location": "IncomeProtectionQuote.i_enter_my_as_Firstname(String)"
});
formatter.result({
  "duration": 28727424,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Murray",
      "offset": 12
    }
  ],
  "location": "IncomeProtectionQuote.i_enter_my_as_Lastname(String)"
});
formatter.result({
  "duration": 30179109,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "07722457845",
      "offset": 12
    }
  ],
  "location": "IncomeProtectionQuote.i_enter_my_number(String)"
});
formatter.result({
  "duration": 33432261,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "david@test.db",
      "offset": 12
    }
  ],
  "location": "IncomeProtectionQuote.i_enter_my_address(String)"
});
formatter.result({
  "duration": 137780704,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "See My Results",
      "offset": 12
    }
  ],
  "location": "IncomeProtectionQuote.i_click_on(String)"
});
formatter.result({
  "duration": 4280121324,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "David",
      "offset": 18
    },
    {
      "val": "Accident and Sickness",
      "offset": 43
    }
  ],
  "location": "IncomeProtectionQuote.i_should_see_Hi_followed_by_Your_Results(String,String)"
});
formatter.result({
  "duration": 20114483550,
  "status": "passed"
});
formatter.before({
  "duration": 5912532725,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "Testcase 1 - Validating with valid inputs to verify the happy path",
  "description": "",
  "id": "verifying-and-validating-the-functionality-of-income-protection-quote\u0027s-page;testcase-1---validating-with-valid-inputs-to-verify-the-happy-path;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@yes"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on Income Protection Page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on \"Unemployment Only\" for the Type of cover",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I enter \"1500\" needed to survive if unable to go to work",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I select \"8 weeks\" needed before the insurance pays an income",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select \"Yes\" for smoker",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select \"Employed\" for the Employment Status",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select \"Accountant\" for occupation",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter \"40000\" the annual income",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I enter \"01\" \"01\" and \"1971\" of the Date of birth",
  "matchedColumns": [
    7,
    8,
    9
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I enter my \"Alex\" as Firstname",
  "matchedColumns": [
    10
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I enter my \"Smith\" as Lastname",
  "matchedColumns": [
    11
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I enter my \"07744774477\" number",
  "matchedColumns": [
    12
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I enter my \"alex@test.db\" address",
  "matchedColumns": [
    13
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I click on \"See My Results\"",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "I should see Hi, \"Alex\" followed by Your \"Unemployment\" Results",
  "matchedColumns": [
    10,
    14
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "IncomeProtectionQuote.i_am_on_Income_Protection_Page()"
});
formatter.result({
  "duration": 3480687382,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Unemployment Only",
      "offset": 12
    }
  ],
  "location": "IncomeProtectionQuote.i_click_on_for_the_Type_of_cover(String)"
});
formatter.result({
  "duration": 266927664,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1500",
      "offset": 9
    }
  ],
  "location": "IncomeProtectionQuote.i_enter_needed_to_survive_if_unable_to_go_to_work(String)"
});
formatter.result({
  "duration": 90982765,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "8 weeks",
      "offset": 10
    }
  ],
  "location": "IncomeProtectionQuote.i_select_needed_before_the_insurance_pays_an_income(String)"
});
formatter.result({
  "duration": 291340677,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Yes",
      "offset": 10
    }
  ],
  "location": "IncomeProtectionQuote.i_select_for_smoker(String)"
});
formatter.result({
  "duration": 258759475,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Employed",
      "offset": 10
    }
  ],
  "location": "IncomeProtectionQuote.i_select_for_the_Employment_Status(String)"
});
formatter.result({
  "duration": 262139897,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Accountant",
      "offset": 10
    }
  ],
  "location": "IncomeProtectionQuote.i_select_for_occupation(String)"
});
formatter.result({
  "duration": 444047540,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "40000",
      "offset": 9
    }
  ],
  "location": "IncomeProtectionQuote.i_enter_the_annual_income(String)"
});
formatter.result({
  "duration": 25461955,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "01",
      "offset": 9
    },
    {
      "val": "01",
      "offset": 14
    },
    {
      "val": "1971",
      "offset": 23
    }
  ],
  "location": "IncomeProtectionQuote.i_enter_and_of_the_Date_of_birth(String,String,String)"
});
formatter.result({
  "duration": 69324093,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Alex",
      "offset": 12
    }
  ],
  "location": "IncomeProtectionQuote.i_enter_my_as_Firstname(String)"
});
formatter.result({
  "duration": 18508978,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Smith",
      "offset": 12
    }
  ],
  "location": "IncomeProtectionQuote.i_enter_my_as_Lastname(String)"
});
formatter.result({
  "duration": 19875268,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "07744774477",
      "offset": 12
    }
  ],
  "location": "IncomeProtectionQuote.i_enter_my_number(String)"
});
formatter.result({
  "duration": 26503916,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "alex@test.db",
      "offset": 12
    }
  ],
  "location": "IncomeProtectionQuote.i_enter_my_address(String)"
});
formatter.result({
  "duration": 47595216,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "See My Results",
      "offset": 12
    }
  ],
  "location": "IncomeProtectionQuote.i_click_on(String)"
});
formatter.result({
  "duration": 3854402944,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Alex",
      "offset": 18
    },
    {
      "val": "Unemployment",
      "offset": 42
    }
  ],
  "location": "IncomeProtectionQuote.i_should_see_Hi_followed_by_Your_Results(String,String)"
});
formatter.result({
  "duration": 20107582711,
  "status": "passed"
});
});