import { IsOptional, IsString } from "class-validator";

export class AppCreateDto {
    @IsString()
    name: string;

    @IsString()
    @IsOptional()
    description:string
}