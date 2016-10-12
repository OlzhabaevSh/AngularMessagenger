class actionsListController implements nt.IActionsListController, ng.IComponentController {
    
    actions: Array<nt.IAction>;
    currentAction: nt.IAction;

    constructor() {
        
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

        this.currentAction = this.actions[this.actions.length - 1];
    }

    select(action: nt.IAction) {
        this.currentAction = action;
    }
}

mdl.controller('actionsListController', actionsListController);

let actionListComponent: ng.IComponentOptions = {
    controller: 'actionsListController',
    templateUrl: '/app/actionsList.html',
    bindings: {
        actions: '='
    }
};

mdl.component('ntActionsList', actionListComponent);
