/* eslint-disable prettier/prettier */

import { Replace } from "src/helpers/Replace";
import { Description } from "./Description";
import { IPlanProps, Plan } from "./Plan";
import { TelephoneNumber } from "./TelephoneNumber";

export interface IAcademyProps {
  name: string;
  description: Description;
  telephoneNumber: TelephoneNumber;
  address: string;
  city: string;
  number: string;
  postalCode: string;
  neighborhood: string;
  latitude: number;
  longitude: number;
  plans: Plan[];
  daysOfWeek: string[];
  openingTime: string;
  closingTime: string;
  createdAt: Date;
  updatedAt: Date;
}

type ReplaceAcademyProps = Replace<IAcademyProps, { createdAt?: Date, updatedAt?: Date }>

export class Academy {
  private props: IAcademyProps;

  constructor(props: ReplaceAcademyProps) {

    const plansIsEmpty = this.validatePlansEmpty(props);

    if (plansIsEmpty) {
      throw new Error('Academia precisa de pelo menos um plano para ser criada!');
    }

    this.props = {
      ...props,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
  }

  public get name() {
    return this.props.name;
  }

  public set name(name: string) {
    this.name = name;
  }

  public get description(): Description {
    return this.props.description;
  }

  public set description(description: Description) {
    this.props.description = description;
  }

  public get telephoneNumber(): TelephoneNumber {
    return this.props.telephoneNumber;
  }

  public set telephoneNumber(telephoneNumber: TelephoneNumber) {
    this.props.telephoneNumber = telephoneNumber;
  }

  public get address() {
    return this.props.address;
  }

  public set address(address: string) {
    this.props.address = address;
  }

  public get city() {
    return this.props.city;
  }

  public set city(city: string) {
    this.props.city = city;
  }

  public get number () {
    return this.props.number;
  }

  public set number(number: string) {
    this.props.number = number;
  }

  public get postalCode() {
    return this.props.postalCode;
  }

  public set postalCode(postalCode: string) {
    this.props.postalCode = postalCode;
  }

  public get neighborhood() {
    return this.props.neighborhood;
  }

  public set neighborhood(neighborhood: string) {
    this.props.neighborhood = neighborhood;
  }

  public get latitude() {
    return this.props.latitude;
  }

  public set latitude(latitude: number) {
    this.props.latitude = latitude;
  }

  public get plans() {
    return this.props.plans;
  }

  public set plans(plans: Plan[]) {
    this.props.plans = plans;
  }

  public get daysOfWeek() {
    return this.props.daysOfWeek;
  }

  public set daysOfWeek(daysOfWeek: string[]) {
    this.props.daysOfWeek = daysOfWeek;
  }

  public get openingTime() {
    return this.props.openingTime;
  }

  public set openingTime(openingTime: string) {
    this.props.openingTime = openingTime;
  }

  public get closingTime() {
    return this.props.closingTime;
  }

  public set closingTime(closingTime: string) {
    this.props.closingTime = closingTime;
  }

  public get createdAt() {
    return this.props.createdAt;
  }

  public get updatedAt() {
    return this.props.updatedAt;
  }

  public set updatedAt(updatedAt: Date) {
    this.props.updatedAt = updatedAt;
  }

  private validatePlansEmpty({ plans }: ReplaceAcademyProps): boolean {
    return plans.length === 0;
  }

}
