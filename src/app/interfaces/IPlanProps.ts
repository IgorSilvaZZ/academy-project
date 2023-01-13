/* eslint-disable prettier/prettier */

import { Description } from '../entities/Description';

export interface IPlanProps {
  id?: string;
  name: string;
  description: Description;
  value: number;
  updatedAt?: Date | null;
}
