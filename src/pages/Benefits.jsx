const Benefits = () => (
    <main>
      <section className="bg-success text-white py-5">
        <div className="container">
          <h2>Benefícios da Energia Limpa</h2>
          <p>
            A adoção de fontes de energia limpa traz diversas vantagens para o meio ambiente, economia e sociedade.
          </p>
        </div>
      </section>
      <section className="container py-5">
        <div className="row">
          <div className="col-md-6">
            <h3>Vantagens</h3>
            <ul>
              <li>Redução da emissão de gases de efeito estufa</li>
              <li>Diminuição da poluição</li>
              <li>Economia a longo prazo</li>
              <li>Criação de empregos verdes</li>
            </ul>
          </div>
          <div className="col-md-6">
            <h3>Desafios</h3>
            <ul>
              <li>Alto custo inicial de implementação</li>
              <li>Dependência de condições climáticas</li>
              <li>Infraestrutura limitada</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
  
  export default Benefits;
  