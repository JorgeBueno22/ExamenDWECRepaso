import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";

export const Inicio = () => {
  const [comidas, setListaComidas] = useState([]);

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then((response) => response.json())
      .then((data) => {
        const comidas = data.categories.map((comida) => ({
          id: comida.idCategory,
          name: comida.strCategory,
          url: comida.strCategoryThumb,
        }));
        setListaComidas(comidas);
      });
  }, []);

  return (
    <>
      {comidas.map((comida) => (
        <Card key={comida.id} sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 350 }}
            image={comida.url}
            title={comida.name}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {comida.name}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      ))}
    </>
  );
};
