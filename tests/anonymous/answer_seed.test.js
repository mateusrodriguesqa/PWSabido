const env = require('../../src/settings/config')
const DiscoverPage = require('../../src/pages/DiscoverPage')

jest.setTimeout(110 * 3000)

beforeAll(async () => {
    await page.goto(env.url)
})

describe("Answer Seed", () => {
    const discoverPage = new DiscoverPage(page)

    it('Can see the category of a seed', async () => {
        await discoverPage.validateCategory()
    })

    it('Can answer a seed directly on feed', async () => {
        await discoverPage.answerTheSeed()
    })

    it('Can answer the confidence level', async () => {
        await discoverPage.answerTheConfidenceLevel()
    })

    it('Can see the explanation and seed expands', async () => {
        await discoverPage.validateExplanation()
    })

    it('Can share a seed', async () => {
        await discoverPage.answerTheSeed()
        await discoverPage.shareSeed()
    })

    it('Following the author shows nudge popup', async () => {
        await discoverPage.accessingNudgePopup()
    })

    it('Can close expanded seed', async () => {
        await discoverPage.goBackToFeed()
    })

    /*     it('Displays incentive sign up block on first seed answered', async () => {
        - cenário defasado
        }) */

    it('Follows to login on signup incentive', async () => {
        await discoverPage.loginIncentive()
    })
})