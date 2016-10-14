var noteController = (function () {
    function noteController(noteRepo, $scope) {
        this.noteRepo = noteRepo;
        this.$scope = $scope;
    }
    noteController.prototype.$onInit = function () {
        this.notes = this.noteRepo.getNotes();
    };
    noteController.prototype.create = function () {
        this.noteRepo.create();
        this.notes = this.noteRepo.getNotes();
        var id = this.notes.length - 1;
        var note = this.notes[id];
        this.select(note);
    };
    noteController.prototype.select = function (note) {
        var arr = this.notes.filter(function (item, i) {
            return item.isActive;
        });
        if (arr.length > 0) {
            this.noteRepo.saveNote(arr[0].id, this.note);
        }
        this.notes.forEach(function (item, i) {
            item.isActive = false;
        });
        note.isActive = true;
        this.note = this.noteRepo.getNote(note.id);
        this.$scope.$broadcast('detail-close');
    };
    return noteController;
}());
noteController.$inject = ['noteRepositoryService', '$scope'];
mdl.controller('noteController', noteController);
var noteComponent = {
    controller: 'noteController',
    templateUrl: '/app/note.html'
};
mdl.component('ntNote', noteComponent);
//# sourceMappingURL=note.js.map