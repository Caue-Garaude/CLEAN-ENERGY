const Contact = () => (
    <main>
      <section className="bg-primary text-white text-center py-5">
        <div className="container">
          <h2>Fale Conosco</h2>
          <p>Entre em contato para saber mais sobre energia limpa e como podemos ajudar.</p>
        </div>
      </section>
      <section className="container py-5">
        <form>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Nome</label>
            <input type="text" className="form-control" id="name" placeholder="Digite seu nome" />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" className="form-control" id="email" placeholder="Digite seu email" />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">Mensagem</label>
            <textarea className="form-control" id="message" rows="4" placeholder="Escreva sua mensagem"></textarea>
          </div>
          <button type="submit" className="btn btn-success">Enviar</button>
        </form>
      </section>
    </main>
  );
  
  export default Contact;
  