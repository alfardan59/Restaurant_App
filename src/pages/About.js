import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Layout from "../components/Layout/Layout";

const About = () => {
  return (
    <Layout>
      <Box sx={{
        my:15,
        textAlign:"center",
        "& h4":{
          fontWeight:"bold",
          my:2,
          fontSize:"2rem"
        },
        "& p":{
          textAlign:"justify"
        },
        "@media (max-width:600px)":{
          mt:0,
          "& h4":{
            fontSize: "1.5rem",
          },
          
        }
      }}>
        <Typography variant="h4">Welcome to Anna Brahma</Typography>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum soluta
          dicta deserunt sequi earum nemo blanditiis sed quam magnam, vero at,
          commodi amet dolor? Nobis voluptatibus expedita laborum ut excepturi
          earum atque. Velit minus fugiat minima excepturi debitis corporis. Nam
          distinctio provident libero eos vitae asperiores impedit laborum
          placeat commodi!
        </p>
        <br />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus eos
          esse provident. Quam, nobis? Placeat, voluptates inventore. Commodi
          sed, hic architecto eveniet iste dolores officiis ducimus consectetur
          perspiciatis sequi accusamus voluptatibus impedit nihil vel harum
          repellat voluptatem, eius sit sunt iusto facilis magni maiores.
          Explicabo quidem nulla recusandae, blanditiis incidunt quae impedit
          obcaecati accusantium aut architecto rerum vitae enim neque deleniti
          velit, nihil quibusdam rem. Beatae facere dolore error incidunt nobis
          autem ipsa minus illum fugit, fuga ipsum tempore veritatis minima
          quaerat dolorem inventore itaque debitis. Quod quis, laborum beatae
          odio mollitia, facilis in nam ullam atque architecto aspernatur
          tenetur!
        </p>
      </Box>
    </Layout>
  );
};

export default About;
