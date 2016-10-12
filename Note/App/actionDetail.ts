class actionDetailController implements nt.IActionDetailController, ng.IComponentController {

    action: nt.IAction;

    categories: Array<nt.ICategory>;

    constructor(private noteRepo: nt.INoteRepository) {

    }

    $onInit() {
        this.categories = this.noteRepo.getCategories();
    }

    changeStatus(): void {
        this.action.isFinished = !this.action.isFinished; 
    }
    
}
actionDetailController.$inject = ['noteRepositoryService'];

mdl.controller('actionDetailController', actionDetailController);

let actionDetailComponent: ng.IComponentOptions = {
    controller: 'actionDetailController',
    templateUrl: '/app/actionDetail.html',
    bindings: {
        action: '='
    }
};

mdl.component('ntActionDetail', actionDetailComponent);
