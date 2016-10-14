class noteController implements nt.INotesController, ng.IComponentController {

    notes: Array<nt.INoteVM>;
    
    note: nt.INote;

    constructor(private noteRepo: nt.INoteRepository, private $scope: ng.IScope) {
    }

    $onInit(): void {
        this.notes = this.noteRepo.getNotes();
    }

    create(): void {
        this.noteRepo.create();

        this.notes = this.noteRepo.getNotes();

        let id = this.notes.length - 1;

        let note = this.notes[id];

        this.select(note);
    }

    select(note: nt.INoteVM): void {

        let arr = this.notes.filter((item, i) => {
            return item.isActive;
        });

        if (arr.length > 0) {
            this.noteRepo.saveNote(arr[0].id, this.note);
        }
        
        this.notes.forEach((item, i) => {
            item.isActive = false;
        });

        note.isActive = true;

        this.note = this.noteRepo.getNote(note.id);
        
        this.$scope.$broadcast('detail-close');
    }
}
noteController.$inject = ['noteRepositoryService', '$scope'];

mdl.controller('noteController', noteController);

let noteComponent: ng.IComponentOptions = {
    controller: 'noteController',
    templateUrl: '/app/note.html'
}; 

mdl.component('ntNote', noteComponent);