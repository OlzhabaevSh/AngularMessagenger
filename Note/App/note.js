var noteController = (function () {
    function noteController(noteRepo, $scope) {
        this.noteRepo = noteRepo;
        this.$scope = $scope;
    }
    noteController.prototype.$onInit = function () {
        this.notes = this.noteRepo.getNotes();
    };
    noteController.prototype.create = function () {
        var note = this.noteRepo.create();
        this.notes = this.noteRepo.getNotes();
        var id = this.notes.length - 1;
        this.notes[id].isActive = true;
        this.note = note;
        this.actions = null;
        this.actions = this.note.actions;
        this.$scope.$broadcast('detail-close');
    };
    noteController.prototype.select = function (note) {
        var arr = this.notes.filter(function (item, i) {
            return item.isActive;
        });
        if (arr.length > 0) {
            this.noteRepo.saveNote(arr[0].id, this.note);
        }
        this.note = null;
        this.notes.forEach(function (item, i) {
            item.isActive = false;
        });
        note.isActive = true;
        this.note = this.noteRepo.getNote(note.id);
        this.actions = null;
        this.actions = this.note.actions;
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