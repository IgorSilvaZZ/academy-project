/* eslint-disable prettier/prettier */

import { randomUUID } from 'node:crypto';

import { Replace } from '../../helpers/Replace';
import { IAcademyProps } from '../interfaces/IAcademyProps';
import { Description } from './Description';
import { Plan } from './Plan';
import { TelephoneNumber } from './TelephoneNumber';

type ReplaceAcademyProps = Replace<
  IAcademyProps,
  { createdAt?: Date; updatedAt?: Date }
>;
export class Academy {
  private props: IAcademyProps;

  constructor(props: ReplaceAcademyProps) {
    const plansIsEmpty = this.validatePlansEmpty(props.plans);

    if (plansIsEmpty) {
      throw new Error(
        'Academia precisa de pelo menos um plano para ser criada!',
      );
    }

    this.props = {
      ...props,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
  }

  public get _id(): string | undefined {
    return this.props._id;
  }

  public set _id(id: string | undefined) {
    this.props._id = id;
  }

  public get name() {
    return this.props.name;
  }

  public set name(name: string) {
    this.props.name = name;
  }

  public get email() {
    return this.props.email;
  }

  public set email(email: string) {
    this.props.email = email;
  }

  public get password() {
    return this.props.password;
  }

  public set password(password: string) {
    this.props.password = password;
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

  public get number() {
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

  public get longitude() {
    return this.props.longitude;
  }

  public set longitude(longitude: number) {
    this.props.longitude = longitude;
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

  public set daysOfWeek(daysOfWeek: string) {
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

  public get createdAt(): Date | undefined {
    return this.props.createdAt;
  }

  public get updatedAt(): Date | undefined {
    return this.props.updatedAt;
  }

  public set updatedAt(updatedAt: Date | undefined) {
    this.props.updatedAt = updatedAt;
  }

  private validatePlansEmpty(plans: Plan[]): boolean {
    return plans?.length === 0;
  }
}
