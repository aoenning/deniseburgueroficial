function burgers() {
  // Dados dos Hambúrgueres
  const cardapioBurges = [
    {
      id: 1,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8fvpBLnrPMG1_vB3D29Iq4LYtbVLgvmCb_g&s",
      nome: "CHURRASBURGER",
      detalhe:
        "PÃO HUMBURGUES, MOLHO RANCH, HUMBURGUER e CHEDDAR ou MUSSARELLA",
      preco: 15.99,
    },
    {
      id: 2,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8fvpBLnrPMG1_vB3D29Iq4LYtbVLgvmCb_g&s",
      nome: "CATUPYBACON ",
      detalhe:
        "PÃO HUMBURGUES, MOLHO RANCH, HUMBURGUER e CHEDDAR ou MUSSARELLA",
      preco: 18.5,
    },
    {
      id: 3,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8fvpBLnrPMG1_vB3D29Iq4LYtbVLgvmCb_g&s",
      nome: "ON FIRE",
      detalhe:
        "PÃO HUMBURGUES, MOLHO RANCH, HUMBURGUER e CHEDDAR ou MUSSARELLA",
      preco: 14.0,
    },
    {
      id: 4,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8fvpBLnrPMG1_vB3D29Iq4LYtbVLgvmCb_g&s",
      nome: "BIG QUEIJO",
      detalhe:
        "PÃO HUMBURGUES, MOLHO RANCH, HUMBURGUER e CHEDDAR ou MUSSARELLA",
      preco: 15.99,
    },
  ];

  return cardapioBurges;
}

function bebidas() {
  const cardapioBebidas = [
    {
      id: 1,
      nome: "COCA COLA LATA 310ML",
      img: "https://http2.mlstatic.com/D_NQ_NP_791003-MLU74244286661_012024-O-kit-6-refrigerante-coca-cola-lata-310ml.webp",
      detalhe: "",
      preco: 4.99,
    },
    {
      id: 2,
      nome: "COCA COLA ZERO LATA 310ML",
      img: "https://http2.mlstatic.com/D_NQ_NP_955046-MLU74246715527_012024-O-coca-lata-sem-acucar-coca-cola-lata-310ml-latinha-coca-zero.webp",
      detalhe: "",
      preco: 4.99,
    },
    {
      id: 3,
      nome: "GUARANA ANT.LATA 269ML",
      img: "https://http2.mlstatic.com/D_NQ_NP_772658-MLB40796411931_022020-O-refrigerante-guarana-lata-269ml-kit-com-12.webp",
      detalhe: "",
      preco: 15.99,
    },
    {
      id: 4,
      nome: "COLCA COLA 1.5L",
      img: "https://http2.mlstatic.com/D_NQ_NP_894138-MLU74245578843_012024-O.webp",
      detalhe: "",
      preco: 11.99,
    },
    {
      id: 5,
      nome: "GUARANA ANT. 1.5L",
      img: "https://http2.mlstatic.com/D_NQ_NP_865812-MLB82607479804_032025-O-refrigerante-antarctica-guarana-225-l-garrafa.webp",
      detalhe: "",
      preco: 10.99,
    },
    {
      id: 6,
      nome: "COLCA COLA 1.5L",
      img: "https://http2.mlstatic.com/D_NQ_NP_894138-MLU74245578843_012024-O.webp",
      detalhe: "",
      preco: 11.99,
    },
    {
      id: 7,
      nome: "GUARANA ANT. 1.5L",
      img: "https://http2.mlstatic.com/D_NQ_NP_865812-MLB82607479804_032025-O-refrigerante-antarctica-guarana-225-l-garrafa.webp",
      detalhe: "",
      preco: 10.99,
    },
  ];
  return cardapioBebidas;
}

function adicionais() {
  const cardapioAdicionais = [
    {
      id: 1,
      img: "",
      nome: "HAMBÚRGUES",
      detalhe: "",
      preco: 7.0,
      valorTotal: "",
    },
    {
      id: 2,
      img: "",
      nome: "BACON",
      detalhe: "",
      preco: 3.0,
      valorTotal: "",
    },
    {
      id: 3,
      img: "",
      nome: "CHEDDAR",
      detalhe: "",
      preco: 3.0,
      valorTotal: "",
    },
    {
      id: 4,
      img: "",
      nome: "MUSSARELA",
      detalhe: "",
      preco: 2.0,
      valorTotal: "",
    },
    {
      id: 5,
      img: "",
      nome: "ALFACE",
      detalhe: "",
      preco: 0.0,
      valorTotal: "",
    },
    {
      id: 6,
      img: "",
      nome: "TOMATE",
      detalhe: "",
      preco: 0.0,
      valorTotal: "",
    },
    {
      id: 7,
      img: "",
      nome: "CEBOLA",
      detalhe: "",
      preco: 0.0,
      valorTotal: "",
    },
    {
      id: 8,
      img: "",
      nome: "OVO",
      detalhe: "",
      preco: 3.0,
      valorTotal: "",
    },
    {
      id: 9,
      img: "",
      nome: "BANANA",
      detalhe: "",
      preco: 3.0,
      valorTotal: "",
    },
  ];

  return cardapioAdicionais;
}

function queijos() {
  const cardapioQueijos = [
    {
      id: 1,
      img: "",
      nome: "Mussarela",
      detalhe: "",
      preco: 0.0,
      valorTotal: "",
    },
    {
      id: 2,
      img: "",
      nome: "Cheddar",
      detalhe: "",
      preco: 3.0,
      valorTotal: "",
    },
  ];

  return cardapioQueijos;
}

export { burgers, bebidas, adicionais, queijos };
