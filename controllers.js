angular.module('meuTreino').controller('personalCtrl', function($scope){
	$scope.titulo = "Lista de Personal";

	$scope.personais = [

		{nome: "Thiago", bairro:"Centro", especialidades:"Fortalecimento, Emagrecimento"},
		{nome: "Celso", bairro:"Lapa", especialidades:"CrossFit, Emagrecimento"},
		{nome: "Lúcia", bairro:"Estácio", especialidades:"Alongamento"}

	];

	$scope.generos = [

		{descricao: "Todos", codigo: 1},
		{descricao: "Somente Homens", codigo: 2},
		{descricao: "Somente Mulheres", codigo: 3}
		
	];


	$scope.adicionarPersonal = function(personal){
		$scope.personais.push(personal);
		delete $scope.personal;
	};

	$scope.apagarPersonal = function(personais){
		$scope.personais = personais.filter(function (personal){
			if (!personal.selecionado) return personal;
		});
	};

	$scope.isPersonalSelecionado = function(personais){
		return personais.some(function(personal){
			return personal.selecionado;
		});
	};

    $scope.vm = {
      address: {}
    };
    

	$scope.filtra = function(personais){
		$scope.personais = personais.filter(function (personal){
			if (personal.bairro == $scope.vm.address.sublocality_level_1) return personal;
		});
	};

});
