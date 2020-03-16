import Page from './page';
import utl from '../../utilities/common-utilities';
import videoGamesPage from './videogames';

class Transactions extends Page {

    //************************************************************************
    //define elements

    //Shopping cart link
    get cartLink() { $('a[@class="cart-label"]'); }


    //************************************************************************

    open() {
        super.open('video-games');
    }
}

export default new Transactions();