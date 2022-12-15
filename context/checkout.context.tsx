import { CheckoutInput } from "dh-marvel/features/checkout/checkout.types";
import { createContext, ReactNode, useState } from "react";

type defaultValue = {
    state: CheckoutInput | null;
    handleCheckout: (checkout: CheckoutInput) => void;
};

export const CheckoutContext = createContext({} as defaultValue);

interface IContextProvider {
    children: ReactNode;
}

export const CheckoutContextProvider = ({ children }: IContextProvider) => {
    const [state, setState] = useState<CheckoutInput | null>(null);

    const handleCheckout = (state: CheckoutInput) => {
        setState(state);
    }

    return (
        <CheckoutContext.Provider value={{ state, handleCheckout }}>
            {children}
        </CheckoutContext.Provider>
    )
}