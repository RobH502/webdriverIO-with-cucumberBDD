import Page from './page';
import utl from '../../utilities/common-utilities';
import loginPage from './login.page';

class VideoGamesPage extends Page {

    get videoGamesHeader()        { return $('//*[@class="page-title"]//child::h1'); }
    get videoGamesLink()          { return $('//a[contains(@href, "/video-games")]'); }
    get xboxOneLink()             { return $('//a[contains(@href, "/xbox-one")]'); }
    get nintendoSwitch()          { return $('//a[contains(@href, "/nintendo-switch")]'); }

    //Xbox One Submenu Items
    get xboxOneConsoles()         { return $('//a[contains(@href, "/xbox-one-consoles")]'); }
    get xboxOneGames()            { return $('//a[contains(@href, "/xbox-one-games")]'); }    
    get xboxOneAccessories()      { return $('//a[contains(@href, "/xbox-one-accessories")]'); }

    open() {
        super.open('');
    }

    //Hover over a dropdown menu option
    hoverOver(menuOpt) {
        this.videoGamesLink.moveTo();
        switch(menuOpt) {
            case "Video Game":
                this.videoGamesLink.moveTo();
                break;
            case "Xbox One":
                this.xboxOneLink.moveTo();
                break;
            case "Nintento Switch":
                this.nintendoSwitch.moveTo();
                break;
        }
    }

    //Verifies that the user is on the correct page by checking if the correct respective header is present
    correctHeader(header) {
        this.videoGamesHeader.waitForDisplayed(10000);
        return this.videoGamesHeader.getText().should.equal(header);
    }

    //***********************************************************************************
    //Click the "Video Game" link
    clickLink() {
        this.videoGamesLink.click();
    }

    //***********************************************************************************
    //Video Games Primary Dropdown Menu
    //Click one of the two primary "Video Game" dropdown menu options
    clickMenuOption(menuOpt) {
        menuOpt === "Xbox One" ? this.xboxOneLink.click() : this.nintendoSwitch.click();
    }

    //***********************************************************************************
    //Xbox Submenu

    //Click one of the three options in the Xbox submenu
    selectXboxSubmenuOption(menuOpt) {
        this.xboxOneConsoles.moveTo();
        switch(menuOpt) {
            case "Xbox One Consoles":
                this.xboxOneConsoles.click();
                break;
            case "Xbox One Games":
                this.xboxOneGames.click();
                break;
            case "Xbox One Accessories":
                this.xboxOneAccessories.click();
                break;
        }
    }
}

export default new VideoGamesPage();