import { CardMedia, Container, Paper, Typography } from '@mui/material';
import { CheckoutContext } from 'dh-marvel/context/checkout.context';
import { useContext } from 'react';
import { priceFormatter } from 'dh-marvel/util/formatPrice';

const SuccessPage = () => {
  const { state } = useContext(CheckoutContext);

  if (!state) {
    return <h3>Tente novamente mais tarde...</h3>;
  }

  const { customer, order } = state;
  const { address } = customer;
  return (
    <Container >
      <Paper sx={{ backgroundColor: "#f0f0f0", height: "100%", margin: "20px 0", padding: "0 20px" }} elevation={3}>
        <Typography textAlign="center" fontSize={24} fontWeight="bold">Aproveite sua compra!</Typography>
        <Paper sx={{ backgroundColor: "#fff" }}>
          <Typography textAlign="center" fontSize={22} fontWeight="bold">Detalhes da compra</Typography>
          <Container sx={{ display: "flex", flexWrap: "wrap", padding: "20px" }}>
            <Container sx={{ width: "auto", marginBottom: "10px" }}>
              <Typography variant="h4" fontWeight="bold">Quadrinho</Typography>
              <CardMedia component="img" sx={{ width: "250px", margin: "0 auto" }}  src={order.image} />
              <Typography fontSize={18} >Nome:{order.name}</Typography>
              <Typography fontSize={18} >Preço:{priceFormatter(order.price)}</Typography>
            </Container>
            <Container  >
              <Typography variant="h4" fontWeight="bold">Dados do comprador</Typography>
              <Typography fontSize={18} >Nome:{customer.name}</Typography>
              <Typography fontSize={18} >Sobrenome:{customer.lastname}</Typography>
              <Typography fontSize={18} >Endereço de entrega:
                {address.address1},
                {!!address.address2 ? ` ${address.address2}, ${address.city}, ${address.state}` : ` ${address.city},  ${address.state}`}</Typography>
            </Container>
          </Container>
        </Paper>
      </Paper>
    </Container>
  )
}

export default SuccessPage;