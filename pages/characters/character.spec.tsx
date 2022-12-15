import { render, screen } from "@testing-library/react"
import CharacterDetail from "./[id].page"

describe("Página de detalhes", () => {
    it("Deveria renderizar apenas o texto de carregando", () => {
        //@ts-ignore
        render(<CharacterDetail character={null} />);
        expect(screen.getByText(/loading.../i)).toBeInTheDocument();
    })
})