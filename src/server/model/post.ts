import moment = require('moment');

export class Post {
    id: number;
    title: string;
    headline: string;
    date: moment.Moment;
    content: string;
}
