import { Accordion, AccordionSummary, Typography, AccordionDetails, Container } from '@mui/material'
import { ExpandMore } from '@mui/icons-material';
import React from 'react'
import { faqsData } from 'dh-marvel/components/faqs/faqsData';
import Head from 'next/head';
import { Box } from '@mui/system';

const Faq = () => {
  return (
    <>
    <Head>
        <title>FAQ | List Comics</title>
        <meta name="description" content="FAQ's Comics" />
        <meta name="og:description" content="FAQ's Comics" />
        <meta property="og:title" content="FAQ | List Comics" />
        <meta property="og:image" content="/favicon.ico" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box mt={5}>
        <Container maxWidth='sm'>
          {faqsData.map(faq => (
            <Accordion key={faq.id}>
              <AccordionSummary
                expandIcon={<ExpandMore />}
                aria-controls={`panel${faq.id}a-content`}
                id={`panel${faq.id}a-header`}
              >
                <Typography>{faq.question}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>{faq.answer}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Container>
      </Box>
    </>
  )
}

export default Faq