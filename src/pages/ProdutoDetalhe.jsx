import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const API_URL = import.meta.env.VITE_API_URL;

export default function ProdutoDetalhe() {
  const { id } = useParams();
  const [produto, setProduto] = useState(null);

  useEffect(() => {
    fetch(`${API_URL}/products/${id}`)
      .then((res) => res.json())
      .then(setProduto);
  }, [id]);

  if (!produto) return <div className="p-6">Carregando...</div>;

  return (
    <div className="p-6 max-w-xl mx-auto">
      <img src={produto.image} alt={produto.title} className="h-48 object-contain mb-4 mx-auto" />
      <h2 className="text-2xl font-bold mb-2">{produto.title}</h2>
      <p className="mb-2">{produto.description}</p>
      <p className="font-bold text-green-700 mb-2">R$ {produto.price}</p>
      <div className="flex items-center gap-1 mb-2">
        <span>⭐</span>
        <span className="text-xs">{produto.rating?.rate}</span>
      </div>
      <p className="text-sm text-gray-500">Categoria: {produto.category}</p>
    </div>
  );
}