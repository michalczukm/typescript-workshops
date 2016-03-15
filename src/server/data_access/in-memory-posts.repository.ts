import {Post} from '../model/post';
import {Repository} from './repository';
import moment = require('moment');

export class InMemoryPostsRepository implements Repository<Post> {
    private posts: Array<Post>;

    constructor() {
        this.posts = [
            <Post> {
                id: 1,
                title: 'First Post ever',
                headline: 'Williamsburg roof party typewriter yuccie',
                date: moment().add(-10, 'days'),
                content: `Williamsburg roof party typewriter yuccie, narwhal shoreditch pabst knausgaard kitsch tattooed pug kickstarter everyday carry photo booth cred. Kogi fanny pack banh mi hashtag, plaid authentic chillwave next level wolf blog neutra mumblecore sriracha.`
            },
            <Post> {
                id: 2,
                title: 'Another post',
                headline: "Food truck williamsburg kale chips pop-up you probably haven't heard of them",
                date: moment().add(-5, 'days'),
                content: `Food truck williamsburg kale chips pop-up you probably haven't heard of them, 8-bit hoodie vegan occupy kickstarter. Chillwave before they sold out drinking vinegar flexitarian, cold-pressed slow-carb franzen affogato banh mi squid. Farm-to-table raw denim plaid, meditation artisan pug distillery health goth. Cred swag art party stumptown meggings actually, blue bottle schlitz fanny pack celiac blog selfies put a bird on it pop-up tofu. `
            },
            <Post> {
                id: 3,
                title: 'Another great post',
                headline: 'Vinyl typewriter authentic cool',
                date: moment(),
                content: `Vinyl typewriter authentic, intelligentsia meh brunch brooklyn small batch truffaut DIY twee narwhal keffiyeh kombucha tumblr.`
            },
        ];
    }

    public getAll(): Array<Post> {
        return this.posts;
    }

    public getById(id: number): Post {
        // don't do that in production - returning `null`/`undefined` is mostly not a good idea
        return this.posts.filter((post: Post) => post.id == id)[0];
    }
}
