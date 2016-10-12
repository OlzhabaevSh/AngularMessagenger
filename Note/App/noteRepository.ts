class noteRepositoryService implements nt.INoteRepository {

    private notes: Array<nt.INote>;

    constructor() {
        this.notes = new Array();
        this.generateDates();
    }

    saveNote(noteId: number, note: nt.INote): void {
        let arr = this.notes.filter((item, i) => { return item.id == noteId });

        if (arr.length > 0) {
            arr[0] = note;
        }
    }

    getNote(noteId: number): nt.INote {
        return this.notes.filter((item) => { return item.id == noteId })[0];
    }

    getNotes(): Array<nt.INoteVM> {
        var res = new Array<nt.INoteVM>();

        this.notes.forEach((item, i) => {
            res.push({
                id: item.id,
                title: item.title,
                isActive: false
            });
        });

        return res;
    }

    create(): nt.INote {
        let id = this.notes.length;
        let note: nt.INote = {
            id: id,
            actions: new Array(),
            title: 'note ' + id
        };

        this.notes.push(note);

        return note;
    }

    getCategories(): Array<nt.ICategory> {
        let res = new Array<nt.ICategory>();

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
    }

    private generateDates(): void {
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
    }

}

mdl.service('noteRepositoryService', noteRepositoryService);