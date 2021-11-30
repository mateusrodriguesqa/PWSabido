class DiscoverPage {
    constructor(page) {
        this.page = page
    }

    async validateCategory() {
        const category = await page.isVisible('//div[contains(@class, "Chip Chip--inverted")][1]');
        expect(category).toBeTruthy();
    }

    async answerTheSeed() {
        await this.page.click('//*[@id="navigation"]/div[2]/main/div/div/div[2]/article[2]/div/div/div/div/div/ul/li[1]/button')
    }

    async answerTheConfidenceLevel() {
        await this.page.click('//button[contains(@class, "feeling-button")][1]')
    }

    async validateExplanation() {
        await page.waitForTimeout(4000)
        const category = await page.isVisible('//p[contains(@class, "SeedViewExplanationItem")]');
        expect(category).toBeTruthy();
        await expect(page).toHaveText('Por que')
    }


    async shareSeed() {
        await this.page.click('//button[contains(@class, "Button ShareButton")]');
        await page.waitForTimeout(1000)
        await expect(page).toHaveText('Whatsapp')
        await expect(page).toHaveText('Facebook')
        await expect(page).toHaveText('Twitter')
        await expect(page).toHaveText('Reddit')
        await expect(page).toHaveText('LinkedIn')
        await this.page.click('//*[@id="navigation"]/div[1]/div[2]/div[5]/div/div[2]/div/button')
    }

    async accessingNudgePopup() {
        const category = await page.isVisible('//button[contains(@class, "Button FeedItemHeader")][1]');
        expect(category).toBeTruthy();
    }

    async goBackToFeed() {
        await this.page.click('//*[@id="navigation"]/div[2]/main/div/div/div[2]/article[2]/div/div/div/button')
    }

    async loginIncentive() {
        await expect(page).toHaveText('Salve seu progresso')
    }
}

module.exports = DiscoverPage