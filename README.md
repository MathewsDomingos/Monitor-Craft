# Monitor Craft

Monitor Craft é uma plataforma online gratuita que facilita a criação e personalização de cards para o plugin HTML Graphics no Grafana. Com uma interface intuitiva e dinâmica, você pode configurar modelos de cards, escolher ícones, cores, estilos e gerar automaticamente o código HTML, CSS e JavaScript pronto para uso em seus painéis de monitoramento.

O objetivo do Monitor Craft é democratizar a personalização visual no Grafana, ajudando profissionais de monitoramento e observabilidade a economizar tempo, padronizar layouts e elevar o nível dos seus dashboards — sem precisar ser um expert em programação.

---

## 👨‍💻 Criador

- **Mateus Domingos**  
  [LinkedIn](https://www.linkedin.com/in/mathews-domingos/)

---

## 🚀 Como adicionar os cards do Monitor Craft no Grafana?

1. **Verifique o plugin:**  
   Confirme se o plugin **HTML Graphics** está instalado no seu Grafana. Caso não esteja, siga as instruções da documentação oficial do plugin.

2. **Crie o painel:**  
   No Grafana, adicione um novo painel e selecione **HTML Graphics** como tipo de visualização.

3. **Ajuste a visualização:**  
   No campo **Overflow**, selecione a opção **Hidden** para evitar barras de rolagem indesejadas.

4. **Limpe o conteúdo padrão:**  
   Apague todo o conteúdo padrão dos campos **HTML/SVG document**, **CSS** e **onRender (JS)** do plugin.

5. **Copie o código do Monitor Craft:**  
   No site Monitor Craft, gere e copie o código de cada aba: **HTML**, **CSS** e **JavaScript**.

6. **Cole cada trecho no campo correspondente do plugin:**
   - **HTML** no campo *HTML/SVG document*
   - **CSS** no campo *CSS*
   - **JavaScript** no campo *onRender*

7. **Salve as alterações:**  
   Clique em **Apply** (no canto superior direito) para salvar e visualizar o resultado.

---

## 📄 Licença

Este projeto é open source e gratuito APENAS para uso pessoal. Consulte o arquivo `LICENSE` para mais detalhes.<br />
![Licença MIT](https://img.shields.io/badge/Licença-MIT-blue)
![Feito para Grafana](https://img.shields.io/badge/Feito%20para-Grafana-orange)
[![Feito com ❤️ por Mateus](https://img.shields.io/badge/Feito%20com%20%E2%9D%A4%EF%B8%8F%20por-Mateus%20Domingos-57C785?style=flat-square)](https://www.linkedin.com/in/mathews-domingos/)

---
