import {Post} from '../../../server/model/post';
import moment = require('moment');

export class HomeController {
    private _: _.LoDashStatic;
    
    title: string = "Goyello TypeScript Workshops12345";
    viewsCount: number = 10000;
    posts: Array<Post>;
    latestPost: Post;
    
    constructor(lodash: _.LoDashStatic) {
        this._ = lodash;
        console.log(_);
        this.activate();
    }
    
    private activate() {
        this.posts = [
            <Post> {
                id: 1,
                title: 'client: First Post ever',
                headline: 'Williamsburg roof party typewriter yuccie',
                date: moment().add(-10, 'days'),
                content: `Williamsburg roof party typewriter yuccie, narwhal shoreditch pabst knausgaard kitsch tattooed pug kickstarter everyday carry photo booth cred. Kogi fanny pack banh mi hashtag, plaid authentic chillwave next level wolf blog neutra mumblecore sriracha.`
            },
            <Post> {
                id: 2,
                title: 'client: Another post',
                headline: "Food truck williamsburg kale chips pop-up you probably haven't heard of them",
                date: moment().add(-5, 'days'),
                content: `Food truck williamsburg kale chips pop-up you probably haven't heard of them, 8-bit hoodie vegan occupy kickstarter. Chillwave before they sold out drinking vinegar flexitarian, cold-pressed slow-carb franzen affogato banh mi squid. Farm-to-table raw denim plaid, meditation artisan pug distillery health goth. Cred swag art party stumptown meggings actually, blue bottle schlitz fanny pack celiac blog selfies put a bird on it pop-up tofu. `
            },
            <Post> {
                id: 3,
                title: 'client: Another great post',
                headline: 'Vinyl typewriter authentic',
                date: moment(),
                content: `Vinyl typewriter authentic, intelligentsia meh brunch brooklyn small batch truffaut DIY twee narwhal keffiyeh kombucha tumblr.`
            },
        ];
        
        this.latestPost = this._.sortBy(this.posts, (post: Post) => {
            return -post.date;
        })[0];
    }
}
