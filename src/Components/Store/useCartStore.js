import { create } from "zustand";
import { adicionais } from "../Cardapio";
// import { adicionais } from "../Cardapio";

// // Função para calcular o total do carrinho
// const calcularTotalAdicionais = () => {
//   const totalAdicionais = adicionais.reduce(
//     (total, item) => total + item.valorTotal,
//     0
//   );
//   return totalAdicionais;
// };

// Função para calcular o valor total do produto com adicionais
// const calcularValorTotalProduto = (produto) => {
//   const totalAdicionais = produto.adicionais.reduce((sum, add) => sum + add.preco, 0);
//   return (produto.preco + totalAdicionais) * produto.quantidade;
// };

const useCartStore = create((set) => ({
  DadoslocalStorage: {
    nome: "",
    telefone: "",
  },
  valorTotalItens: 0.0,
  valorTotalPedido: 0.0,
  status: "Entregue",
  troco: {
    valor: 0.0,
    status: "nao",
  },
  pedido: {
    cliente: {
      nome: "",
      telefone: "",
      rua: "",
      complemento: "",
      bairro: "",
      cidade: "Denise",
    },
    id: "",
    itens: [],
    status: "",
    pagamento: "",
    total: "",
    data: "",
  },
  cart: [],
  show: "",
  showModalTroco: "",
  message: "",
  openMessagem: false,
  tipoEntrega: "entrega",
  queijos: ["Mussarela", "Cheddar"],
  tipopagamento: ["pix", "cartão", "dinheiro"],
  pagamento: "",
  adicionais: [
    // {
    //   id: 1,
    //   img: "",
    //   nome: "HAMBÚRGERS",
    //   detalhe: "",
    //   quantidade: 0,
    //   preco: 7.0,
    //   valorTotal: 0.0,
    // },
    // {
    //   id: 2,
    //   img: "",
    //   nome: "BACON",
    //   detalhe: "",
    //   quantidade: 0,
    //   preco: 3.0,
    //   valorTotal: 0.0,
    // },
    // {
    //   id: 3,
    //   img: "",
    //   nome: "CHEDDAR",
    //   detalhe: "",
    //   quantidade: 0,
    //   preco: 3.0,
    //   valorTotal: "",
    // },
    // {
    //   id: 4,
    //   img: "",
    //   nome: "MUSSARELA",
    //   detalhe: "",
    //   quantidade: 0,
    //   preco: 2.0,
    //   valorTotal: 0.0,
    // },
    // {
    //   id: 5,
    //   img: "",
    //   nome: "ALFACE",
    //   detalhe: "",
    //   quantidade: 0,
    //   preco: 0.0,
    //   valorTotal: "",
    // },
    // {
    //   id: 6,
    //   img: "",
    //   nome: "TOMATE",
    //   detalhe: "",
    //   quantidade: 0,
    //   preco: 0.0,
    //   valorTotal: 0.0,
    // },
    // {
    //   id: 7,
    //   img: "",
    //   nome: "CEBOLA",
    //   detalhe: "",
    //   quantidade: 0,
    //   preco: 0.0,
    //   valorTotal: 0.0,
    // },
    // {
    //   id: 8,
    //   img: "",
    //   nome: "OVO",
    //   detalhe: "",
    //   quantidade: 0,
    //   preco: 3.0,
    //   valorTotal: 0.0,
    // },
    // {
    //   id: 9,
    //   img: "",
    //   nome: "BANANA",
    //   detalhe: "",
    //   quantidade: 0,
    //   preco: 3.0,
    //   valorTotal: 0.0,
    // },
  ],
  produto: {
    id: "",
    index: 0.0,
    nome: "",
    img: "",
    detelhe: "",
    quantidade: 0.0,
    preco: 0.0,
    precomemory: 0.0,
    valorTotal: 0.0,
    observacao: "",
    tipoQueijo: "",
  },

  cliente: {
    nome: "",
    telefone: "",
    rua: "",
    complemento: "",
    bairro: "",
    cidade: "Denise",
  },

  local: {
    // nome: "",
    // telefone: "",
    rua: "Nossa Senhora Aparecida",
    complemento: "Ao lado casa de festa SFFEST",
    bairro: "Centro",
    cidade: "Denise",
  },
  //====================Cliente=======================

  atualizarCliente: (campo, valor) =>
    set((state) => ({
      cliente: { ...state.cliente, [campo]: valor },
    })),

  atualizaTroco: (campo, valor) =>
    set((state) => ({
      troco: { ...state.troco, [campo]: valor },
    })),

  setDadosCliente: (dados) =>
    set({
      cliente: {
        nome: dados.nome,
        telefone: dados.telefone,
        rua: dados.rua,
        numero: dados.numero,
        complemento: dados.complemento,
        bairro: dados.bairro,
        cidade: dados.cidade,
      },
    }),

  limparCliente: () =>
    set({
      cliente: {
        nome: "",
        telefone: "",
        rua: "",
        complemento: "",
        bairro: "",
        cidade: "Denise",
      },
      pagamento: "",
    }),
  //====================Produto=======================

  // Define um novo produto selecionado
  //   selecionarProduto: (novoProduto) => set({ produto: novoProduto }),

  SetDadosLocalStore: (dados) =>
    set({
      DadoslocalStorage: {
        nome: dados.nome,
        telefone: dados.telefone,
      },
    }),

  setTipoEntrega: (value) =>
    set({
      tipoEntrega: value,
    }),

  SetPagamento: (pagamento) =>
    set({
      pagamento: pagamento,
    }),

  selecionarProduto: (novoProduto) =>
    set({
      produto: {
        id: novoProduto.id,
        index: "",
        nome: novoProduto.nome,
        detalhe: novoProduto.detalhe,
        img: novoProduto.img,
        quantidade: 1,
        preco: novoProduto.preco,
        precomemory: novoProduto.preco,
        adicionais: [],
        valorTotal: novoProduto.preco,
        observacao: "",
        tipoQueijo: "Mussarela",
      },
      valorTotalItens: novoProduto.preco,
    }),

  // Atualiza um campo específico do produto
  atualizarProduto: (campo, valor) =>
    set((state) => ({
      produto: { ...state.produto, [campo]: valor },
    })),

  setStatus: (value) =>
    set({
      status: value,
    }),

  setTroco: (value) =>
    set({
      status: value,
    }),

  setShow: (value) =>
    set({
      show: value,
    }),

  setShowTroco: (value) =>
    set({
      showModalTroco: value,
    }),

  setMessage: (value) =>
    set({
      message: value,
    }),

  setOpenMessage: (value) =>
    set({
      openMessagem: "",
    }),

  atualizarProdutoAdicionais: (valor) =>
    set((state) => ({
      produto: {
        ...state.produto,
        adicionais: [...state.produto.adicionais, valor],
      },
    })),

  // Resetar produto para os valores iniciais
  limparProduto: () =>
    set({
      produto: {
        img: "",
        id: "",
        index: "",
        precomemory: "",
        nome: "",
        detalhe: "",
        quantidade: "",
        preco: "",
        adicionais: [],
        valorTotal: "",
        observacao: "",
      },
    }),

  //====================Dados adicionais=======================

  totalProduto: () =>
    set((state) => {
      let total = 0.0;
      let indexCart = 0.0;

      let valorItens = state.adicionais.map((item) => {
        if (item.valorTotal > 0) {
          total += item.valorTotal;
        }
      });

      total = total + state.produto.preco;
      indexCart = state.cart.length + 1;
      console.log(state.cart.length);

      // state.produto.valorTotal = total;

      return {
        valorTotalItens: total,
        produto: {
          ...state.produto,
          valorTotal: total,
          index: indexCart,
          precomemory: total,
        },
      };
    }),

  setAdicional: (dados) =>
    set((state) => {
      return { adicionais: dados };
    }),

  addItemAdicionais: (item) =>
    set((state) => {
      const itemExists = state.adicionais.find((i) => i.id === item.id);

      if (itemExists.preco < 1 && itemExists.quantidade > 0) {
        return {
          produto: {
            ...state.produto,
            adicionais: state.adicionais,
          },
        };
      }

      if (itemExists) {
        return {
          adicionais: state.adicionais.map((i) =>
            i.id === item.id
              ? {
                  ...i,
                  quantidade: i.quantidade + 1,
                  valorTotal: (i.quantidade + 1) * i.preco,
                }
              : i
          ),

          produto: {
            ...state.produto,
            adicionais: state.adicionais,
          },
        };
      }

      return {
        adicionais: [
          ...state.adicionais,
          {
            ...item,
            quantidade: 1,
            valorTotal: item.preco * item.quantidade,
          },
        ],

        produto: {
          ...state.produto,
          adicionais: state.adicionais,
        },
      };
    }),

  removeItemAdicionais: (item) =>
    set((state) => {
      const itemExists = state.adicionais.find((i) => i.id === item.id);

      if (itemExists && itemExists.quantidade > 0) {
        return {
          adicionais: state.adicionais.map((i) =>
            i.id === item.id
              ? {
                  ...i,
                  quantidade: i.quantidade - 1,
                  valorTotal: (i.quantidade - 1) * i.preco,
                }
              : i
          ),

          produto: {
            ...state.produto,
            adicionais: state.adicionais,
          },
        };
      } else {
        return {
          adicionais: [...state.adicionais],
          produto: {
            ...state.produto,
            adicionais: state.adicionais,
          },
        };
      }
    }),

  updateQuantityAdicionais: (id, quantidade) =>
    set((state) => ({
      cart: state.adicionais.map((item) =>
        item.id === id ? { ...item, quantidade } : item
      ),
    })),

  setAdicional: (dados) =>
    set((state) => ({
      adicionais: dados,
    })),

  clearAdicionais: () =>
    set({
      adicionais: [
        {
          id: 1,
          img: "",
          nome: "HAMBÚRGERS",
          detalhe: "",
          quantidade: 0,
          preco: 7.0,
          valorTotal: 0.0,
        },
        {
          id: 2,
          img: "",
          nome: "BACON",
          detalhe: "",
          quantidade: 0,
          preco: 3.0,
          valorTotal: 0.0,
        },
        {
          id: 3,
          img: "",
          nome: "CHEDDAR",
          detalhe: "",
          quantidade: 0,
          preco: 3.0,
          valorTotal: "",
        },
        {
          id: 4,
          img: "",
          nome: "MUSSARELA",
          detalhe: "",
          quantidade: 0,
          preco: 2.0,
          valorTotal: 0.0,
        },
        {
          id: 5,
          img: "",
          nome: "ALFACE",
          detalhe: "",
          quantidade: 0,
          preco: 0.0,
          valorTotal: "",
        },
        {
          id: 6,
          img: "",
          nome: "TOMATE",
          detalhe: "",
          quantidade: 0,
          preco: 0.0,
          valorTotal: 0.0,
        },
        {
          id: 7,
          img: "",
          nome: "CEBOLA",
          detalhe: "",
          quantidade: 0,
          preco: 0.0,
          valorTotal: 0.0,
        },
        {
          id: 8,
          img: "",
          nome: "OVO",
          detalhe: "",
          quantidade: 0,
          preco: 3.0,
          valorTotal: 0.0,
        },
        {
          id: 9,
          img: "",
          nome: "BANANA",
          detalhe: "",
          quantidade: 0,
          preco: 3.0,
          valorTotal: 0.0,
        },
      ],
      valorTotalItens: 0.0,
    }),

  //====================Carrinho de compra=======================
  addItemCart: (item) =>
    set((state) => {
      const itemExists = state.cart.find((i) => i.id === item.id);
      let total = 0.0;
      // console.log(item);

      // if (itemExists) {
      // return {
      //   cart: state.cart.map((i) =>
      //     i.id === item.id ? { ...i, quantidade: i.quantidade + 1,  } : i
      //   ),
      // };

      // let valorCart = state.cart.map((item) => {
      //   if (item.valorTotal > 0) {
      //     total += item.valorTotal;
      //   }
      // });

      // }

      return {
        cart: [
          ...state.cart,
          { ...item, quantidade: 1, index: state.cart.length + 1 },
        ],
      };
    }),

  removeQtdeItemCart: (item) =>
    set((state) => {
      const itemExists = state.cart.find((i) => i.index === item.index);
      if (itemExists && itemExists.quantidade > 0) {
        return {
          cart: state.cart.map((i) =>
            i.index === item.index
              ? {
                  ...i,
                  quantidade: i.quantidade - 1,
                  valorTotal: (i.quantidade - 1) * i.precomemory,
                }
              : i
          ),
        };
      } else {
        return {
          adicionais: [...state.cart],
        };
      }
    }),

  removeItemCart: (index) =>
    set((state) => {
      const newCart = state.cart.filter((item) => item.index !== index);
      return { cart: newCart };
    }),

  updateQuantityCart: (id, quantidade) =>
    set((state) => ({
      cart: state.cart.map((item) =>
        item.id === id ? { ...item, quantidade } : item
      ),
    })),

  clearCart: () =>
    set({ cart: [], valorTotalPedido: 0.0, troco: { status: "", valor: "" } }),

  totalCart: () =>
    set((state) => {
      let total = 0.0;

      let valorCart = state.cart.map((i) => {
        if (i.valorTotal > 0) {
          total += i.valorTotal;
        }
      });

      return {
        valorTotalPedido: total,
      };
    }),

  SetDadosPedido: (dados) =>
    set({
      pedido: {
        cliente: {
          nome: dados.cliente.nome,
          telefone: dados.cliente.telefone,
          rua: dados.cliente.rua,
          complemento: dados.cliente.complemento,
          bairro: dados.cliente.bairro,
          cidade: dados.cliente.cidade,
        },
        itens: dados.itens,
        id: dados.id,
        status: dados.status,
        pagamento: dados.pagamento,
        total: dados.total,
        data: dados.data,
      },
    }),

  AddItemPedido: (item) =>
    set((state) => {
      const itemExists = state.cart.find((i) => i.index === item.index);

      console.log(item.index);

      if (itemExists) {
        return {
          cart: state.cart.map((i) =>
            i.index === item.index
              ? {
                  ...i,
                  quantidade: i.quantidade + 1,
                  valorTotal: item.precomemory + i.valorTotal,
                }
              : i
          ),
        };
      }

      // return {
      //   valorTotalPedido: total,
      // };
    }),
}));

export default useCartStore;
