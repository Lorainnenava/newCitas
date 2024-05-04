import { Injectable } from "@nestjs/common";
import { DateService } from "../date/date.service";

@Injectable()
export class AgeService {
    constructor(private dateService: DateService) { }
    createAge(date: string): number {

        const dateOfBirth = new Date(date);
        const currentDate = new Date(this.dateService.getCurrentDate());
        let age = currentDate.getFullYear() - dateOfBirth.getFullYear();

        if (
            currentDate.getMonth() < dateOfBirth.getMonth() ||
            (currentDate.getMonth() == dateOfBirth.getMonth() &&
                currentDate.getDate() < dateOfBirth.getDate())
        ) {
            age--
        }

        return age
    }
}