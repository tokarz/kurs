from telnetlib import EC
from selenium.webdriver.support import expected_conditions
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.wait import WebDriverWait

class RestLog:

    def __init__(self, driver, email, password):
        self.driver = driver
        self.email = email
        self.password = password

    def Open(self):
        self.driver.get("http://localhost:4200/login")
        self.driver.maximize_window()

        tekst = self.driver.find_element_by_css_selector("div[class='content'] h3:nth-child(1)").text
        assert "Login" in tekst

    def Login(self):

        self.driver.find_element_by_id("exampleInputEmail1").send_keys(self.email)
        self.driver.find_element_by_id("exampleInputPassword1").send_keys(self.password)

        self.driver.find_element_by_css_selector("button[class='btn btn-primary']").click()


    def Logout(self):
        self.driver.implicitly_wait(3)
        self.driver.find_element_by_css_selector("a[class='nav-link'").click()

    def AssertNot(self):
        try:
            self.WebDriverWait(self.driver, 10).until(EC.presence_of_element_located((By.CSS_SELECTOR, "content")))
            not_found = False
        except:
            not_found = True

        assert not_found

    def Assert(self):
        self.driver.implicitly_wait(3)
        tekst = self.driver.find_element_by_css_selector("div[class='content'] h3:nth-child(1)").text
        assert "Login" in tekst

driver = webdriver.Chrome(executable_path="C:\Selenium drivers\chromedriver.exe")
test1 = RestLog(driver, 'fly@rychupeja.com', 'admin')
test1.Open()
test1.Login()
test1.AssertNot()
test1.Logout()
test1.Assert()
test2 = RestLog(driver, 'twojastara@tede.pl', 'dupa')
test2.Login()
test2.Assert()