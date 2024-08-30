import "./styles.css";

export function Form() {
  return (
    <section>
      <h1>Cadastro de Produtos</h1>

      <form onSubmit={(e) => e.preventDefault()}>
        <WithLabel forId="name" label="Nome do Produto">
          <input
            id="name"
            name="name"
            placeholder="Informe o nome do produto"
          />
        </WithLabel>

        <div>
          <WithLabel forId="salePrice" label="Preço de venda">
            <input
              id="salePrice"
              name="salePrice"
              placeholder="Informe o preço de venda do produto"
            />
          </WithLabel>

          <WithLabel forId="purchasePrice" label="Preço de custo">
            <input
              id="purchasePrice"
              name="purchasePrice"
              placeholder="Informe o preço de custo do produto"
            />
          </WithLabel>
        </div>

        <div>
          <WithLabel forId="supplier" label="Fornecedor">
            <select
              id="supplier"
              name="supplier"
              placeholder="Selecione um fornecedor"
            >
              <option value="1">Fornecedor 1</option>
              <option value="2">Fornecedor 2</option>
              <option value="3">Fornecedor 3</option>
              <option value="4">Fornecedor 4</option>
            </select>
          </WithLabel>

          <WithLabel forId="category" label="Categoria">
            <select
              id="category"
              name="category"
              placeholder="Selecione uma categoria"
            >
              <option value="1">Categoria 1</option>
              <option value="2">Categoria 2</option>
              <option value="3">Categoria 3</option>
              <option value="4">Categoria 4</option>
            </select>
          </WithLabel>
        </div>

        <WithLabel forId="description" label="Descrição do Produto">
          <textarea
            id="description"
            name="description"
            placeholder="Informe a descrição do produto"
          />
        </WithLabel>
        <button type="submit">Salvar</button>
      </form>
    </section>
  );
}

function WithLabel({ forId, label, children }) {
  return (
    <div className="input-container">
      <label htmlFor={forId}>{label}</label>
      {children}
    </div>
  );
}
