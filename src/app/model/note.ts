
export class Note {
    private active: boolean = false;

    constructor(public text: string, public id: number) {

    }

    activate() {
        this.active = true;
    }

    deactivate() {
        this.active = false;
    }

    isActive() {
        return this.active;
    }
}