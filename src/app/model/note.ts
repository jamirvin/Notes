
export class Note {
    private active: boolean = false;

    constructor(public text: string) {

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