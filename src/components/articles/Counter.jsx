"use client";

import { useEffect, useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("La page a chargé");
  }, []); // crochets vides, signifie au chargement de la page

  useEffect(() => {
    console.log("count a encore changé");
  }, [count]); // useEffect écoute count
  // il sera lancé à chaque changement de count

  return (
    <div>
      <p>Nombre d'articles : {count}</p>
      <button onClick={() => setCount(count + 1)}>Ajouter</button>
      <button onClick={() => setCount(count - 1)}>Retirer</button>
    </div>
  );
};

export default Counter;
