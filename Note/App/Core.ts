namespace nt {

    export interface ICategory {
        id: number;
        fullName: string;
    }

    export interface IAction {
        id: number;
        title: string;
        isFinished: boolean;
        createdDate: Date;
        description: string;
        category?: ICategory;
    }

    export interface IActionVM {
        id: number;
        title: string;
        isFinished: boolean;
        createdDate: string;
        description: string;
        category?: ICategory;
    }

    export interface INote {
        id: number;
        title: string;
        actions: Array<IAction>;
    }

    export interface INoteVM {
        id: number;
        title: string;
        isActive: boolean;
    }

    export interface INoteRepository {
        saveNote(noteId: number, note: INote): void;
        getNote(noteId: number): INote;
        getNotes(): Array<INoteVM>;
        create(): INote;
        getCategories(): Array<ICategory>;
    }

    export interface INotesController {
        notes: Array<INoteVM>;
        
        note: INote;
        
        create(): void;
        select(note: INoteVM): void;
    }

    export interface IActionsListController {
        actions: Array<IAction>;
        currentAction: IAction;

        isClose: boolean;

        create(): void;
        select(action: IAction);
    }

    export interface IActionDetailController {
        action: IAction;

        categories: Array<ICategory>;

        isClose: boolean;

        changeStatus(): void;
        
    }


}