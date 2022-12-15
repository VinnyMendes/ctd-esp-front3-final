import { Alert, Box, Button, CardMedia, Container, FormControl, Paper, Snackbar, TextField, Typography } from "@mui/material";
import axios from "axios";
import LayoutCheckout from "dh-marvel/components/layouts/layout-checkout";
import { CheckoutContext } from "../../context/checkout.context";
import { CheckoutInput } from "dh-marvel/features/checkout/checkout.types";
import { getComic } from "dh-marvel/services/marvel/marvel.service";
import { GetServerSideProps, NextPage } from "next";
import { useRouter } from "next/router";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Comic } from "types/comic";
import { priceFormatter } from "dh-marvel/util/formatPrice";
import { getImgSrcFromThumbnail } from "dh-marvel/util/srcImgFromThumbnail";

interface ICheckoutPageProps {
    comic: Comic;
}

interface Inputs extends CheckoutInput { };

const Checkout: NextPage<ICheckoutPageProps> = ({ comic }: ICheckoutPageProps) => {
    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();
    const [open, setOpen] = useState(false);
    const [messageError, setMessageError] = useState("");
    const router = useRouter();
    const { handleCheckout } = useContext(CheckoutContext);

    const onSubmit = async (data: CheckoutInput) => {
        const payload = {
            ...data,
            card: { ...data.card, number: data.card.number.replace(" ", "") },
            order: {
                name: comic.title,
                image: getImgSrcFromThumbnail(comic.thumbnail),
                price: comic.price
            }
        };

        await axios.post("http://localhost:3000/api/checkout", payload).then(res => {
            handleCheckout(res.data.data);
            router.push("/checkout/purchase-confirmation")
        }).catch(err => {
            setOpen(true);
            setMessageError(err.response.data.message);
        });
    };

    return (
        <LayoutCheckout>
            <Container maxWidth="lg">
                <FormControl noValidate component={"form"} onSubmit={handleSubmit(onSubmit)} >
                    <Paper sx={{ background: "#f0f0f0", padding: 2, rowGap: 2, display: "flex", flexWrap: "wrap" }} elevation={3}>
                        <Typography sx={{ flexBasis: "100%" }}>Dados pessoais: </Typography>
                        <Box>
                            <TextField {...register("customer.name")} label="Nome" type="text" error={!!errors.customer?.name} required />
                            {!!errors.customer?.name && (
                                <Typography
                                    color="red"
                                    gutterBottom
                                    noWrap
                                    variant="body1"
                                    component="div"
                                >
                                    {`${errors.customer?.name.message}`}
                                </Typography>)}
                        </Box>
                        <Box>
                            <TextField {...register("customer.lastname")} label="Sobrenome" type="text" error={!!errors.customer?.lastname} required />
                            {!!errors.customer?.lastname && <Typography
                                color="red"
                                gutterBottom
                                noWrap
                                variant="body1"
                                component="div"
                            >
                                {`${errors.customer?.lastname.message}`}
                            </Typography>}
                        </Box>
                        <Box>
                            <TextField {...register("customer.email")} label="E-mail" type="email" error={!!errors.customer?.email} required />
                            {!!errors.customer?.email && <Typography
                                color="red"
                                gutterBottom
                                noWrap
                                variant="body1"
                                component="div"
                            >
                                {`${errors.customer?.email.message}`}
                            </Typography>}
                        </Box>
                    </Paper>
                    <Paper sx={{ background: "#f0f0f0", padding: 2, rowGap: 2, display: "flex", flexWrap: "wrap" }} elevation={3}>
                        <Typography sx={{ flexBasis: "100%" }}>Endereço: </Typography>
                        <Box>
                            <TextField {...register("customer.address.address1")} label="Endereço" type="text" error={!!errors.customer?.address?.address1} required />
                            {!!errors.customer?.address?.address1 && <Typography
                                color="red"
                                gutterBottom
                                noWrap
                                variant="body1"
                                component="div"
                            >
                                {`${errors.customer?.address?.address1.message}`}
                            </Typography>}
                        </Box>
                        <Box>
                            <TextField {...register("customer.address.address2")} label="Apartamento, andar, etc" type="text" error={!!errors.customer?.address?.address2} />
                        </Box>
                        <Box>
                            <TextField {...register("customer.address.city")} label="Cidade" type="text" error={!!errors.customer?.address?.city} required />
                            {!!errors.customer?.address?.city && <Typography
                                color="red"
                                gutterBottom
                                noWrap
                                variant="body1"
                                component="div"
                            >
                                {`${errors.customer?.address?.city.message}`}
                            </Typography>}
                        </Box>
                        <Box>
                            <TextField {...register("customer.address.state")} label="Estado" type="text" error={!!errors.customer?.address?.state} required />
                            {!!errors.customer?.address?.state && <Typography
                                color="red"
                                gutterBottom
                                noWrap
                                variant="body1"
                                component="div"
                            >
                                {`${errors.customer?.address?.state.message}`}
                            </Typography>}
                        </Box>
                        <Box>
                            <TextField {...register("customer.address.zipCode")} label="CEP" type="text" error={!!errors.customer?.address?.zipCode} required />
                            {!!errors.customer?.address?.zipCode && <Typography
                                color="red"
                                gutterBottom
                                noWrap
                                variant="body1"
                                component="div"
                            >
                                {`${errors.customer?.address?.zipCode.message}`}
                            </Typography>}
                        </Box>
                    </Paper>
                    <Paper sx={{ background: "#f0f0f0", padding: 2, rowGap: 2, display: "flex", flexWrap: "wrap" }} elevation={3}>
                        <Typography sx={{ flexBasis: "100%" }}>Dados de pagamento: </Typography>
                        <Box>
                            <TextField {...register("card.number")} label="Nº do cartão" inputProps={{ maxLength: 19 }} type="tel" inputMode="numeric" error={!!errors.card?.number} required />
                            {!!errors.card?.number && <Typography
                                color="red"
                                gutterBottom
                                noWrap
                                variant="body1"
                                component="div"
                            >
                                {`${errors.card.number.message}`}
                            </Typography>}
                        </Box>
                        <Box>
                            <TextField {...register("card.nameOnCard")} label="Nome no cartão" type="text" error={!!errors.card?.nameOnCard} required />
                            {!!errors.card?.nameOnCard && <Typography
                                color="red"
                                gutterBottom
                                noWrap
                                variant="body1"
                                component="div"
                            >
                                {`${errors.card?.nameOnCard?.message}`}
                            </Typography>}
                        </Box>
                        <Box>
                            <TextField {...register("card.expDate")} label="Validade" type="text" error={!!errors.card?.expDate} required />
                            {!!errors.card?.expDate && <Typography
                                color="red"
                                gutterBottom
                                noWrap
                                variant="body1"
                                component="div"
                            >
                                {`${errors.card?.expDate?.message}`}
                            </Typography>}
                        </Box>
                        <Box>
                            <TextField {...register("card.cvc")} inputProps={{ maxLength: 3, "data-testid":"cvc" }} label="CVC" type="password" error={!!errors.card?.cvc} required />
                            {!!errors.card?.cvc && <Typography
                                color="red"
                                gutterBottom
                                noWrap
                                variant="body1"
                                component="div"
                            >
                                {`${errors.card?.cvc?.message}`}
                            </Typography>}
                        </Box>
                    </Paper>
                    <Button type="submit" variant="contained"  >Confirmar</Button>
                </FormControl>
            </Container>

            <Container maxWidth="sm">
                <Paper sx={{ background: "#f0f0f0", padding: 2, display: "flex", flexDirection: "column", rowGap: 2 }} elevation={3}>
                    <CardMedia
                        component="img"
                        src={getImgSrcFromThumbnail(comic.thumbnail)}
                        sx={{ width: "200px" }}
                    />
                    <Typography fontSize={18} ><strong>Título:</strong> {comic.title}</Typography>
                    <Typography fontSize={18} ><strong>Preço:</strong> {priceFormatter(comic.price)}</Typography>
                </Paper>
            </Container>
            <Snackbar
                anchorOrigin={{ vertical: "top", horizontal: "right" }}
                open={open}
                autoHideDuration={2000}
                key={1}
                data-testid="alert-error"
                onClose={() => setOpen(false)}
            >
                <div>
                    <Alert severity="error">{messageError}</Alert>
                </div>
            </Snackbar>
        </LayoutCheckout >
    )
}

export default Checkout;

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
    const { id } = query;
    const comic = await getComic(Number(id))

    return {
        props: {
            comic
        }
    }
}