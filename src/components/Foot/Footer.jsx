import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import { Facebook, Instagram, Telegram ,LinkedIn } from "@mui/icons-material";
import { Box } from "@mui/material";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor:"blue",
        mt :6

      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom sx={{color:"white"}}>
              About Us
            </Typography>
            <Typography variant="body2" color={"white"}>
            Our mission is to make quality tech
          education accessible to everyone, regardless of their background or financial constraints
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color={"white"} gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="body2" color={"white"} >
              Banglore,HSR Layout 
            </Typography>
            <Typography variant="body2" color={"white"} >
              Email: letcode@example.com
            </Typography>
            <Typography variant="body2" color={"white"} >
              Phone: +91 9798316854
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color={"white"}  gutterBottom>
              Follow Us
            </Typography>
            <Link href="https://www.facebook.com/letscodeforever" color="inherit">
              <Facebook />
            </Link>
            <Link
              href="https://www.instagram.com/lets__code/"
              color="inherit"
              sx={{ pl: 1, pr: 1 }}
            >
              <Instagram />
            </Link>
            <Link href="https://t.me/offcampusjobsupdatess" color="inherit">
              <Telegram />
            </Link>
            <Link href="https://www.linkedin.com/company/lets-code-forever/" color="inherit">
              <LinkedIn />
            </Link>
          </Grid>
        </Grid>
        
      </Container>
    </Box>
  );
}