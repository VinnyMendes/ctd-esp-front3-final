import { Button, CardContent, CardMedia, Container, Grid, Typography } from "@mui/material";
import { getComic } from "services/marvel/marvel.service";
import Head from "next/head";
import Link from "next/link";
import { GetStaticPaths, GetStaticProps } from "next";
import { Comic } from "types/comic";
import { priceFormatter } from "dh-marvel/util/formatPrice";
import { getImgSrcFromThumbnail } from "dh-marvel/util/srcImgFromThumbnail";

interface IComicDetailProps {
  comic: Comic;
}

const ComicDetail = ({ comic }: IComicDetailProps) => {
  const comicInStock = !!comic?.stock;
  const imgSrc = `${comic?.thumbnail.path}.${comic?.thumbnail.extension}`;
  const charactersComic = comic?.characters.items.map(item => {
    let getIdFromResourceURI = new URL(item.resourceURI).pathname.split("/")[4];

    return {
      ...item,
      id: getIdFromResourceURI
    };
  });

  if (!comic) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Head>
        <title>{`${comic.title}`}</title>
        <meta name="og:description" content={comic.description} />
        <meta property="og:title" content={`Comic | ${comic.title}`} />
        <meta property="og:image" content={getImgSrcFromThumbnail(comic.thumbnail)} />
      </Head>
      <Container>
        <CardMedia
          height="200px"
          component="img"
          image={imgSrc}
          alt={`Front cover ${comic.title}`}
        />
        <h1>{comic.title}</h1>
        <Typography variant="h6">{comic.description ? comic.description : "Sem descrição :("}</Typography>
        <h2>{priceFormatter(comic.price)}</h2>
        <Link href={`/checkout/${comic.id}`}>
          <Button disabled={!comicInStock} sx={{ maxWidth: "345px" }} fullWidth variant="contained">
            {comicInStock ? "Comprar" : "Sem estoque"}
          </Button>
        </Link>
        <Grid container columnGap={2}>
          {charactersComic.map(character => (
            <CardContent key={character.id}>
              <h3>{character.name}</h3>
              <Link href={`/characters/${character.id}`}>
                <Button variant="outlined">Detalhes</Button>
              </Link>
            </CardContent>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [{ params: { id: "82970" } }],
    fallback: true
  };
};

export const getStaticProps: GetStaticProps = async ({ params }: any) => {
  const comic = await getComic(params.id);

  return {
    props: {
      comic
    },
    revalidate: 60 * 60
  };
};

export default ComicDetail;
