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
          '<li>Ranking: veja para que cargo uma pessoa se ajusta melhor</li>' +
          '<li>Gráfico: conheça o perfil de uma pessoa visualmente</li>' +
          '<li>Teste: compare de forma resumida uma pessoa e um cargo</li>' +
          '<li>Mega Teste: compare de forma integral uma pessoa e um cargo</li>' +
        '</ol>';

      vm.development =
        '<ol>' +
        '<li>Identificador: saiba como interagir com uma pessoa</li>' +
        '<li>Resumo: conheça o perfil básico de uma pessoa</li>' +
        '<li>Competências Premium: crie um relatório de competências sob medida </li>' +
        '<li>Plano de Desenvolvimento Individual: melhore a performance de uma pessoa</li>' +
        '<li>Relatório Avançado de Apoio: faça uma melhor consultoria de coaching</li>' +
        '</ol>';

      vm.position =
        '<ol>' +
        '<li>Ranking: veja para que pessoa um cargo se ajusta melhor</li>' +
        '<li>Gráfico: conheça o perfil de um cargo visualmente</li>' +
        '<li>Resumo: conheça o perfil básico de um cargo</li>' +
        '<li>Competências: conheça as características de um cargo sob medida</li>' +
        '</ol>';

      vm.team =
        '<ol>' +
        '<li>Ranking: saiba quem é dominante e influente em uma equipe</li>' +
        '<li>Resumo: veja todas as pessoas de uma equipe em uma página</li>' +
        '<li>Lista: conheça os perfis de uma equipe em ordem alfabética </li>' +
        '<li>Localização: compare os perfis dos membros de uma equipe</li>' +
        '<li>Distribuição: veja qual é o perfil predominante de uma equipe</li>' +
        '<li>Adaptação: conheça o alinhamento entre as pessoas de uma equipe </li>' +
        '<li>Competências: conheça as características mais relevantes de uma equipe</li>' +
        '<li>Mapa de Liderança: permita que o líder saiba motivar melhor sua equipe</li>' +
        '<li>Perfil Equipe: compreenda porque uma equipe é como é</li>' +
        '<li>Análise de Equipe: crie um relatório de equipe sob medida</li>' +
        '</ol>';

      vm.organization =
        '<ol>' +
        '<li>Organização Atual: conheça a cultura dominante de uma organização</li>' +
        '<li>Organização Ideal: conheça a cultura desejada de uma organização</li>' +
        '<li>Brecha Corporativa: estabeleça um plano de trabalho para alcançar a cultura ideal</li>' +
        '</ol>';

      vm.feedback =
        '<ol>' +
        '<li>Resumo Pessoa-Pessoa: gráfico comparativo entre duas pessoas</li>' +
        '<li>Análise Pessoa-Pessoa: recomendações para alinhar melhor uma pessoa com a outra</li>' +
        '<li>Resumo Pessoa-Cargo: gráfico comparativo entre uma pessoa e um cargo</li>' +
        '<li>Análise Pessoa-Cargo: recomendações para alinhar melhor uma pessoa e um cargo</li>' +
        '<li>Resumo Pessoa-Organização: gráfico comparativo entre uma pessoa e uma organização</li>' +
        '<li>Análise Pessoa-Organização: recomendações para alinhar melhor uma pessoa e uma organização</li>' +
        '<li>Perfil por Observação: prepare uma negociação</li>' +
        '</ol>';
    });
})();
