import { Controller, Post, Body } from '@nestjs/common';
import { SmsService } from './sms.service';
import { scheduledSmsMessage, smsMessage } from '../entity/smsmessage.entity';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
@ApiTags('SMS')
@Controller('sms')
export class SmsController {
  constructor(private readonly smsService: SmsService) {}

  @ApiOperation({ summary: 'Send SMS to the input number' })
  @Post('/now')
  async sendSMS(@Body() message: smsMessage) {
    try {
      const result = await this.smsService.sendSMS(message.to, message.message);
      return { success: true, result };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }

  @ApiOperation({
    summary: 'Send scheduled SMS to the input number',
    description:
      'Note: The format of the date is "yyyy-mm-dd hh:mm:ss" using 24 hours format eg. "2021-07-22 04:45:00"',
  })
  @Post('/scheduled')
  async sendScheduledSMS(@Body() message: scheduledSmsMessage) {
    try {
      const result = await this.smsService.sendSMS(
        message.to,
        message.message,
        message.scheduled_time,
      );
      return { success: true, result };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }
}
