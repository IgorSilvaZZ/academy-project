/* eslint-disable prettier/prettier */

export class Description {

    private readonly description: string;

    constructor(description: string) {

        const lengthValidate = this.validateDescriptionLength(description);

        if (!lengthValidate) {
            throw new Error("Description is length invalid!")
        }

        this.description = description;
    }

    public get value () {
        return this.description;
    }

    private validateDescriptionLength(description: string): boolean {
        return description.length > 10 && description.length <= 300;
    }

}