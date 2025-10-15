import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const secoes = [
  { nome: "Eletrônicos", api: "/products/category/electronics" },
  { nome: "Roupas", api: "/products/category/men's clothing" },
  { nome: "Joias", api: "/products/category/jewelery" },
];

const URL_API = import.meta.env.VITE_API_URL;

function CardProduto({ produto }) {
  return (
    <Link to={`/produto/${produto.id}`} className="block bg-white rounded shadow p-4 text-center">
      <img src={produto.image} alt={produto.title} className="h-32 mx-auto mb-2" />
      <div>{produto.title}</div>
      <div>R$ {produto.price}</div>
      <div>⭐ {produto.rating?.rate}</div>
    </Link>
  );
}

export default function Home() {
  const [produtos, setProdutos] = useState({});

  useEffect(() => {
    secoes.forEach((secao) => {
      fetch(URL_API + secao.api)
        .then((r) => r.json())
        .then((dados) => setProdutos((prev) => ({ ...prev, [secao.nome]: dados })));
    });
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Bem-vindo ao Fiap Commerce!</h2>
      {secoes.map((secao) => (
        <div key={secao.nome} className="mb-8">
          <div className="bg-black rounded px-4 py-2 mb-2">
            <div className="text-xl font-bold text-yellow-300">{secao.nome}</div>
            <div className="text-sm">Produtos em destaque</div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {(produtos[secao.nome] || []).slice(0, 4).map((produto) => (
              <CardProduto key={produto.id} produto={produto} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
