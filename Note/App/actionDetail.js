var actionDetailController = (function () {
    function actionDetailController(noteRepo, $scope) {
        this.noteRepo = noteRepo;
        this.$scope = $scope;
        this.isClose = true;
    }
    actionDetailController.prototype.$onInit = function () {
        var _this = this;
        this.$scope.$on('detail-close', function () {
            _this.isClose = true;
        });
        this.$scope.$on('detail-open', function () {
            _this.isClose = false;
        });
        this.categories = this.noteRepo.getCategories();
    };
    actionDetailController.prototype.changeStatus = function () {
        this.action.isFinished = !this.action.isFinished;
    };
    return actionDetailController;
}());
actionDetailController.$inject = ['noteRepositoryService', '$scope'];
mdl.controller('actionDetailController', actionDetailController);
var actionDetailComponent = {
    controller: 'actionDetailController',
    templateUrl: '/app/actionDetail.html',
    bindings: {
        action: '='
    }
};
mdl.component('ntActionDetail', actionDetailComponent);
//# sourceMappingURL=actionDetail.js.map