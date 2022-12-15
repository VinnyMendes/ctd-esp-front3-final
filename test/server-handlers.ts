import { rest } from "msw";
import comics from "dh-marvel/test/mocks/comics";
import character from "dh-marvel/test/mocks/character";
import comic from "dh-marvel/test/mocks/comic";
import comicsWithOffsetAndLimit from "dh-marvel/test/mocks/comicsWithOffsetAndLimit";
import comicWithoutStock from "dh-marvel/test/mocks/comicWithoutStock";
import {
  ERROR_CARD_DATA_INCORRECT,
  ERROR_CARD_WITHOUT_AUTHORIZATION,
  ERROR_CARD_WITHOUT_FUNDS,
  ERROR_INCORRECT_ADDRESS,
} from "dh-marvel/services/checkout/checkout.errors";
import {
  invalidAddress,
  validCard,
  withoutAuthorizationCard,
  withoutFundsCard,
} from "dh-marvel/pages/api/checkout.route";

const handlers = [
  rest.get("/marvel/api/comics", async (req, res, ctx) => {
    const query = req.url.searchParams;
    if (query.get("offset") === "10" && query.get("limit") === "5") {
      return res(ctx.json(comicsWithOffsetAndLimit));
    }
    return res(ctx.json(comics));
  }),
  rest.get("/marvel/api/comics/:id", async (req, res, ctx) => {
    const id = req.params.id;
    if (id === "1") return res(ctx.json({ data: { results: [comic] } }));
    if (id === "10")
      return res(ctx.json({ data: { results: [comicWithoutStock] } }));
    return res(ctx.json({ data: { results: [] } }));
  }),
  rest.get("/marvel/api/characters/:id", async (req, res, ctx) => {
    const id = req.params.id;
    if (id === "1") return res(ctx.json({ data: { results: [character] } }));
    return res(ctx.json({ data: { results: [] } }));
  }),
  // new
  rest.post("http://localhost:3000/api/checkout", async (req, res, ctx) => {
    const body = await req.json();
    if (body.customer.address.address2 === invalidAddress) {
      return res(ctx.status(400), ctx.json(ERROR_INCORRECT_ADDRESS));
    }
    if (body.card.number === withoutFundsCard) {
      return res(ctx.status(400), ctx.json(ERROR_CARD_WITHOUT_FUNDS));
    }
    if (body.card.number === withoutAuthorizationCard) {
      return res(ctx.status(400), ctx.json(ERROR_CARD_WITHOUT_AUTHORIZATION));
    }
    if (body.card.number === validCard) {
      return res(ctx.status(400), ctx.json({ body }));
    }
    return res(ctx.status(400), ctx.json(ERROR_CARD_DATA_INCORRECT));
  }),
];

export { handlers };
