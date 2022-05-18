<template>
  <div class="viewLayout">
    <h1>Verificação, validação e testes</h1>
    <h2>Visões da qualidade</h2>
    <p>Para termos qualidade devemos seguir algumas visões:</p>
    <ul>
      <li class="list">
        <p>
          Usuário: Deve ter facilidade de uso, desempenho, confiabilidade dos
          resultados, preço do software, etc
        </p>
      </li>
      <li>
        <p>
          Desenvolvedor: Taxa de defeitos, facilidade de manutenção e
          conformidade em relação aos requisitos de usuários, etc
        </p>
      </li>
      <li>
        <p>
          Organização: Cumprimento de prazo, boa previsão de custo, boa
          produtividade.
        </p>
      </li>
    </ul>
    <p>
      Para isso precisamos assegurar que o produto está sendo feito da forma
      correta, com o mínimo de erros ou com funcionalidades fora dos requisitos
      especificados. Para isso existe a verificação, a validação dos testes.
    </p>
    <p>
      O ciclo de propagação de erros é: Desenvolvedor comete um engano ->
      Software fica defeituoso -> Software falha -> Defeito é executado e gera
      um erro -> Usuário sofre as consequências.
    </p>
    <p>
      Qualidade de software também precisa evitar erros e falhas, para isso
      existem maneiras de minimizar esses problemas como: testes e depuração.
    </p>
    <p>
      Testes buscam verificar se o software está funcionando corretamente,
      exercitando o software como um todo ou partes dele. Já a depuração, busca
      e corrige defeitos que são responsáveis por falhas ou erros do software.
    </p>
    <p>
      Um bom caso de teste deve ter alta probabildade de encontrar erros, não
      ser muito complexo e não ser redundante, além disso testes devem ser
      aplicados de forma isolada para assim cobrirem todo um sistema. Testes não
      substituem produtos de qualidade, de nada adianta ter testes para um
      produto ruim e sem planejamento.
    </p>
    <p>
      Devemos sempre verificar e validar o software em questão, na verificação
      nos perguntamos se estamos fazendo o software corretamente e se o mesmo
      atende aos requisitos especificados. Já na validação questionamos se o que
      estamos fazendo está correto e se o mesmo está correspondedo às
      expectativas do usuário.
    </p>
    <p>
      O objetivo dos testes é executar o produto de sw com o intuito de detectar
      a presença de falhas, mas nunca a sua ausência, eles não são responsáveis
      por: contruir e avaliar protótipos, verificação de modelos, revisão de
      documentos ou código, análise estática automatizada de código e etc.
    </p>
    <p>
      Os princípios dos testes são evitar testar seus próprios programas a menos
      que seja com auxílio de uma ferramenta, determinar se o sw faz o que é
      esperado e não faz algo indesejável, não planejar testes assumindo que não
      será encontrado falhas e definir dados de testes válidos, inválidos e
      inoportunos.
    </p>
    <p>
      Testes devem ser iniciados cedo no ciclo de vida de um projeto e devem
      estar integrados às atividades de desenvolvimento, além disso podem ser
      descritos desde a fase de especificação do sistema.
    </p>
    <p>
      O escopo de testes é a coleção de unidades de interesse, que podem ser
      métodos, classes, componentes e etc. Dependendendo do escopo podemos
      aplicar: testes de unidades, testes de integração, testes de sistemas e
      testes de aceitação.
    </p>
    <ul>
      <li class="list">
        <p>
          Testes de Unidade: Testes aplicados em uma unidade: módulo, função,
          classe, componente ou serviço.
        </p>
      </li>
      <li>
        <p>
          Testes de Integração: Testes aplicados em: subsistemas, componentes,
          composição de serviços ou grandes grupos de classes.
        </p>
      </li>
      <li>
        <p>Testes de Sistemas: Testes aplicados em aplicações ou frameworks.</p>
      </li>
      <li>
        <p>
          Testes de Aceitação: Testes de validação do sistema, nesta etapa
          surgem as perguntas: "O sistema está pronto para uso?" e "O sistema
          atende os requisitos de operação?"
        </p>
      </li>
      <li>
        <p>Testes de Regressão: Verifica o impacto de mudanças</p>
      </li>
    </ul>
    <p>
      O processo de testes se baseia em: Planejamento (determina os objetivos
      dos testes), projeto (determina a estratégia para criar os testes que
      atendam aos objetivos), implementação (gera casos de teste executáveis),
      execução (executa casos de testes), Verificação de Término (determina se
      objetivos foram atendidos), balanço final (avalia o processo de testes),
      manutenção (Atualiza testes para refletir mudanças no sw e nos objetivos)
    </p>
    <p>
      Para a escrita prática de testes temos o TDD (Test Driven Development),
      que é uma metodologia para desenvolvimento e escrita de código orientado a
      testes. Nessa metodologia os testes são escritos antes do código ser
      implementado completamente e a intenção é que o teste comece de forma mais
      básica e vá evoluindo a medida que você refatora o mesmo para que o teste
      seja sucedido. Por exemplo: Se eu fizer uma calculadora iniciarei os
      testes para a função de soma tentando falhar o teste, e após o teste
      falhar e melhoro a minha função de soma para evitar futuros problemas.
    </p>
    <p>
      O TDD ajuda a equipe a grantir que os requisitos funcionam como esperado e
      também auxilia o desenvolvedor a perceber problemas no código que talvez
      não seriam percebidos sem o TDD, já que o mesmo aplica os testes desde o
      início da criação de uma unidade de teste.
    </p>
    <p>
      No ambiente de testes temos os testes de desempenho, carga e stress, estes
      são responsáveis por fornecer informações sobre qualidade do produto ou
      serviço do ponto de vista de performance, são técnicas de testes não
      funcionais que são feitas para diferentes propósitos e nos ajudam a
      avaliar uma aplicação sobre a óptica de: velocidade(desempenho),
      escalabilidade(carga) e estabilidade(stress).
    </p>
    <p>
      Testes de desempenho determinam se o sistema está de acordo com os
      objetivos e requiisitos de desempenho, se os mesmos estão sendo atendidos,
      e não se o sistema possui bugs.
    </p>
    <p>
      Testes de carga determina como o sistema se comportará sob determinadas
      condições de volume de carga e limita o máximo de carga de uma aplicação.
    </p>
    <p>
      Testes de stress determina o quanto uma aplicação é robusta, disponível e adaptável.
    </p>
  </div>
</template>

<style>
@import "@/assets/viewsEssentials.css";
</style>
