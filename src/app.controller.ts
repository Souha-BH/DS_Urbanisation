import { BadRequestException, Controller, Get, Header, Param, Request, Response } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('day-of-week/:day')
  @Header("content-type", "application/xml")
  getDayOfWeek(@Request() req, @Response() res, @Param('day') day: string): string {
    let data = `<?xml version="1.0" encoding="UTF-8"?>`;
    data += `<day>`;
    console.log(day);
    switch (day) {
      case '1':
        data += `Monday`;
        break;

      case '2':
        data += `Tuesday`;
        break;
      case '3':
        data += `Thursday`;
        break;
      case '4':
        data += `Wednesdey`;
        break;
      case '5':
        data += `Friday`;
        break;
      case '6':
        data += `Saturday`;
        break;
      case '7':
        data += `Sunday`;
        break;
      default:
        throw new BadRequestException("Day Must be between 1 and 7");
    }
    data += `</day>`;
    res.status(200).send(data);
    return data;
  }
  @Header("content-type", "application/xml")
  @Get('month-of-year/:month')
  getMonthOfTheYear(@Request() req, @Response() res, @Param('month') month: string): string {
    let data = `<?xml version="1.0" encoding="UTF-8"?>`;
    data += `<month>`;
    console.log(month);
    switch (month) {
      case '1':
        data += `January`;
        break;

      case '2':
        data += `February`;
        break;
      case '3':
        data += `March`;
        break;
      case '4':
        data += `April`;
        break;
      case '5':
        data += `May`;
        break;
      case '6':
        data += `Juin`;
        break;
      case '7':
        data += `July`;
        break;
      case '8':
        data += `August`;
        break;
      case '9':
        data += `September`;
        break;
      case '10':
        data += `October`;
        break;
      case '11':
        data += `November`;
        break;
      case '12':
        data += `December`;
        break;
      default:
        throw new BadRequestException("Month Must be between 1 and 12");
    }
    data += `</day>`;
  
    res.status(200).send(data);
    return data;
  }
}
