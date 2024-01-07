from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.firefox.options import Options as FirefoxOptions
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

def data(product_url):
    driver_path = "/usr/local/bin/geckodriver"

    firefox_options = FirefoxOptions()
    firefox_options.add_argument("--headless")

    service = webdriver.firefox.service.Service(executable_path=driver_path)
    driver = webdriver.Firefox(service=service, options=firefox_options)
    wait = WebDriverWait(driver, 10)
   
    driver.get(product_url)
    WebDriverWait(driver, 10).until(EC.presence_of_element_located((By.XPATH, "//div[@class='comment-text']")))

    for _ in range(8):
        comments = driver.find_elements(By.XPATH, "//div[@class='comment-text']")
        comment_texts = [comment.text for comment in comments]
        driver.execute_script("window.scrollTo(0, document.body.scrollHeight);")
        wait.until(EC.presence_of_element_located((By.XPATH, "//div[@class='comment-text']")))

    driver.quit()
    return comment_texts

