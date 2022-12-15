import { render, screen } from "@testing-library/react"
import { CheckoutContext } from "dh-marvel/context/checkout.context"
import SuccessPage from "./purchase-confirmation.page"
const state = {
    "customer": {
        "name": "Vinny",
        "lastname": "Mendes",
        "email": "vms@gmail.com",
        "address": {
            "address1": "Bsb",
            "address2": "bsb",
            "city": "bBs",
            "state": "bsb",
            "zipCode": "bsbssbsv"
        }
    },
    "card": {
        "number": "2022 2022 2022 2022",
        "nameOnCard": "dasd",
        "expDate": "03/2030",
        "cvc": "911"
    },
    "order": {
        "name": "Official Handbook of the Marvel Universe (2004) #12 (SPIDER-MAN)",
        "image": "http://i.annihil.us/u/prod/marvel/i/mg/b/40/4bc64020a4ccc.jpg",
        "price": 72
    }
}
describe("Testing component success", () => {
    it("Should render component success", () => {
        const handleCheckout = jest.fn()
        render(
            <CheckoutContext.Provider value={{ state, handleCheckout }} >
                <SuccessPage />
            </CheckoutContext.Provider>
        )
        const successMessage = screen.getByText("Aproveite sua compra!");
        expect(successMessage).toBeInTheDocument();
    })
    it("Should not render component sucess without comic purchased", () => {
        const handleCheckout = jest.fn()
        render(
            <CheckoutContext.Provider value={{ state: null, handleCheckout }} >
                <SuccessPage />
            </CheckoutContext.Provider>
        )
        const errorMessage = screen.getByText("Tente novamente mais tarde...");
        expect(errorMessage).toBeInTheDocument();
    })
    it("Should render component sucess without comic purchased", () => {
        const handleCheckout = jest.fn()

        const checkoutWithoutComplement = {
            "customer": {
                "name": "Vinny",
                "lastname": "Mendes",
                "email": "vms@gmail.com",
                "address": {
                    "address1": "Bsb",
                    "address2": "bsb",
                    "city": "bBs",
                    "state": "bsb",
                    "zipCode": "bsbssbsv"
                }
            },
            "card": {
                "number": "2022 2022 2022 2022",
                "nameOnCard": "dasd",
                "expDate": "03/2030",
                "cvc": "911"
            },
            "order": {
                "name": "Official Handbook of the Marvel Universe (2004) #12 (SPIDER-MAN)",
                "image": "http://i.annihil.us/u/prod/marvel/i/mg/b/40/4bc64020a4ccc.jpg",
                "price": 72
            }
        }
        render(
            <CheckoutContext.Provider value={{ state: checkoutWithoutComplement, handleCheckout }} >
                <SuccessPage />
            </CheckoutContext.Provider>
        )
        const errorMessage = screen.getByText("Estrada da Vitória, São Luís, MA");
        expect(errorMessage).toBeInTheDocument();
    })
})