import React from "react";
import { List } from "@mui/material";
import { ListItem } from "@mui/material";
import { ListItemAvatar } from "@mui/material";
import { Avatar } from "@mui/material";
import { ListItemText } from "@mui/material";
import { useState } from "react";
import { useEffect } from "react";

export const Comidas = () => {
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
      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        {comidas.map((comida) => (
          <ListItem key={comida.id}>
            <ListItemAvatar>
              <Avatar alt="" src={comida.url} sx={{ width: 66, height: 66 }} />
            </ListItemAvatar>
            <ListItemText primary={comida.name} />
          </ListItem>
        ))}
      </List>
    </>
  );
};
