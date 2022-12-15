import { render, screen } from "@testing-library/react"
import Faq from "./faq.page"

describe("Testa o faq", () => {
    it("Renderiza o faq", () => {
        render(<Faq />);
        const title = screen.getByText("Quanto tempo demoram as entregas?")
        expect(title).toBeInTheDocument()
    })
})