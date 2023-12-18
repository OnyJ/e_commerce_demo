"use client";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { addShopItem } from "@/redux/actions/shopItemActions";

const AddArticle = () => {
  const dispatch = useDispatch();
  const [article, setArticle] = useState({
    name: "",
    description: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("le formulaire a été soumis");
    console.log(article);

    // Ajout au state global
    dispatch(addShopItem(article));

    // Effacer le state du composant AddArticle
    setArticle({
      name: "",
      description: "",
    });
  };

  const handleChange = (e) => {
    setArticle({
      ...article,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <h2>Créer un article</h2>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          type="text"
          placeholder="Nom de l'article"
          name="name"
        />
        <input
          onChange={handleChange}
          type="text"
          placeholder="Description"
          name="description"
        />
        <button type="submit">Créer</button>
      </form>
    </div>
  );
};

export default AddArticle;
