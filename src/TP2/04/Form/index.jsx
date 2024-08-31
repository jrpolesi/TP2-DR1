import "./styles.css";

export function Form() {
  return (
    <section className="form-page">
      <h1>Cadastro de Produtos</h1>

      <form onSubmit={(e) => e.preventDefault()}>
        <div className="form-inputs">
          <WithLabel forId="name" label="Nome do Produto">
            <input
              id="name"
              name="name"
              placeholder="Informe o nome do produto"
            />
          </WithLabel>

          <div className="input-layout-h">
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

          <div className="input-layout-h">
            <WithLabel forId="supplier" label="Fabricante">
              <select id="supplier" name="supplier">
                <option value="" disabled selected hidden>
                  Selecione um fabricante
                </option>
                <option value="1">Fabricante 1</option>
                <option value="2">Fabricante 2</option>
                <option value="3">Fabricante 3</option>
                <option value="4">Fabricante 4</option>
              </select>
            </WithLabel>

            <WithLabel forId="category" label="Categoria">
              <select id="category" name="category">
                <option value="" disabled selected hidden>
                  Selecione uma categoria
                </option>
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
        </div>

        <button className="submit-btn" type="submit">
          Salvar
        </button>
      </form>
    </section>
  );
}

function WithLabel({ forId, label, children }) {
  return (
    <div className="input-label-container">
      <label htmlFor={forId}>{label}</label>
      {children}
    </div>
  );
}
