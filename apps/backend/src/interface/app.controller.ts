import { Body, Controller, Get, Post } from "@nestjs/common";
import { v4 as uuidv4 } from 'uuid';

// internal
import { AppService } from "../application/app.service";
import { ItemsType } from "../domain/model/app";
import { AppCreateDto } from "./dto/app.create";

@Controller('v1')
export class AppController {
    private items:ItemsType[] = []

    constructor(private readonly appService: AppService) { this.items.push({
        id:uuidv4(),
        name:'Test 1',
        description:'',
        createdAt:new Date()
    })}

    @Get('items')
    async get() {
        return {data:this.items}
    }

    @Post('items')
    async create(@Body() body:AppCreateDto) {
        const item = {
            id:uuidv4(),
            name:body.name,
            description:body.description,
            createdAt:new Date()
        }
        this.items.push(item)

        return item
    }
    
}