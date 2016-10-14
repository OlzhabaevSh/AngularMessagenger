class actionsListController implements nt.IActionsListController, ng.IComponentController {
    
    actions: Array<nt.IAction>;
    currentAction: nt.IAction;

    isClose: boolean;

    constructor(private $scope: ng.IScope) {
        this.isClose = true;
    }

    $onInit() {
        this.$scope.$on('detail-close', () => {
            this.currentAction = null;
        });
    }

    create(): void {
        let id = this.actions.length;
        this.actions.push({
            id: id,
            title: "new action",
            createdDate: new Date(),
            description: 'Описание',
            isFinished: false
        });

        let act = this.actions[this.actions.length - 1];

        this.select(act);
    }

    select(action: nt.IAction) {
        this.currentAction = action;
        this.$scope.$broadcast('detail-open');
    }
}

actionsListController.$inject = ['$scope'];

mdl.controller('actionsListController', actionsListController);

let actionListComponent: ng.IComponentOptions = {
    controller: 'actionsListController',
    templateUrl: '/app/actionsList.html',
    bindings: {
        actions: '='
    }
};

mdl.component('ntActionsList', actionListComponent);
