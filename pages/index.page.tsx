import { Grid, Pagination, Stack } from "@mui/material";
import Card from "dh-marvel/components/card/card";
import BodySingle from "dh-marvel/components/layouts/body/single/body-single";
import { getComics } from "dh-marvel/services/marvel/marvel.service";
import Head from "next/head";
import { ChangeEvent, useEffect, useState } from "react";

interface IComic {
  id: number;
  title: string;
  thumbnail: {
    path: string;
    extension: string;
  }
}

const Index = () => {
  const [pagina, setPagina] = useState(1);
  const [total, setTotal] = useState(0);
  const [comics, setComics] = useState<IComic[]>();

  const handleChange = (event: ChangeEvent<unknown>, value: number) => {
    setPagina(value);
  };

  useEffect(() => {
    (async () => {
      const data = await getComics((pagina - 1) * 12, 12).then(res => {
        try{
          setTotal(Number((res.data.total / 12).toFixed()));
        }catch(e){console.log(e)}
        
        return res.data.results.map(({ title, id, thumbnail }: IComic) => {
          return { title, id, thumbnail };
      })
    })
      setComics(data)
    })()
    
  }, [pagina])

  return (
    <>
      <Head>
        <title>Heróis</title>
        <meta name="description" content="Project for checkpoint DH" />
        <meta name="og:description" content="Project for checkpoint DH" />
        <meta property="og:title" content="List Comics" />
        <meta property="og:image" content="/favicon.ico" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <BodySingle title={"Heróis!"}>
      <Stack spacing={2}>
        <Pagination count={total} page={pagina} onChange={handleChange} variant="outlined" color="primary" />
      </Stack>
        <Grid container justifyContent="center" spacing={2}>
          {comics &&
            comics.map((comic) => (
              <Grid item key={comic.id}>
                <Card
                  id={comic.id}
                  titulo={comic.title}
                  src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
                />
              </Grid>
            ))}
        </Grid>
      </BodySingle>
    </>
  );
};

export default Index;
