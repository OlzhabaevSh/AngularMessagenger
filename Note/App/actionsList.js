var actionsListController = (function () {
    function actionsListController($scope) {
        this.$scope = $scope;
    }
    actionsListController.prototype.$onChanges = function (actions) {
        console.log('$onChanges', actions);
    };
    actionsListController.prototype.create = function () {
        var id = this.actions.length;
        this.actions.push({
            id: id,
            title: "new action",
            createdDate: new Date(),
            description: 'Описание',
            isFinished: false
        });
        var act = this.actions[this.actions.length - 1];
        this.select(act);
    };
    actionsListController.prototype.select = function (action) {
        this.currentAction = action;
        this.$scope.$broadcast('detail-open');
    };
    return actionsListController;
}());
actionsListController.$inject = ['$scope'];
mdl.controller('actionsListController', actionsListController);
var actionListComponent = {
    controller: 'actionsListController',
    templateUrl: '/app/actionsList.html',
    bindings: {
        actions: '='
    }
};
mdl.component('ntActionsList', actionListComponent);
//# sourceMappingURL=actionsList.js.map