import { render, screen } from "@testing-library/react";
import Index from "dh-marvel/pages/index.page";
import { server } from "dh-marvel/test/server";

describe("IndexPage", () => {
  describe("first load", () => {
    beforeAll(() => server.listen())
    afterAll(() => server.close())
    it("renderiza o titulo", () => {
      server.use()
      render(<Index />);
      const title = screen.getByText("Heróis!");
      expect(title).toBeInTheDocument();
    });
  });
});
