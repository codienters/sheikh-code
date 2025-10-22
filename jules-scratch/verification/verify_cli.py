from playwright.sync_api import sync_playwright
import time

def run(playwright):
    browser = playwright.chromium.launch(headless=True)
    context = browser.new_context()
    page = context.new_page()

    # Retry a few times to give the server time to start
    for i in range(5):
        try:
            page.goto("http://localhost:3000/")
            break
        except Exception as e:
            print(f"Attempt {i+1} failed: {e}")
            time.sleep(2)

    print("Page content before waiting for sign-in button:")
    print(page.content())

    # Wait for the sign-in button to be visible and then click it
    page.wait_for_selector('text="Sign In"', timeout=60000)

    print("Page content after waiting for sign-in button:")
    print(page.content())

    page.click('text="Sign In"')

    # Fill in the email and password
    page.fill('input[name="identifier"]', "test+clerk_test@test.com")
    page.click('button:has-text("Continue")')
    page.fill('input[name="password"]', "password")
    page.click('button:has-text("Continue")')

    # Wait for the CLI to be visible
    page.wait_for_selector('text="Enter a command..."')

    # Take a screenshot
    page.screenshot(path="jules-scratch/verification/cli_interface.png")

    browser.close()

with sync_playwright() as playwright:
    run(playwright)
