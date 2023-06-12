import { ApiProperty } from '@nestjs/swagger';
export class smsMessage {
  @ApiProperty()
  to: string[];

  @ApiProperty()
  message: string;
}

export class scheduledSmsMessage {
  @ApiProperty()
  to: string[];

  @ApiProperty()
  message: string;

  @ApiProperty()
  scheduled_time: string;
}
