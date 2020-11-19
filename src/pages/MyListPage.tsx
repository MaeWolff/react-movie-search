import React from "react";

export default function MyListPage() {
  const favorisList: any = JSON.parse(localStorage.getItem("favoris") || "[]");

  favorisList?.map((item) => {
    const movieId = item;
    return movieId;
  });

  return <div></div>;
}
