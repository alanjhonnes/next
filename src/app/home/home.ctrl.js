(function () {
  'use strict';
  angular.module('nextgroup')
    .controller('HomeCtrl', ['$scope', '$stateParams', '$document', '$timeout',
      function ($scope, $stateParams, $document, $timeout) {
      var vm = this;
      $scope.$on("$viewContentLoaded", function(event){
        if($stateParams.section){
          $timeout(function(){
            $document.duScrollToElement(document.getElementById($stateParams.section), 0, 1000)
          }, 1000);
        }
      });

      vm.slides = [
        { image: 'assets/images/banner1.jpg',
          title: 'O futuro do RH está aqui.',
          content: 'A plataforma THT - The Talent System é simples e poderosa porque ' +
          'é integrada e ilimitada. Não deixe sua empresa ficar para trás.'
        },
        { image: 'assets/images/banner2.jpg',
          title: 'Dificuldades em selecionar novos talentos?',
          content: 'Com os nossos serviços, você conta com tudo ' +
          'que precisa para recrutar melhor e mais rápido.'
        },
        { image: 'assets/images/banner3.jpg',
          title: 'Quer desenvolver ' +
          'melhor as pessoas?',
          content: 'Com a nossa plataforma, você identifica e define ' +
          'planos de desenvolvimento concretos e eficazes.'
        },
        { image: 'assets/images/banner4.jpg',
          title: 'Precisa melhorar o ' +
          'trabalho em equipe?',
          content: 'As ferramentas da THT lhe permitirão construir, ' +
          'alinhar e avaliar pessoas, equipes ou organizações ' +
          'com rapidez e simplicidade. '
        },
        { image: 'assets/images/banner5.jpg',
          title: 'Líder não é quem faz, mas sim quem é.',
          content: 'Tenha todas as ferramentas necessárias para conhecer sua equipe e liderar com alta performance.'
        },
        { image: 'assets/images/banner6.jpg',
          title: 'Leve sua equipe de vendas ao próximo nível.',
          content: 'Com os testes THT, você conhece melhor o cliente ' +
          'e adapta sua equipe de vendas a suas necessidades.'
        }
      ];
    }]);
})();
