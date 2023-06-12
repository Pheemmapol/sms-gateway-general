import { Injectable } from '@nestjs/common';

import * as request from 'request';
@Injectable()
export class SmsService {
  async sendSMS(to: string[], message: string, scheduled_time?: string) {
    let data;
    if (scheduled_time) {
      data = {
        sender: process.env.THSMS_SENDER_NAME,
        msisdn: to,
        message: message,
        scheduled_delivery: scheduled_time,
      };
    } else {
      data = {
        sender: process.env.THSMS_SENDER_NAME,
        msisdn: to,
        message: message,
      };
    }

    const options = {
      method: 'POST',
      body: data,
      json: true,
      url: 'https://thsms.com/api/send-sms',
      headers: {
        Authorization: 'Bearer ' + process.env.THSMS_TOKEN_KEY,
      },
    };

    //call the request
    return new Promise((resolve, reject) => {
      request(options, (error, response, body) => {
        if (error) {
          reject(error);
        } else if (response.statusCode === 200) {
          resolve(body);
        } else {
          reject(body);
        }
      });
    });
  }
}
