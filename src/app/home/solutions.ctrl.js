(function () {
  'use strict';
  angular.module('nextgroup')
    .controller('SolutionsCtrl', function () {
      var vm = this;
      vm.activeSolution = '';
      vm.toggleSolution = function(solutionName){
        if(vm.activeSolution == solutionName){
          vm.activeSolution = '';
        }
        else {
          vm.activeSolution = solutionName;
        }
      };

      vm.recruitment =
        '<ol>' +
          '<li><strong>Ranking:</strong> veja para que cargo uma pessoa se ajusta melhor</li>' +
          '<li><strong>Gráfico:</strong> conheça o perfil de uma pessoa visualmente</li>' +
          '<li><strong>Teste:</strong> compare de forma resumida uma pessoa e um cargo</li>' +
          '<li><strong>Mega Teste:</strong> compare de forma integral uma pessoa e um cargo</li>' +
        '</ol>';

      vm.development =
        '<ol>' +
        '<li><strong>Identificador:</strong> saiba como interagir com uma pessoa</li>' +
        '<li><strong>Resumo:</strong> conheça o perfil básico de uma pessoa</li>' +
        '<li><strong>Competências Premium:</strong> crie um relatório de competências sob medida </li>' +
        '<li><strong>Plano de Desenvolvimento Individual:</strong> melhore a performance de uma pessoa</li>' +
        '<li><strong>Relatório Avançado de Apoio:</strong> faça uma melhor consultoria de coaching</li>' +
        '</ol>';

      vm.position =
        '<ol>' +
        '<li><strong>Ranking:</strong> veja para que pessoa um cargo se ajusta melhor</li>' +
        '<li><strong>Gráfico:</strong> conheça o perfil de um cargo visualmente</li>' +
        '<li><strong>Resumo:</strong> conheça o perfil básico de um cargo</li>' +
        '<li><strong>Competências:</strong> conheça as características de um cargo sob medida</li>' +
        '</ol>';

      vm.team =
        '<ol>' +
        '<li><strong>Ranking:</strong> saiba quem é dominante e influente em uma equipe</li>' +
        '<li><strong>Resumo:</strong> veja todas as pessoas de uma equipe em uma página</li>' +
        '<li><strong>Lista:</strong> conheça os perfis de uma equipe em ordem alfabética </li>' +
        '<li><strong>Localização:</strong> compare os perfis dos membros de uma equipe</li>' +
        '<li><strong>Distribuição:</strong> veja qual é o perfil predominante de uma equipe</li>' +
        '<li><strong>Adaptação:</strong> conheça o alinhamento entre as pessoas de uma equipe </li>' +
        '<li><strong>Competências:</strong> conheça as características mais relevantes de uma equipe</li>' +
        '<li><strong>Mapa de Liderança:</strong> permita que o líder saiba motivar melhor sua equipe</li>' +
        '<li><strong>Perfil Equipe:</strong> compreenda porque uma equipe é como é</li>' +
        '<li><strong>Análise de Equipe:</strong> crie um relatório de equipe sob medida</li>' +
        '</ol>';

      vm.organization =
        '<ol>' +
        '<li><strong>Organização Atual:</strong> conheça a cultura dominante de uma organização</li>' +
        '<li><strong>Organização Ideal:</strong> conheça a cultura desejada de uma organização</li>' +
        '<li><strong>Brecha Corporativa:</strong> estabeleça um plano de trabalho para alcançar a cultura ideal</li>' +
        '</ol>';

      vm.feedback =
        '<ol>' +
        '<li><strong>Resumo Pessoa-Pessoa:</strong> gráfico comparativo entre duas pessoas</li>' +
        '<li><strong>Análise Pessoa-Pessoa:</strong> recomendações para alinhar melhor uma pessoa com a outra</li>' +
        '<li><strong>Resumo Pessoa-Cargo:</strong> gráfico comparativo entre uma pessoa e um cargo</li>' +
        '<li><strong>Análise Pessoa-Cargo:</strong> recomendações para alinhar melhor uma pessoa e um cargo</li>' +
        '<li><strong>Resumo Pessoa-Organização:</strong> gráfico comparativo entre uma pessoa e uma organização</li>' +
        '<li><strong>Análise Pessoa-Organização:</strong> recomendações para alinhar melhor uma pessoa e uma organização</li>' +
        '<li><strong>Perfil por Observação:</strong> prepare uma negociação</li>' +
        '</ol>';
    });
})();
