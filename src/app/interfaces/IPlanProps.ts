/* eslint-disable prettier/prettier */

import { Description } from '../entities/Description';

export interface IPlanProps {
  name: string;
  description: Description;
  value: number;
  updatedAt?: Date | null;
}
