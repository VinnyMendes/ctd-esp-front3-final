import Link from "next/link";
import { useState, MouseEvent } from "react";
import { Button, Card, CardActions, CardContent, CardMedia, Popover, Typography } from "@mui/material";

interface card {
  titulo: string;
  src: string;
  id: number;
}

const CardWrapper = ({ src, titulo, id }: card) => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const handlePopoverOpen = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <Card sx={{ width: "400px", backgroundColor: "#ff2929" }}>
      <CardMedia
        component="img"
        height="300px"
        image={src}
        alt={`front cover comic ${titulo}`}
      />
      <CardContent>
        <Typography
          aria-owns={open ? "mouse-over-popover" : undefined}
          aria-haspopup="true"
          onMouseEnter={handlePopoverOpen}
          onMouseLeave={handlePopoverClose}
          gutterBottom
          noWrap
          variant="h5"
          component="div"
          sx={{color:'white'}}
        >
          {titulo}
        </Typography>
        <Popover
          id="mouse-over-popover"
          sx={{
            pointerEvents: "none"
          }}
          open={open}
          disableScrollLock
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left"
          }}
          onClose={handlePopoverClose}
          disableRestoreFocus
        >
          <Typography sx={{ p: 1 }}>{titulo}</Typography>
        </Popover>
      </CardContent>
      <CardActions>
        <Button sx={{ background: '#65b5fc', color: "white" }} size="medium" variant="contained">
          Comprar
        </Button>
        <Link href={`/comics/${id}`}>
          <Button sx={{ background: '#e7fbff', color: "black" }} size="medium" variant="contained">
            Ver detalhes
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default CardWrapper;
