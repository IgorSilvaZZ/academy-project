/* eslint-disable prettier/prettier */

import { Description } from "./Description";

export interface IPlanProps {
    name: string;
    description: Description;
    value: number;
    updatedAt?: Date | null;
}

export class Plan {

    private props: IPlanProps;

    constructor(props: IPlanProps) {
        this.props = {
            ...props,
            updatedAt: !props.updatedAt ? new Date() : props.updatedAt
        }
    }

    public get name() {
        return this.props.name;
    }

    public set name(name: string) {
        this.props.name = name;
    }

    public get description(): Description {
        return this.props.description;
    }

    public set description(description: Description) {
        this.props.description = description;
    }

    public get value () {
        return this.props.value;
    }

    public set value(value: number) {
        this.props.value = value;
    }

    public get updatedAt(): Date | null | undefined {
        return this.props.updatedAt;
    }

    public set updatedAt(updatedAt: Date | null | undefined) {
        this.props.updatedAt = updatedAt;
    }

}