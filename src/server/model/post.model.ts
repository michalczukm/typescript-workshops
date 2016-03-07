import moment = require('moment');

export class Post {
    id: number;
    name: string;
    date: moment.Moment;
}