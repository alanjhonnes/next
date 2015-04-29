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
          '<li>Gráfica: conheça o perfil de uma pessoa visualmente</li>' +
          '<li>Test: compare de forma resumida uma pessoa e um cargo</li>' +
          '<li>Megatest: compare de forma integral uma pessoa e um cargo</li>' +
          '<li>Falador: saiba como interagir com uma pessoa</li>' +
          '<li>Resumo: conheça o perfil básico de uma pessoa</li>' +
          '<li>Competências Premium: crie um relatório de competências sob medida</li>' +
          '<li>Plano de Desenvolvimento Individual: melhore a performance de uma pessoa</li>' +
          '<li>Relatório Avançado de Apoio: faça uma melhor consultoria de coaching</li>' +
        '</ol>';

      vm.development =
        '<ol>' +
        '<li>Ranking: veja para que cargo uma pessoa se ajusta melhor</li>' +
        '<li>Gráfica: conheça o perfil de uma pessoa visualmente</li>' +
        '<li>Test: compare de forma resumida uma pessoa e um cargo</li>' +
        '<li>Megatest: compare de forma integral uma pessoa e um cargo</li>' +
        '<li>Falador: saiba como interagir com uma pessoa</li>' +
        '<li>Resumo: conheça o perfil básico de uma pessoa</li>' +
        '<li>Competências Premium: crie um relatório de competências sob medida</li>' +
        '<li>Plano de Desenvolvimento Individual: melhore a performance de uma pessoa</li>' +
        '<li>Relatório Avançado de Apoio: faça uma melhor consultoria de coaching</li>' +
        '</ol>';

      vm.position =
        '<ol>' +
        '<li>Ranking: veja para que cargo uma pessoa se ajusta melhor</li>' +
        '<li>Gráfica: conheça o perfil de uma pessoa visualmente</li>' +
        '<li>Test: compare de forma resumida uma pessoa e um cargo</li>' +
        '<li>Megatest: compare de forma integral uma pessoa e um cargo</li>' +
        '<li>Falador: saiba como interagir com uma pessoa</li>' +
        '<li>Resumo: conheça o perfil básico de uma pessoa</li>' +
        '<li>Competências Premium: crie um relatório de competências sob medida</li>' +
        '<li>Plano de Desenvolvimento Individual: melhore a performance de uma pessoa</li>' +
        '<li>Relatório Avançado de Apoio: faça uma melhor consultoria de coaching</li>' +
        '</ol>';

      vm.team =
        '<ol>' +
        '<li>Ranking: veja para que cargo uma pessoa se ajusta melhor</li>' +
        '<li>Gráfica: conheça o perfil de uma pessoa visualmente</li>' +
        '<li>Test: compare de forma resumida uma pessoa e um cargo</li>' +
        '<li>Megatest: compare de forma integral uma pessoa e um cargo</li>' +
        '<li>Falador: saiba como interagir com uma pessoa</li>' +
        '<li>Resumo: conheça o perfil básico de uma pessoa</li>' +
        '<li>Competências Premium: crie um relatório de competências sob medida</li>' +
        '<li>Plano de Desenvolvimento Individual: melhore a performance de uma pessoa</li>' +
        '<li>Relatório Avançado de Apoio: faça uma melhor consultoria de coaching</li>' +
        '</ol>';

      vm.organization =
        '<ol>' +
        '<li>Ranking: veja para que cargo uma pessoa se ajusta melhor</li>' +
        '<li>Gráfica: conheça o perfil de uma pessoa visualmente</li>' +
        '<li>Test: compare de forma resumida uma pessoa e um cargo</li>' +
        '<li>Megatest: compare de forma integral uma pessoa e um cargo</li>' +
        '<li>Falador: saiba como interagir com uma pessoa</li>' +
        '<li>Resumo: conheça o perfil básico de uma pessoa</li>' +
        '<li>Competências Premium: crie um relatório de competências sob medida</li>' +
        '<li>Plano de Desenvolvimento Individual: melhore a performance de uma pessoa</li>' +
        '<li>Relatório Avançado de Apoio: faça uma melhor consultoria de coaching</li>' +
        '</ol>';

      vm.feedback =
        '<ol>' +
        '<li>Ranking: veja para que cargo uma pessoa se ajusta melhor</li>' +
        '<li>Gráfica: conheça o perfil de uma pessoa visualmente</li>' +
        '<li>Test: compare de forma resumida uma pessoa e um cargo</li>' +
        '<li>Megatest: compare de forma integral uma pessoa e um cargo</li>' +
        '<li>Falador: saiba como interagir com uma pessoa</li>' +
        '<li>Resumo: conheça o perfil básico de uma pessoa</li>' +
        '<li>Competências Premium: crie um relatório de competências sob medida</li>' +
        '<li>Plano de Desenvolvimento Individual: melhore a performance de uma pessoa</li>' +
        '<li>Relatório Avançado de Apoio: faça uma melhor consultoria de coaching</li>' +
        '</ol>';
    });
})();
