import { IsIn, IsInt, IsOptional } from "class-validator";
import { Type } from "class-transformer";

export class GetUserParmsDto {
    @IsInt()
    @IsOptional()
    @Type(() => Number)
    id: number;
}