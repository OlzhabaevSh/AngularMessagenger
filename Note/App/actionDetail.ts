class actionDetailController implements nt.IActionDetailController, ng.IComponentController {

    action: nt.IAction;

    categories: Array<nt.ICategory>;

    isClose: boolean;

    constructor(private noteRepo: nt.INoteRepository, private $scope: ng.IScope) {
        this.isClose = true;
    }

    $onInit() {
        this.$scope.$on('detail-close', () => {
            this.isClose = true;
        });

        this.$scope.$on('detail-open', () => {
            this.isClose = false;
        });

        this.categories = this.noteRepo.getCategories();
    }

    changeStatus(): void {
        this.action.isFinished = !this.action.isFinished; 
    }
    
}
actionDetailController.$inject = ['noteRepositoryService', '$scope'];

mdl.controller('actionDetailController', actionDetailController);

let actionDetailComponent: ng.IComponentOptions = {
    controller: 'actionDetailController',
    templateUrl: '/app/actionDetail.html',
    bindings: {
        action: '='
    }
};

mdl.component('ntActionDetail', actionDetailComponent);
