var noteRepositoryService = (function () {
    function noteRepositoryService() {
        this.notes = new Array();
        this.generateDates();
    }
    noteRepositoryService.prototype.saveNote = function (noteId, note) {
        var arr = this.notes.filter(function (item, i) { return item.id == noteId; });
        if (arr.length > 0) {
            arr[0] = note;
        }
    };
    noteRepositoryService.prototype.getNote = function (noteId) {
        return this.notes.filter(function (item) { return item.id == noteId; })[0];
    };
    noteRepositoryService.prototype.getNotes = function () {
        var res = new Array();
        this.notes.forEach(function (item, i) {
            res.push({
                id: item.id,
                title: item.title,
                isActive: false
            });
        });
        return res;
    };
    noteRepositoryService.prototype.create = function () {
        var id = this.notes.length;
        var note = {
            id: id,
            actions: new Array(),
            title: 'note ' + id
        };
        this.notes.push(note);
        return note;
    };
    noteRepositoryService.prototype.getCategories = function () {
        var res = new Array();
        res.push({
            id: 1,
            fullName: 'Новость'
        });
        res.push({
            id: 2,
            fullName: 'Идея'
        });
        res.push({
            id: 3,
            fullName: 'Праздник'
        });
        res.push({
            id: 4,
            fullName: 'Встреча'
        });
        return res;
    };
    noteRepositoryService.prototype.generateDates = function () {
        //this.notes.push({
        //    id: 0,
        //    title: 'note 0',
        //    actions: new Array()
        //});
        //this.notes.push({
        //    id: 1,
        //    title: 'note 1',
        //    actions: new Array()
        //});
    };
    return noteRepositoryService;
}());
mdl.service('noteRepositoryService', noteRepositoryService);
//# sourceMappingURL=noteRepository.js.map