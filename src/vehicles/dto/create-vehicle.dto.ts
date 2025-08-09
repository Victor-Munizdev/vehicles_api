import { IsString, IsInt, Min, Max } from 'class-validator';

export class CreateVehicleDto {
  @IsString()
  marca: string;

  @IsString()
  modelo: string;

  @IsInt()
  @Min(1886)
  @Max(2100)
  ano: number;
}