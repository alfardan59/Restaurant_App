import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React from "react";
import Layout from "../components/Layout/Layout";
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import EmailIcon from '@mui/icons-material/Email';

const Contact = () => {
  return (
    <Layout>
      <Box
        sx={{
          my: 5,
          ml: 10,
          "& h4": {
            fontWeight: "bold",
            mb: 2,
          },
        }}
      >
        <Typography variant="h4">Contact Anna Brahma</Typography>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum amet
          provident quisquam enim obcaecati quo quidem veniam esse, reiciendis
          quia at hic, necessitatibus dignissimos mollitia, praesentium dolorem!
          Molestiae, quidem corrupti.
        </p>
      </Box>
      <Box sx={{m:3, width:"600px", ml:10, "@media (max-width:600px)":{
        width: "300px",
      }}}>
        <TableContainer component={Paper}>
          <Table arial-aria-label="Contact Table">
            <TableHead>
              <TableRow>
                <TableCell sx={{bgcolor:'black',color:'white',
              }} align="center">Contact Details</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                  <SupportAgentIcon sx={{color:'red',pt:1}}/> (+91) 12345678 (TollFree Number)
                </TableCell>
              </TableRow>
              <TableRow>
              <TableCell>
                  <EmailIcon sx={{color:'skyblue',pt:1}}/> help@annabrahma.com
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Layout>
  );
};

export default Contact;
